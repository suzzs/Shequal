import React, { useRef, useEffect, MutableRefObject } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  FilesetResolver,
  PoseLandmarker,
  PoseLandmarkerResult,
  NormalizedLandmark,
} from '@mediapipe/tasks-vision';
import { SkeletonHelper } from 'three';

function lookAtDirectionWithCorrection(
  bone: THREE.Bone,
  direction: THREE.Vector3,
  {
    up = new THREE.Vector3(0, 1, 0),
    slerpFactor = 0.2,
    correctionEuler = null,
  }: {
    up?: THREE.Vector3;
    slerpFactor?: number;
    correctionEuler?: THREE.Euler | null;
  } = {}
) {
  const targetQuat = new THREE.Quaternion();
  const m = new THREE.Matrix4();

  m.lookAt(new THREE.Vector3(), direction.clone().normalize(), up);
  targetQuat.setFromRotationMatrix(m);

  if (bone.parent) {
    const parentWorldQuat = new THREE.Quaternion();
    bone.parent.getWorldQuaternion(parentWorldQuat).invert();
    targetQuat.premultiply(parentWorldQuat);
  }

  if (correctionEuler) {
    const correctionQuat = new THREE.Quaternion().setFromEuler(correctionEuler);
    targetQuat.multiply(correctionQuat);
  }

  bone.quaternion.slerp(targetQuat, slerpFactor);
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const threeCanvasRef = useRef<HTMLDivElement | null>(null);
  const poseLandmarkerRef = useRef<PoseLandmarker | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const rootBoneRef = useRef<THREE.Bone | null>(null);
  const skinnedMeshRef = useRef<THREE.SkinnedMesh | null>(null);

  useEffect(() => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;

    async function init() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 960 },
      });
      video.srcObject = stream;
      await video.play();

      const fileset = await FilesetResolver.forVisionTasks('/mediapipe/tasks-vision/');
      const poseLandmarker = await PoseLandmarker.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath: '/mediapipe/pose/pose_landmarker.task',
        },
        runningMode: 'VIDEO',
        numPoses: 1,
      });
      poseLandmarkerRef.current = poseLandmarker;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        canvas.width / canvas.height,
        0.1,
        1000
      );
      camera.position.set(0, 0, 5);

      sceneRef.current = scene;
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(canvas.width, canvas.height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);
      rendererRef.current = renderer;

      threeCanvasRef.current!.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      loader.load('/cholo.glb', (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        model.scale.set(1 / 25,1/27,1/28);
        modelRef.current = model;

        const meshes: THREE.SkinnedMesh[] = [];
        model.traverse((child) => {
          if ((child as THREE.SkinnedMesh).isSkinnedMesh) {
            meshes.push(child as THREE.SkinnedMesh);
          } else if ((child as THREE.Bone).isBone) {
            console.log(child.name);
          }
        });

        skinnedMeshRef.current = meshes[0];

        model.traverse((object) => {
          if ((object as THREE.SkinnedMesh).isSkinnedMesh) {
            const skeleton = (object as THREE.SkinnedMesh).skeleton;
            rootBoneRef.current = skeleton.bones[0];
          }
        });

        const helper = new SkeletonHelper(model);
        scene.add(helper);
      });

      detectPose();
    }

    async function detectPose() {
      const video = videoRef.current!;
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      const poseLandmarker = poseLandmarkerRef.current!;
      const scene = sceneRef.current!;
      const camera = cameraRef.current!;
      const renderer = rendererRef.current!;
      const rootBone = rootBoneRef.current;
      const model = modelRef.current!;
      const skinnedMesh = skinnedMeshRef.current!;

      const results: PoseLandmarkerResult = poseLandmarker.detectForVideo(video, performance.now());

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (results.landmarks && results.landmarks.length > 0) {
        const landmarks = results.landmarks[0];

        const requiredIndices = [11, 12, 23, 24];
        const allPresent = requiredIndices.every(i => landmarks[i] && typeof landmarks[i].x === 'number');

        if (!allPresent) {
          requestAnimationFrame(detectPose);
          return;
        }

        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;

        for (const landmark of landmarks) {
          const x = landmark.x * canvas.width;
          const y = landmark.y * canvas.height;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
        }

   if (model && camera && renderer) {

          const midpoint = (a, b) => {
            return {
              x: (a.x + b.x) / 2,
              y: (a.y + b.y) / 2,
              z: (a.z + b.z) / 2,
            };
          };


          const landmarkToWorldPos = (landmark: NormalizedLandmark, camera: THREE.Camera): THREE.Vector3 => {
            const ndcX = landmark.x * 2 - 1;
            const ndcY = -(landmark.y * 2 - 1);
            const depthZ = 0.3;
            const ndc = new THREE.Vector3(ndcX, ndcY, depthZ);
            return ndc.unproject(camera);
          };

          const upper = midpoint(landmarks[11], landmarks[12]);
          const lower = midpoint(landmarks[23], landmarks[24]);
          const center = midpoint(upper, lower);

          const newWorldPos = landmarkToWorldPos(center, camera);
          newWorldPos.y += 0.015;
          model.position.copy(newWorldPos);

          const shoulderRPos = landmarkToWorldPos(landmarks[12], camera);
          const elbowRPos = landmarkToWorldPos(landmarks[14], camera);
          const shoulderRBone = model.getObjectByName("shoulderR") as THREE.Bone;

          const shoulderToElbow = new THREE.Vector3().subVectors(elbowRPos, shoulderRPos).normalize();
          lookAtDirectionWithCorrection(shoulderRBone, shoulderToElbow, {
            correctionEuler: new THREE.Euler(-Math.PI / 8, 0, 0),
            slerpFactor: 0.25,
          });


          const shoulderLPos = landmarkToWorldPos(landmarks[11], camera);
          const elbowLPos = landmarkToWorldPos(landmarks[13], camera);
          const shoulderLBone = model.getObjectByName("shoulderL") as THREE.Bone;

          const shoulderToElbowL = new THREE.Vector3().subVectors(elbowLPos, shoulderLPos).normalize();
          lookAtDirectionWithCorrection(shoulderLBone, shoulderToElbowL, {
            correctionEuler: new THREE.Euler(-Math.PI / 8, 0, 0),
            slerpFactor: 0.25,
          });

      

        
        }
      }

      renderer.render(scene, camera);
      requestAnimationFrame(detectPose);
    }

    init();

    return () => {
      if (poseLandmarkerRef.current) poseLandmarkerRef.current.close();
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: 1280, height: 960 }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ width: '100%', height: '100%' }}
      />
      <canvas
        ref={canvasRef}
        width={1280}
        height={960}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        ref={threeCanvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

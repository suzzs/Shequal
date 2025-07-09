import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  FilesetResolver,
  PoseLandmarker,
} from '@mediapipe/tasks-vision';
import { SkeletonHelper } from 'three';

export default function Home() {
  const VideoRef = useRef(null);
  const canvasRef = useRef(null);
  const threeCanvasRef = useRef(null);
  const PoseLandmarkerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const rootBoneRef = useRef(null);
  const skinnedMeshRef = useRef(null);



  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
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

      console.log("The width and height of the canvas is: ", canvas.width, " and :", canvas.height);

      threeCanvasRef.current.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load('/model.glb', (gltf) => {
      scene.add(gltf.scene);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
}

import React, { useState } from 'react';
import { Header } from './header_comp';

interface Craft {
  name: string;
  description: string;
  imageUrl: string;
  moreInfoUrl?: string;
}

const CRAFTS: Craft[] = [
  {
    name: 'Karuwa',
    description:
      'Karuwa is a traditional Nepali brass or copper water vessel with a spout. It is used for serving water or other beverages and is an important part of rituals and ceremonies.',
    imageUrl: '/images/karuwa.jpg',
    moreInfoUrl: 'https://en.wikipedia.org/wiki/Karuwa',
  },
  {
    name: 'Khadkilo',
    description:
      'Khadkilo is a traditional wooden basin used to wash the feet of the bride during marriage ceremonies. It symbolizes purification and respect in Nepali culture.',
    imageUrl: '/images/khadkilo.jpg',
  },
  {
    name: 'Indra Jatra Masks',
    description:
      'The Indra Jatra festival features traditional masks representing gods, demons, and mythical creatures. These vibrant masks play a key role in masked dances and processions in Kathmandu.',
    imageUrl: '/images/indra-jatra-mask.jpg',
    moreInfoUrl: 'https://en.wikipedia.org/wiki/Indra_Jatra',
  },
];

const Crafts: React.FC = () => {
  const [commentsMap, setCommentsMap] = useState<{ [key: number]: string[] }>({});
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});

  const handleAddComment = (index: number) => {
    const comment = commentInputs[index]?.trim();
    if (!comment) return;
    setCommentsMap(prev => ({
      ...prev,
      [index]: [...(prev[index] || []), comment],
    }));
    setCommentInputs(prev => ({ ...prev, [index]: '' }));
  };

  return (
    <>
      <Header />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 30 }}>
          🛕 Nepali Traditional Crafts & Artifacts
        </h1>

        {CRAFTS.map((craft, i) => (
          <section
            key={i}
            style={{
              marginBottom: 40,
              padding: 20,
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <h2 style={{ fontSize: '1.8rem', marginBottom: 12 }}>{craft.name}</h2>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <img
                src={craft.imageUrl}
                alt={craft.name}
                style={{
                  width: 200,
                  height: 140,
                  objectFit: 'cover',
                  borderRadius: 10,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
                loading="lazy"
              />
              <p style={{ fontSize: '1.1rem', lineHeight: 1.5 }}>{craft.description}</p>
            </div>
            {craft.moreInfoUrl && (
              <a
                href={craft.moreInfoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: 10,
                  color: '#ff6f00',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Learn more
              </a>
            )}

            {/* Comment Section */}
            <div style={{ marginTop: 25 }}>
              <h3 style={{ marginBottom: 10 }}>Share Your Experience</h3>
              <textarea
                rows={3}
                value={commentInputs[i] || ''}
                onChange={e =>
                  setCommentInputs(prev => ({ ...prev, [i]: e.target.value }))
                }
                placeholder={`Write your story or experience with ${craft.name}...`}
                style={{
                  width: '100%',
                  padding: 10,
                  fontSize: '1rem',
                  borderRadius: 8,
                  border: '1px solid #ccc',
                  resize: 'vertical',
                }}
              />
              <button
                onClick={() => handleAddComment(i)}
                style={{
                  marginTop: 10,
                  padding: '10px 20px',
                  backgroundColor: '#ff6f00',
                  border: 'none',
                  color: 'white',
                  borderRadius: 8,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Add Comment
              </button>

              <div style={{ marginTop: 15 }}>
                {(commentsMap[i] && commentsMap[i].length > 0) ? (
                  commentsMap[i].map((c, idx) => (
                    <p
                      key={idx}
                      style={{
                        borderBottom: '1px solid #ddd',
                        paddingBottom: 8,
                        marginBottom: 8,
                      }}
                    >
                      {c}
                    </p>
                  ))
                ) : (
                  <p style={{ fontStyle: 'italic', color: '#777' }}>
                    No comments yet. Be the first to share your story!
                  </p>
                )}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Crafts;
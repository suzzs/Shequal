import React, { useEffect, useState } from 'react';
import { Header } from './header_comp';

interface Festival {
  name: string;
  date?: string; // optional if historical/static
  description: string;
  history: string;
  imageUrl: string;
  moreInfoUrl?: string;
}

const STATIC_FESTIVALS: Festival[] = [
  {
    name: 'Dashain',
    description: 'The biggest and most auspicious festival in Nepal.',
    history:
      'Dashain celebrates the victory of good over evil. It lasts 15 days and involves animal sacrifices, family gatherings, and blessings.',
    imageUrl: '/dashain.png',
    moreInfoUrl: 'https://en.wikipedia.org/wiki/Dashain',
  },
  {
    name: 'Tihar',
    description: 'Festival of Lights, honoring Laxmi, the goddess of wealth.',
    history:
      'Tihar spans 5 days and includes worship of crows, dogs, cows, and brothers. It features beautiful light decorations and songs.',
    imageUrl: '/tihar.png',
    moreInfoUrl: 'https://en.wikipedia.org/wiki/Tihar',
  },
  {
    name: 'Indra Jatra',
    description:
      'A festival of masked dances and chariot procession in Kathmandu.',
    history:
      'Indra Jatra honors Indra, the god of rain, with processions featuring the living goddess Kumari.',
    imageUrl: '/indra-jatra.png',
    moreInfoUrl: 'https://en.wikipedia.org/wiki/Indra_Jatra',
  },
  // Add more with rich info and images...
];

// Utility to get countdown timer to a date string
function getCountdown(dateStr: string) {
  const now = new Date();
  const festivalDate = new Date(dateStr + 'T00:00:00');
  const diff = festivalDate.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

const Festivals: React.FC = () => {
  const [upcomingFestivals, setUpcomingFestivals] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Comments stored per festival index in an object: { [index]: string[] }
  const [commentsMap, setCommentsMap] = useState<{ [key: number]: string[] }>({});

  // Input box value for each festival index
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const res = await fetch(
          'https://npclapi.casualsnek.eu.org/holidays/2025'
        );
        if (!res.ok) throw new Error('Failed to fetch upcoming events');
        const apiFestivalsRaw = await res.json();

        const apiFestivals: Festival[] = apiFestivalsRaw.map((f: any) => ({
          name: f.event,
          date: f.date,
          description: f.holiday ? 'Public Holiday' : 'Festival',
          history: '',
          imageUrl: '',
          moreInfoUrl: '',
        }));

        const merged = apiFestivals.map(apiF => {
          const staticF = STATIC_FESTIVALS.find(
            s => s.name.toLowerCase() === apiF.name.toLowerCase()
          );
          return staticF ? { ...apiF, ...staticF } : apiF;
        });

        setUpcomingFestivals(merged);
      } catch (err) {
        setError('Could not fetch upcoming festival data, showing static info');
        setUpcomingFestivals(STATIC_FESTIVALS);
      } finally {
        setLoading(false);
      }
    }
    fetchUpcoming();
  }, []);

  const allFestivals = [...STATIC_FESTIVALS];
  const searchResults = searchTerm
    ? allFestivals.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Handle adding comment for a given festival index
  function handleAddComment(index: number) {
    const comment = commentInputs[index]?.trim();
    if (!comment) return;
    setCommentsMap(prev => ({
      ...prev,
      [index]: [...(prev[index] || []), comment],
    }));
    setCommentInputs(prev => ({ ...prev, [index]: '' }));
  }

  return (
    <>
      <Header />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 20 }}>
          🎉 Nepali Festivals & Occasions
        </h1>

        <input
          type="text"
          placeholder="Search festivals (e.g. Dashain)..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: 30,
            fontSize: '1.1rem',
            borderRadius: 8,
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />

        {searchTerm ? (
          <>
            <h2>Search Results</h2>
            {searchResults.length ? (
              searchResults.map((f, i) => (
                <FestivalCard
                  key={i}
                  index={i}
                  festival={f}
                  expanded={expandedIndex === i}
                  onToggle={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                  countdown={f.date ? getCountdown(f.date) : null}
                  comments={commentsMap[i] || []}
                  commentInput={commentInputs[i] || ''}
                  onCommentChange={(val) =>
                    setCommentInputs(prev => ({ ...prev, [i]: val }))
                  }
                  onAddComment={() => handleAddComment(i)}
                />
              ))
            ) : (
              <p>No festival found with that name.</p>
            )}
          </>
        ) : (
          <>
            {loading && <p>Loading upcoming festivals...</p>}
            {error && (
              <p style={{ color: 'red', marginBottom: 20 }}>{error}</p>
            )}

            <section>
              <h2>📅 Upcoming Festivals</h2>
              {upcomingFestivals.length ? (
                upcomingFestivals.map((f, i) => (
                  <FestivalCard
                    key={i}
                    index={i}
                    festival={f}
                    expanded={expandedIndex === i}
                    onToggle={() =>
                      setExpandedIndex(expandedIndex === i ? null : i)
                    }
                    countdown={f.date ? getCountdown(f.date) : null}
                    comments={commentsMap[i] || []}
                    commentInput={commentInputs[i] || ''}
                    onCommentChange={(val) =>
                      setCommentInputs(prev => ({ ...prev, [i]: val }))
                    }
                    onAddComment={() => handleAddComment(i)}
                  />
                ))
              ) : (
                <p>No upcoming festivals found.</p>
              )}
            </section>
          </>
        )}
      </main>
    </>
  );
};

interface FestivalCardProps {
  index: number;
  festival: Festival;
  expanded: boolean;
  onToggle: () => void;
  countdown: { days: number; hours: number; minutes: number } | null;
  comments: string[];
  commentInput: string;
  onCommentChange: (val: string) => void;
  onAddComment: () => void;
}

const FestivalCard: React.FC<FestivalCardProps> = ({
  index,
  festival,
  expanded,
  onToggle,
  countdown,
  comments,
  commentInput,
  onCommentChange,
  onAddComment,
}) => {
  return (
    <div
      onClick={onToggle}
      style={{
        cursor: 'pointer',
        borderRadius: 12,
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        padding: 20,
        marginBottom: 16,
        backgroundColor: expanded ? '#fff3e0' : '#fff',
        transition: 'background-color 0.3s ease',
        display: 'flex',
        gap: 20,
        alignItems: 'center',
      }}
    >
      {festival.imageUrl && (
        <img
          src={festival.imageUrl}
          alt={festival.name}
          style={{ width: 120, height: 80, borderRadius: 8, objectFit: 'cover' }}
          loading="lazy"
        />
      )}

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>{festival.name}</span>
          {festival.date && (
            <span style={{ fontSize: '0.9rem', color: '#555' }}>
              {new Date(festival.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        {countdown && (
          <div
            style={{
              marginTop: 8,
              fontSize: '1rem',
              color: '#ff6f00',
              fontWeight: '600',
            }}
          >
            Starts in {countdown.days}d {countdown.hours}h {countdown.minutes}m
          </div>
        )}

        {expanded && (
          <div style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.5 }}>
            <p>{festival.description}</p>
            <p><em>{festival.history}</em></p>
            {festival.moreInfoUrl && (
              <a
                href={festival.moreInfoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ff6f00', textDecoration: 'underline' }}
              >
                Learn more
              </a>
            )}

            {/* Local Comment Box */}
            <div style={{ marginTop: 20 }}>
              <h4>Share Your Experience</h4>
              <textarea
                rows={3}
                value={commentInput}
                onChange={e => onCommentChange(e.target.value)}
                style={{ width: '100%', padding: 8, fontSize: '1rem' }}
                placeholder="Write your comment here..."
                onClick={e => e.stopPropagation()} // prevent collapse on textarea click
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddComment();
                }}
                style={{ marginTop: 8, padding: '8px 16px', cursor: 'pointer' }}
              >
                Add Comment
              </button>
              <div style={{ marginTop: 12 }}>
                {comments.length === 0 ? (
                  <p>No comments yet.</p>
                ) : (
                  comments.map((c, i) => (
                    <p
                      key={i}
                      style={{
                        borderBottom: '1px solid #ccc',
                        paddingBottom: 6,
                        marginBottom: 6,
                      }}
                    >
                      {c}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Festivals;
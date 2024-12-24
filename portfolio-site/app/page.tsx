'use client';

import { useEffect, useState } from 'react';

// Define the type for Last.fm tracks
interface Track {
  name: string;
  artist: {
    '#text': string;
  };
  url: string;
  date?: {
    uts: string; // Unix timestamp of when the track was played
  };
  image: {
    '#text': string;
  }[];
}

export default function HomePage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(1); // Number of tracks to show initially

  // Fetch Last.fm recent tracks
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch('https://lastfm-worker.armaanm1010.workers.dev/');
        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }
        const data = await response.json();
        if (data.recenttracks && data.recenttracks.track) {
          setTracks(data.recenttracks.track); // Set all recent tracks
        } else {
          throw new Error('Unexpected API response structure.');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching Last.fm tracks:', err);
      }
    };

    fetchTracks();
  }, []);

  const getTimeAgo = (uts: string) => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix seconds
    const timeDifference = currentTime - parseInt(uts, 10);
    const minutes = Math.floor(timeDifference / 60);
    const hours = Math.floor(minutes / 60);

    if (minutes < 1) {
      return 'just now';
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => (prevCount === 1 ? 5 : prevCount + 5)); // Show 4 more on the first press, then 5 more subsequently
  };

  const handleHideAll = () => {
    setVisibleCount(1); // Reset to show only the first track
  };

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-6xl font-extrabold text-indianred mb-6">
          Armaan Mangat
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A showcase of my projects, skills, and experiences. Let’s create something extraordinary together.
        </p>
      </section>

      {/* Last.fm Widget */}
      <section className="text-center py-6 px-6 bg-gunmetal rounded-lg mx-6 mb-12 shadow-lg max-w-3xl mx-auto">
        {error ? (
          <p className="text-red-400">Failed to load tracks: {error}</p>
        ) : tracks.length > 0 ? (
          <div>
            {tracks.slice(0, visibleCount).map((track, index) => (
              <div key={index} className="flex items-center justify-center gap-4 mb-4">
                {track.image[2]?.['#text'] ? (
                  <img
                    src={track.image[2]['#text']}
                    alt={`${track.name} album cover`}
                    className="w-12 h-12 object-cover rounded"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-700 rounded" />
                )}
                <p className="text-lg text-gray-200">
                  I listened to{' '}
                  <a
                    href={track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indianred hover:underline transition"
                  >
                    {track.name}
                  </a>{' '}
                  by {track.artist['#text']}, {track.date ? getTimeAgo(track.date.uts) : 'just now'}.
                </p>
              </div>
            ))}
            <div className="mt-4 flex justify-center gap-4">
              {visibleCount < tracks.length && (
                <button
                  onClick={handleViewMore}
                  className="inline-block bg-indianred text-white px-6 py-2 rounded-lg shadow hover:bg-raisin transition"
                >
                  View More
                </button>
              )}
              {visibleCount > 1 && (
                <button
                  onClick={handleHideAll}
                  className="inline-block bg-raisin text-white px-6 py-2 rounded-lg shadow hover:bg-indianred transition"
                >
                  Hide
                </button>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-400">Loading recent tracks...</p>
        )}
      </section>

      {/* Navigation Section */}
      <section className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-16">
        <a href="/about" className="bg-gunmetal p-6 rounded-lg hover:bg-raisin shadow-lg transition">
          <h3 className="text-2xl font-semibold text-indianred">About Me</h3>
          <p className="text-gray-300 mt-2">Learn more about my background and education.</p>
        </a>
        <a href="/experience" className="bg-gunmetal p-6 rounded-lg hover:bg-raisin shadow-lg transition">
          <h3 className="text-2xl font-semibold text-indianred">Experience</h3>
          <p className="text-gray-300 mt-2">Explore my professional experiences and roles.</p>
        </a>
        <a href="/projects" className="bg-gunmetal p-6 rounded-lg hover:bg-raisin shadow-lg transition">
          <h3 className="text-2xl font-semibold text-indianred">Projects</h3>
          <p className="text-gray-300 mt-2">Take a deep dive into the projects I’ve worked on.</p>
        </a>
        <a href="/skills" className="bg-gunmetal p-6 rounded-lg hover:bg-raisin shadow-lg transition">
          <h3 className="text-2xl font-semibold text-indianred">Skills</h3>
          <p className="text-gray-300 mt-2">Discover the tools and technologies I excel in.</p>
        </a>
        <a href="/hobbies" className="bg-gunmetal p-6 rounded-lg hover:bg-raisin shadow-lg transition">
          <h3 className="text-2xl font-semibold text-indianred">Hobbies</h3>
          <p className="text-gray-300 mt-2">See what I enjoy doing in my free time.</p>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-10 bg-gunmetal">
        <p className="text-gray-400">Created by Armaan Mangat</p>
      </footer>
    </main>
  );
}

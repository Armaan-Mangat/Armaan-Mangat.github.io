'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define the type for a single track
interface Track {
  name: string;
  artist: {
    '#text': string;
  };
  url: string;
}

export default function HomePage() {
  const [tracks, setTracks] = useState<Track[]>([]);

  // Fetch Last.fm recent tracks data
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch('https://lastfm-worker.yourdomain.workers.dev/');
        const data = await response.json();
        setTracks(data.recenttracks.track.slice(0, 5)); // Limit to 5 tracks
      } catch (error) {
        console.error(
          'Error fetching Last.fm tracks:',
          error instanceof Error ? error.message : 'Unknown error occurred'
        );
      }
    };

    fetchTracks();
  }, []);

  return (
    <main className="bg-richblack text-gray-200 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-20 flex-grow">
        <h2 className="text-6xl font-extrabold text-indianred mb-6">
          Armaan Mangat
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A showcase of my projects, skills, and experiences. Let’s create something extraordinary together.
        </p>
      </section>

      {/* Last.fm Widget */}
      <section className="text-center py-10 bg-gunmetal rounded-lg mx-6 mb-8 shadow-lg">
        <h3 className="text-2xl font-semibold text-indianred mb-4">Recently Listened Tracks</h3>
        {tracks.length > 0 ? (
          <ul className="space-y-3">
            {tracks.map((track, index) => (
              <li key={index} className="text-gray-300">
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indianred transition"
                >
                  {track.name} - {track.artist['#text']}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Loading recent tracks...</p>
        )}
      </section>

      {/* Navigation Cards */}
      <section className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto flex-grow">
        <Link href="/about">
          <div className="bg-gunmetal shadow-md rounded-xl p-6 hover:bg-raisin transition">
            <h3 className="text-2xl font-semibold text-indianred">About Me</h3>
            <p className="text-gray-300 mt-2">Learn more about my background and education.</p>
          </div>
        </Link>
        <Link href="/experience">
          <div className="bg-gunmetal shadow-md rounded-xl p-6 hover:bg-raisin transition">
            <h3 className="text-2xl font-semibold text-indianred">Experience</h3>
            <p className="text-gray-300 mt-2">Explore my professional experiences and roles.</p>
          </div>
        </Link>
        <Link href="/projects">
          <div className="bg-gunmetal shadow-md rounded-xl p-6 hover:bg-raisin transition">
            <h3 className="text-2xl font-semibold text-indianred">Projects</h3>
            <p className="text-gray-300 mt-2">Take a deep dive into the projects I’ve worked on.</p>
          </div>
        </Link>
        <Link href="/skills">
          <div className="bg-gunmetal shadow-md rounded-xl p-6 hover:bg-raisin transition">
            <h3 className="text-2xl font-semibold text-indianred">Skills</h3>
            <p className="text-gray-300 mt-2">Discover the tools and technologies I excel in.</p>
          </div>
        </Link>
        <Link href="/hobbies">
          <div className="bg-gunmetal shadow-md rounded-xl p-6 hover:bg-raisin transition">
            <h3 className="text-2xl font-semibold text-indianred">Hobbies</h3>
            <p className="text-gray-300 mt-2">See what I enjoy doing in my free time.</p>
          </div>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 mt-10 bg-gunmetal">
        <p className="text-gray-400">Created by Armaan Mangat</p>
      </footer>
    </main>
  );
}

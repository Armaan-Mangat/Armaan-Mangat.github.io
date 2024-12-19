'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-6xl font-extrabold text-indigo-400 mb-6">
          Armaan Mangat
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my projects, skills, and experiences. Let’s create something extraordinary together.
        </p>
      </section>

      {/* Navigation Cards */}
      <section className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Link href="/about">
          <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold text-indigo-400">About Me</h3>
            <p className="text-gray-400 mt-2">Learn more about my background and education.</p>
          </div>
        </Link>
        <Link href="/experience">
          <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold text-indigo-400">Experience</h3>
            <p className="text-gray-400 mt-2">Explore my professional experiences and roles.</p>
          </div>
        </Link>
        <Link href="/projects">
          <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold text-indigo-400">Projects</h3>
            <p className="text-gray-400 mt-2">Take a deep dive into the projects I’ve worked on.</p>
          </div>
        </Link>
        <Link href="/skills">
          <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold text-indigo-400">Skills</h3>
            <p className="text-gray-400 mt-2">Discover the tools and technologies I excel in.</p>
          </div>
        </Link>
        <Link href="/hobbies">
          <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold text-indigo-400">Hobbies</h3>
            <p className="text-gray-400 mt-2">See what I enjoy doing in my free time.</p>
          </div>
        </Link>
      </section>

      <footer className="text-center py-8 mt-20 bg-gray-800">
  <p className="text-gray-500">Created by Armaan Mangat</p>
</footer>

    </main>
  );
}

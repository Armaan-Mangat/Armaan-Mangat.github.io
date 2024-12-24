'use client';

import Link from 'next/link';

export default function HomePage() {
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

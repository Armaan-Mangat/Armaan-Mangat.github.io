'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-richblack text-gray-200 min-h-screen">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-indianred mb-6">About Me</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I am a Bachelor of Science student in Computer Science with a minor in Mathematics at the University of Alberta. I am passionate about technology, problem-solving, and creating impactful solutions.
        </p>
      </section>

      <div className="text-center mt-10">
        <Link href="/">
          <button className="bg-raisin text-white px-6 py-3 rounded-lg shadow-lg hover:bg-onyx transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}

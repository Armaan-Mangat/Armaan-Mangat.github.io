'use client';

import Link from 'next/link';

export default function SkillsPage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-6">Skills</h1>
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-semibold text-gray-200 mt-6">Programming Languages</h2>
          <p className="text-gray-400">
            C/C++, Java, Python, Dart (Flutter), SQL, NoSQL, REST API, Node.js, Express
          </p>

          <h2 className="text-2xl font-semibold text-gray-200 mt-6">Developer Tools</h2>
          <p className="text-gray-400">Git, Docker, VS Code, Postman</p>
        </div>
      </section>

      <div className="text-center mt-10">
        <Link href="/">
          <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}

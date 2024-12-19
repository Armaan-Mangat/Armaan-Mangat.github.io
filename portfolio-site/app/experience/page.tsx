'use client';

import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-6">Experience</h1>
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-semibold text-gray-200 mt-6">IT Support/System Administrator</h2>
          <p className="text-gray-400">
            <em>A1 Accounting, Edmonton, AB | August 2019 – Present</em>
          </p>
          <ul className="list-disc ml-6 text-gray-400 mt-2">
            <li>Provided technical support for hardware, software, and network issues.</li>
            <li>Managed server and network infrastructure, ensuring 99.9% uptime.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-6">Fulfillment Associate</h2>
          <p className="text-gray-400">
            <em>Walmart, Edmonton, AB | February 2019 – August 2019</em>
          </p>
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

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HobbiesPage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-6">Hobbies</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Here are some of the activities I love doing in my free time.
        </p>
      </section>

      {/* Hobbies Grid */}
      <section className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Hobby 1 */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            alt="Weightlifting"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indigo-400">Weightlifting</h3>
            <p className="text-gray-400 mt-2">
              I enjoy lifting weights to stay fit, build strength, and challenge myself.
            </p>
          </div>
        </div>

        {/* Hobby 2 */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="https://plus.unsplash.com/premium_photo-1663134285656-ea60684fa3bd?q=80&w=1967&auto=format&fit=crop"
            alt="Swimming"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indigo-400">Swimming</h3>
            <p className="text-gray-400 mt-2">
              Swimming helps me relax and stay active. It&apos;s a great full-body workout.
            </p>
          </div>
        </div>

        {/* Hobby 3 */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2028&auto=format&fit=crop"
            alt="Running"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indigo-400">Running</h3>
            <p className="text-gray-400 mt-2">
              Running allows me to clear my mind and explore the outdoors.
            </p>
          </div>
        </div>

        {/* Hobby 4 */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?q=80&w=2070&auto=format&fit=crop"
            alt="Hiking"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indigo-400">Hiking</h3>
            <p className="text-gray-400 mt-2">
              Exploring nature trails and enjoying scenic views is my idea of a perfect day.
            </p>
          </div>
        </div>

        {/* Hobby 5 */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="https://plus.unsplash.com/premium_photo-1672281090607-a815894bcc69?w=500&auto=format&fit=crop&q=60"
            alt="Climbing"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indigo-400">Climbing</h3>
            <p className="text-gray-400 mt-2">
              I enjoy climbing to challenge my physical and mental strength.
            </p>
          </div>
        </div>

        {/* Hobby 6 */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="https://plus.unsplash.com/premium_photo-1675435646793-f6ceb239b064?q=80&w=2070&auto=format&fit=crop"
            alt="Coffee"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indigo-400">Coffee</h3>
            <p className="text-gray-400 mt-2">
              Experimenting with brewing techniques and enjoying great coffee is my passion.
            </p>
          </div>
        </div>
      </section>

      {/* Strava Button */}
      <div className="text-center mt-12">
        <a
          href="https://www.strava.com/athletes/133245897" // Replace with your Strava profile link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition"
        >
          Visit My Strava Profile
        </a>
      </div>

      <div className="text-center mt-12">
        <Link href="/">
          <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HobbiesPage() {
  return (
    <main className="bg-richblack text-gray-200 min-h-screen">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-indianred mb-6">Hobbies</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Here are some of the activities I love doing in my free time.
        </p>
      </section>

      {/* Hobbies Grid */}
      <section className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Hobby 1 */}
        <div className="bg-gunmetal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="/images/weightlifting.jpg"
            alt="Weightlifting"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indianred">Weightlifting</h3>
            <p className="text-gray-300 mt-2">
              I enjoy lifting weights to stay fit, build strength, and challenge myself.
            </p>
          </div>
        </div>

        {/* Hobby 2 */}
        <div className="bg-gunmetal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="/images/swimming.jpg"
            alt="Swimming"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indianred">Swimming</h3>
            <p className="text-gray-300 mt-2">
              Swimming helps me relax and stay active. It&apos;s a great full-body workout.
            </p>
          </div>
        </div>

        {/* Hobby 3 */}
        <div className="bg-gunmetal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="/images/running.jpg"
            alt="Running"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indianred">Running</h3>
            <p className="text-gray-300 mt-2">
              Running allows me to clear my mind and explore the outdoors.
            </p>
          </div>
        </div>

        {/* Hobby 4 */}
        <div className="bg-gunmetal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="/images/hiking.jpg"
            alt="Hiking"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indianred">Hiking</h3>
            <p className="text-gray-300 mt-2">
              Exploring nature trails and enjoying scenic views is my idea of a perfect day.
            </p>
          </div>
        </div>

        {/* Hobby 5 */}
        <div className="bg-gunmetal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="/images/climbing.jpg"
            alt="Climbing"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indianred">Climbing</h3>
            <p className="text-gray-300 mt-2">
              I enjoy climbing to challenge my physical and mental strength.
            </p>
          </div>
        </div>

        {/* Hobby 6 */}
        <div className="bg-gunmetal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Image
            src="/images/coffee.jpg"
            alt="Coffee"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-indianred">Coffee</h3>
            <p className="text-gray-300 mt-2">
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
          className="inline-block bg-indianred text-gray-100 px-8 py-4 rounded-lg shadow-lg hover:bg-raisin transition"
        >
          Visit My Strava Profile
        </a>
      </div>

      <div className="text-center mt-12">
        <Link href="/">
          <button className="bg-raisin text-white px-6 py-3 rounded-lg shadow-lg hover:bg-onyx transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}

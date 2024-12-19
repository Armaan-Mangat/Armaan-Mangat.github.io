'use client';

import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-6">Projects</h1>
        <div className="max-w-3xl mx-auto text-left">
          {/* Project 1: Communakit App */}
          <h2 className="text-2xl font-semibold text-gray-200 mt-6">Communakit App</h2>
          <p className="text-gray-400">
            <em>Flutter, Django REST framework, PostgreSQL | January 2023 – April 2023</em>
          </p>
          <p className="text-gray-400 mt-2">
            Designed and implemented an iOS/Android application for a startup company that aids in speech and language learning for children. This app acts as a companion to the company’s physical learning kits.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Integrated user authentication, session tracking, and secure data storage using Django REST framework.</li>
            <li>Built a cross-platform UI with Flutter, ensuring responsiveness and smooth animations.</li>
            <li>Developed a quiz module to evaluate learning outcomes and provide real-time feedback to users.</li>
            <li>Collaborated with a team of 5 developers using Agile methodologies, ensuring continuous delivery and testing.</li>
          </ul>
          <p className="text-gray-400 mt-2">
            <br />
            <a href="https://go.armaanm.ca/project" className="text-indigo-400 hover:underline">Project Link</a> |{' '}
            <a href="https://go.armaanm.ca/prof" className="text-indigo-400 hover:underline">Professor Link</a>
          </p>

          {/* Project 2: Rest API */}
          <h2 className="text-2xl font-semibold text-gray-200 mt-6">Rest API</h2>
          <p className="text-gray-400">
            <em>Node JS, Express, Docker, MongoDB | January 2023</em>
          </p>
          <p className="text-gray-400 mt-2">
            Set up a sample REST API to provide information about TV shows for a class assignment, demonstrating scalable backend development and deployment using modern tools.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Created endpoints for managing TV show data (CRUD operations) using Express and MongoDB.</li>
            <li>Deployed the application using Docker for containerization and the Caddy web server for secure hosting.</li>
            <li>Implemented API documentation for better usability with tools like Postman.</li>
            <li>Focused on scalability by structuring the API to handle increased data and traffic loads.</li>
          </ul>

          {/* Add more projects */}
          <h2 className="text-2xl font-semibold text-gray-200 mt-6">HappyHabits</h2>
          <p className="text-gray-400">
            <em>Java, Firebase | September 2021 – December 2021</em>
          </p>
          <p className="text-gray-400 mt-2">
            Designed and developed an Android application to help users track and maintain healthy habits. This project encouraged behavior change by visualizing progress and achievements.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Used Firebase for user authentication, real-time database management, and cloud storage.</li>
            <li>Built interactive charts to track user progress using third-party libraries.</li>
            <li>Applied Agile principles, working with a team of 4 to iterate and deliver features weekly.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-200 mt-6">Home Server</h2>
          <p className="text-gray-400">
            <em>Windows, Docker, Linux | May 2015 – Present</em>
          </p>
          <p className="text-gray-400 mt-2">
            Set up and maintained a home server for personal media backup, home automation, and secure file sharing with friends and family.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Automated backups, remote access, and identity management using Docker and reverse proxy.</li>
            <li>Implemented application and system hardening techniques to improve security.</li>
            <li>Expanded server functionality to host lightweight web services and media sharing platforms.</li>
          </ul>
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

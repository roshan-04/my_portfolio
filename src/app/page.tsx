import React from "react";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Portfolio website built with Next.js and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <nav className="w-full p-5 bg-gray-800 flex justify-between items-center shadow-lg fixed top-0 z-50">
        <span className="text-xl font-bold">Portfolio</span>
        <ul className="flex gap-4">
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-400">
              Education
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-gray-400">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center py-24">
        <Image
          src="/MyPhoto.jpg"
          alt="My Photo"
          className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700 shadow-lg"
        />
        <h1 className="text-4xl font-bold">Roshan Yadav</h1>
        <p className="text-lg text-gray-300 max-w-lg">
          I am a passionate software developer with expertise in Flutter,
          Next.js, and Firebase. Currently pursuing my Computer Engineering
          degree at Goa College of Engineering, I love building secure,
          scalable, and user-friendly applications. I have a strong foundation
          in Data Structures & Algorithms, and I'm always eager to learn and
          explore new technologies. My goal is to become a skilled software
          engineer and contribute to impactful projects.
        </p>
      </main>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl p-5">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          {/* 1st Project */}
          <h3 className="text-xl font-semibold">BookVault</h3>
          <p className="text-gray-300">
            Techstack: Flutter, Firebase <br></br>
            Developed BookVault, a library management app using Flutter,
            featuring secure email login and access to a vast book collection
            with details and PDFs. Added features for students to request book
            borrowings and for admins to manage collections, publish notices,
            and approve requests. Optimized the app for a smooth experience
            across both Android and iOS.
          </p>
          <a
            href="https://github.com/roshan-04/book_vault/tree/final_project"
            className="text-blue-400 hover:underline"
          >
            GitHub Link
          </a>
        </div>
        <br></br>
        {/* 1st Project */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Expense Tracker</h3>
          <p className="text-gray-300">
            Teckstack: Flutter<br></br>Built an expense tracker app using
            Flutter to help users easily track and categorize expenses. Designed
            a user-friendly interface with dark and light mode support for
            better usability. Ensured smooth performance across Android and iOS
            for wider accessibility.
          </p>
          <a
            href="https://github.com/roshan-04/EXPENSE_TRACKER"
            className="text-blue-400 hover:underline"
          >
            GitHub Link
          </a>
        </div>
        <br></br>
        {/* 1st Project */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Meals App</h3>
          <p className="text-gray-300">
            Techstack: Flutter<br></br>Created a Meals App in Flutter, allowing
            users to explore different meal categories. Added animations for an
            engaging experience and optimized state management with Riverpod for
            smooth navigation. Enabled users to save favorite meals and view
            detailed recipes.
          </p>
          <a
            href="https://github.com/roshan-04/meals_app"
            className="text-blue-400 hover:underline"
          >
            GitHub Link
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl p-5">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300">
          C/C++ <br></br>
          Java<br></br>
          Flutter <br></br>
          HTML, CSS <br></br>
          JavaScript <br></br>
          Next.js <br></br>
          SQL <br></br>
          GitHub <br></br>
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full max-w-4xl p-5">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {/* Engineering */}
        <p className="text-gray-300">
          Bachelor of Engineering in Computer Engineering, Goa College of
          Engineering, Ponda-Goa.
          <br></br>
          2022 - 2026
          <br></br>
          CGPA: 7.96/10
        </p>
        {/* <a href="/resume.pdf" className="text-blue-400 hover:underline">
          Download Results
        </a> */}
        <br></br>
        {/* 12th */}
        <p className="text-gray-300">
          12th Science, G.V.M's S.N.J.A. Higher Secondary School, Ponda-Goa.
          <br></br>
          2021 - 2022
          <br></br>
          Percentage: 84.67%
        </p>
        {/* <a href="/resume.pdf" className="text-blue-400 hover:underline">
          Download Results
        </a> */}
        <br></br>
        {/* 10th */}
        <p className="text-gray-300">
          10th, M.E.F's Fatima High School, Ponda-Goa.
          <br></br>
          2019 - 2020
          <br></br>
          Percentage: 88.2%
        </p>

        {/* <a href="/resume.pdf" className="text-blue-400 hover:underline">
          Download Results
        </a> */}
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="w-full max-w-4xl p-5">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>

        {/*1st certificate*/}
        <p className="text-gray-300">
          Data Structures & Algorithms using Java - NPTEL
        </p>
        <a
          href="https://drive.google.com/file/d/1i9kAPoMPxazw6n3kNAiOLLXdz_SX6nSJ/view?usp=drive_link"
          className="text-blue-400 hover:underline"
        >
          Download Certification
        </a>

        {/*2nd certificate*/}
        <p className="text-gray-300">Programming in Modern C++ - NPTEL</p>
        <a
          href="https://drive.google.com/file/d/140mK_tIi9LM2kn4LgKfUP_KwUeaJ4jt9/view?usp=drive_link"
          className="text-blue-400 hover:underline"
        >
          Download Certification
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl p-5">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300">
          Email:{" "}
          <a
            href="mailto:roshanyadav111004@gmail.com"
            className="text-blue-400 hover:underline"
          >
            roshanyadav111004@gmail.com
          </a>
        </p>

        <p className="text-gray-300">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/roshan04/"
            className="text-blue-400 hover:underline"
          >
            roshan04
          </a>
        </p>

        <p className="text-gray-300">
          GitHub:{" "}
          <a
            href="https://github.com/roshan-04"
            className="text-blue-400 hover:underline"
          >
            roshan-04
          </a>
        </p>
        {/* <p className="text-gray-300">
          Phone:{" "}
          <a href="tel:+9178753071" className="text-blue-400 hover:underline">
            +9178757171
          </a>
        </p> */}
      </section>

      <footer className="w-full p-4 bg-gray-800 text-center mt-5 border-t border-gray-700">
        © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;

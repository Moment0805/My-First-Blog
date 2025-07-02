// eslint-disable-next-line react/no-unescaped-entities
"use client";
import React, { useEffect } from 'react';
import Header from '../component/Header';

const About = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.scroll-fade');
    const slideInElements = document.querySelectorAll('.scroll-slide');

    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    fadeInElements.forEach((el) => observer.observe(el));
    slideInElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <Header />
      <section className="scroll-fade opacity-0 transition-opacity duration-1000 min-h-screen flex flex-col items-center mt-6 p-4 backdrop-blur-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>

        <p className="text-md text-center mb-8 max-w-4xl text-gray-300 leading-relaxed">
          Hey there! I’m <strong>Emmanuel Adeogo</strong>, a Frontend Developer and UI-focused Engineer with a strong passion for building seamless, beautiful, and functional web experiences.
          <br /><br />
          With a background in React, TypeScript, Tailwind CSS, and design systems, I love turning product ideas into responsive, accessible, and performant UIs. I enjoy solving problems through clean, reusable components — whether it’s building dashboards, chat apps, landing pages, or full-scale systems.
          <br /><br />
          I value collaboration, open-source learning, and scaling great user experience. When I’m not coding, I’m usually designing, documenting systems, mentoring others, or improving my workflow through tools like Figma, Storybook, and Notion.
          <br /><br />
          I believe in craftsmanship, clarity, and making tech approachable for everyone. I'm always learning, iterating, and excited about what's next.
        </p>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2 text-white">Skills & Expertise</h2>
          <ul className="list-disc list-inside mb-4 text-emerald-400">
            <li>Modern Web Development (React, Next.js, TypeScript)</li>
            <li>UI Design Systems & Component Libraries</li>
            <li>Responsive & Accessible Interfaces</li>
            <li>CSS Frameworks (Tailwind, Chakra UI)</li>
            <li>Tooling: Figma, Storybook, Git, Firebase</li>
          </ul>
        </div>

        <button className="border-2 p-2 my-4 rounded-lg text-white hover:bg-gray-900 transition">
          <a href="/contact">Get in Touch</a>
        </button>
      </section>
    </div>
  );
};

export default About;

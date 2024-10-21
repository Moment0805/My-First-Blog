"use client";
import React from 'react';
import Header from '../component/Header';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.scroll-fade');
    const slideInElements = document.querySelectorAll('.scroll-slide');

    const options = {
      threshold: 0.1, 
    };

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
    <Header/>
    <section className="scroll-fade opacity-0 transition-opacity duration-1000 min-h-screen flex flex-col items-center mt-6 p-2 backdrop-blur-md w-full">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-md text-center mb-8 justify-center w-full px-10">
      Hello! I’m Abdul Momoh, a passionate Web Developer with over 3 years of experience in creating and designing dynamic websites and building robust software applications. My journey into the world of web development began with a fascination for technology and a desire to create meaningful online experiences.

I specialize in full-stack development, where I turn ideas into interactive and user-friendly interfaces. I thrive on transforming complex problems into simple, beautiful solutions, ensuring that every project I work on is not only functional but also visually appealing. My proficiency in languages such as JavaScript,TypeScript,Phyton along with frameworks like React and Next.js, empowers me to craft seamless digital experiences.

Beyond coding, I believe in the power of collaboration and continuous learning. I enjoy working in dynamic teams where I can share my knowledge and learn from others. Whether it’s brainstorming new features or troubleshooting issues, I approach every challenge with enthusiasm and a solution-oriented mindset.

When I’m not coding, you can find me exploring new technologies, diving into a good book, or experimenting with creative design. I’m also an advocate for clean code and best practices, always striving to improve my skills and stay updated with the latest trends in web development.

I’m excited about the future of web development and the opportunities it presents to connect with users across the globe. Let’s create something amazing together!

</p>
      <div className="flex flex-col items-center ">
        <h2 className="text-2xl font-semibold mb-2">Skills & Expertise</h2>
        <ul className="list-disc list-inside mb-4 text-emerald-600">
          <li>Website Development</li>
          <li>Software Applications</li>
          <li>User Interface Design</li>
          <li>Responsive Web Design</li>
          <li>TypeScript, Next.js and more!</li>
        </ul>
      </div>
      <button className='border-2 p-2 my-4 rounded-lg text-white hover:bg-gray-900 '><a>Get Started</a></button>
    </section>
    </div>
  );
};

export default About;

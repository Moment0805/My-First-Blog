"use client";
import Header from "./Header";
import { useEffect } from "react";
import LazyLoadImages from "./Images";

const Content = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".scroll-fade");
    const slideInElements = document.querySelectorAll(".scroll-slide");

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    fadeInElements.forEach((el) => observer.observe(el));
    slideInElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <section className="w-full m-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
        <Header />
        <main className="scroll-fade space-y-1 mt-10 py-8 px-10 rounded-xl backdrop-blur-md w-full opacity-0 transition-opacity duration-1000">
          <h1 className="text-3xl font-bold">Hello!</h1>
          <p className="text-xl font-bold">I Am Abdul Momoh.</p>
          <div className="mt-4">
            <p className="text-sm text-left">
              I'm a Web Developer with extensive experience for over 3 years. My expertise is to create, design websites, build software applications, and more...
            </p>
            <button className="border-2 p-2 mt-4 rounded-3xl hover:bg-white/20 transition-colors duration-300">
              See Portfolio
            </button>
          </div>
        </main>

       
        <div className="scroll-slide bg-gray-800 py-12 rounded-xl shadow-lg w-full text-white p-8 text-center opacity-0 transition-all duration-1000 mt-8">
          <h2 className="text-2xl font-bold">Stay Updated!</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest posts and updates.</p>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105">
            Subscribe Now
          </button>
        </div>

        
        <section className="scroll-fade bg-gradient-to-r from-gray-800 to-indigo-900 p-8 rounded-xl shadow-lg w-full text-center opacity-0 transition-opacity duration-1000 mt-2">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <div className="max-w-[50%] mx-auto space-y-4">
            <div>
              <label className="text-sm font-semibold">HTML & CSS</label>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">JavaScript</label>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">React</label>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="bg-teal-400 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold">Next.js</label>
              <div className="bg-gray-300 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </section>
        <LazyLoadImages className="scroll-fade mb-0"/>
        <div className="scroll-fade bg-gray-900 py-8 px-6 rounded-xl shadow-lg w-full opacity-0 transition-all duration-1000 ">
          <h2 className="text-3xl font-bold mb-6 text-center">What Readers Say</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="p-6 rounded-lg shadow-lg bg-gray-800">
              <p className="italic text-gray-300">"This blog has changed how I approach web development. Highly recommend!"</p>
              <p className="mt-2 font-bold text-white">- Jane Doe</p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-gray-800">
              <p className="italic text-gray-300">"Insightful posts and well-written tutorials. I love it!"</p>
              <p className="mt-2 font-bold text-white">- John Smith</p>
            </div>
          </div>
        </div>
        <section className="scroll-slide bg-gray-800 py-8 px-6 rounded-xl shadow-lg w-full text-center opacity-0 transition-opacity duration-1000 mt-2">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-2">I'm a passionate blogger writing about tech, development, and personal growth. Stay tuned for my latest insights!</p>
          <button className="mt-3 p-2 border-2 border-gray-200 rounded-md hover:bg-gray-700 transition-all duration-300">
            <a href="/about">Read more</a>
          </button>
        </section>
      </section>
    </div>
  );
};

export default Content;

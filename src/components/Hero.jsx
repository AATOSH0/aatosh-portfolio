// conents/Hero.jsx

import { hero } from "../data/images.js";
import resume from "../data/resume.pdf";

const Hero = () => {
  const heroImageUrl = Object.values(hero)[0]?.default;
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(${hero})`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Full Stack <span className="text-netflix-red">MERN</span> Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Hi, I’m <span className="text-netflix-red">Aatosh</span> Kumar, a
          Full-Stack Web Developer specializing in building modern, responsive
          websites with MongoDB, Express.js, React, and Node.js
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-netflix-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 flex items-center justify-center cursor-pointer"
          >
            View My Work
          </button>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="border-2 border-netflix-white hover:bg-netflix-white text-netflix-white hover:text-netflix-black font-bold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 flex items-center justify-center cursor-pointer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

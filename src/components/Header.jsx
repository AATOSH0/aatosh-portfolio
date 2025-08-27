// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Header background change on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Section detection for active nav item
      const sections = ['home', 'skills', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 lg:px-40 ${
        isScrolled
          ? 'bg-netflix-black py-3 shadow-xl'
          : 'bg-gradient-to-b from-netflix-black to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-netflix-red font-bold text-3xl md:text-4xl">
            AATOSH 
          </span>
          <span className="text-netflix-white font-bold text-3xl md:text-4xl ml-1">
            kumar
          </span>
        </div>

        {/* Desktop Navigation */}
<nav className="hidden md:flex space-x-8">
  {['home', 'skills', 'projects', 'about', 'contact'].map((item) => (
    <button
      key={item}
      onClick={() => scrollToSection(item)}
      className={`group relative py-2 px-1 font-medium text-lg transition-all duration-300 cursor-pointer ${
        activeSection === item
          ? 'text-netflix-red font-bold'
          : 'text-netflix-white hover:text-netflix-red'
      }`}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}

      {/* underline effect */}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-netflix-red transform transition-transform duration-300 origin-left 
        ${activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
      ></span>
    </button>
  ))}
</nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-netflix-white text-2xl p-2 rounded-lg hover:bg-netflix-card transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-netflix-black bg-opacity-95 absolute top-full left-0 right-0 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {['home', 'skills', 'projects', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-left py-3 px-4 rounded-lg transition-all duration-300 font-medium text-lg ${
                activeSection === item
                  ? 'bg-netflix-red text-netflix-white'
                  : 'text-netflix-white hover:bg-netflix-card'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;  
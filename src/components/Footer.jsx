// components/Footer.jsx
import { aboutData } from "../data/aboutData";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-netflix-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">

          {/* Social Icons */}
          <div className="flex space-x-6 mb-6">
            {aboutData.contacts.map(({ href, icon: Icon, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-netflix-white hover:text-netflix-red transition-colors duration-300"
              >
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {["home", "skills", "projects", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-netflix-white hover:text-netflix-red transition-colors duration-300 capitalize cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-netflix-gray text-center">
            © {new Date().getFullYear()} {aboutData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { aatosh } from "../data/images.js";
import { aboutData } from "../data/aboutData";

const About = () => {
  return (
    <section id="about" className="py-20 bg-netflix-dark lg:px-30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
          About Me
          <span className="absolute top-[calc(100%+0.5rem)] left-0 w-16 h-1 bg-netflix-red mt-2"></span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="rounded-lg overflow-hidden">
              <img src={aatosh} alt="Developer" className="w-full h-auto" />
            </div>
          </div>

          {/* About Text */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">
              Hello! I'm{" "}
              <span className="text-netflix-red">{aboutData.name}</span>,{" "}
              {aboutData.role}.
            </h3>

            <p className="text-netflix-gray mb-4">{aboutData.intro}</p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              {aboutData.contacts.map(
                ({ label, href, icon: Icon, bgColor, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${bgColor} ${hoverColor} text-white font-bold py-2 px-5 rounded transition-all duration-300`}
                  >
                    <Icon /> {label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

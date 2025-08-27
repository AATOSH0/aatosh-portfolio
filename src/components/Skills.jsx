// components/Skills.jsx
import React from "react";
import { FaReact, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact className="text-4xl mb-4" />,
      title: "Frontend Development",
      description:
        "React, Redux, HTML5, CSS3, JavaScript ES6+, Tailwind CSS, Bootstrap",
      technologies: ["React", "Redux", "HTML5", "CSS3", "JavaScript"],
    },
    {
      icon: <FaServer className="text-4xl mb-4" />,
      title: "Backend Development",
      description:
        "Node.js, Express.js, RESTful APIs, Authentication, Authorization",
      technologies: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: <FaDatabase className="text-4xl mb-4" />,
      title: "Database Management",
      description:
        "MongoDB, Mongoose, Database Design & Optimization",
      technologies: ["MongoDB", "Mongoose"],
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4" />,
      title: "Responsive Design",
      description:
        "Creating websites that work perfectly on all devices and screen sizes",
      technologies: ["Responsive Design", "Mobile First", "Cross-browser"],
    },
  ];

  const technologyIcons = {
    React: <FaReact className="text-2xl text-[#61DAFB]" />,
    "Node.js": <SiNodedotjs className="text-2xl text-[#339933]" />,
    "Express.js": <SiExpress className="text-2xl text-netflix-white" />,
    MongoDB: <SiMongodb className="text-2xl text-[#47A248]" />,
  };

  return (
    <section id="skills" className="py-20 bg-netflix-dark lg:px-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
          My Skills
          <span className="absolute top-[calc(100%+0.5rem)] left-0 w-16 h-1 bg-netflix-red mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-netflix-card p-6 rounded-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-netflix-red flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {skill.title}
              </h3>
              <p className="text-netflix-gray mb-4 text-center">
                {skill.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-netflix-red text-xs text-netflix-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Core MERN Technologies</h3>
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-[#61DAFB]" />
              <span className="mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-5xl text-netflix-white" />
              <span className="mt-2">Express</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs className="text-5xl text-[#339933]" />
              <span className="mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-5xl text-[#47A248]" />
              <span className="mt-2">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

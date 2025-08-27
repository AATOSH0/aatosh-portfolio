import { projects } from "../data/projectData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {


  return (
    <section id="projects" className="py-20 bg-netflix-black lg:px-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
          My Projects
          <span className="absolute top-[calc(100%+0.5rem)] left-0 w-16 h-1 bg-netflix-red mt-2"></span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-netflix-card rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-netflix-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-netflix-red text-xs text-netflix-white px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-netflix-white hover:text-netflix-red transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-netflix-white hover:text-netflix-red transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

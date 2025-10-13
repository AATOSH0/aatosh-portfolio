import pj1 from "./projects-images/cocco.png";
import pj2 from "./projects-images/deepak.png";
import pj3 from "./projects-images/food-app.png";

export const projects = [
  {
    title: "Cocco N Curry",
    description: "A fullstack app for cocco n curry",
    image: pj1, // Use the imported image here
    technologies: ["React", "Tailwind CSS", "MongoDb", "Cloudinary", "Instagram API"],
    liveUrl: "https://www.cocconcurry.com/",
    githubUrl: "https://www.cocconcurry.com/",
  },
  {
    title: "Editer Portfolio",
    description: "Fully responsive portfolio for my client using react.",
    image: pj2, // Use the imported image here
    technologies: ["React", "Tailwind CSS", "Context API", "Node", "MongoDB", "Cloudinary"],
    liveUrl: "https://deepaksahu.netlify.app/",
    githubUrl: "https://github.com/AATOSH0/deepak-portfolio",
  },
  {
    title: "Food App",
    description: "Fully responsive food app using react.",
    image: pj3, // Use the imported image here
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://food-app-by-aatosh.netlify.app/",
    githubUrl: "https://github.com/AATOSH0/Food-App",
  },
];

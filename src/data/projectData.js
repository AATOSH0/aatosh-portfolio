import pj1 from "./projects-images/food-app.png";
import pj2 from "./projects-images/ssbam-alumni-portal.png";
import pj3 from "./projects-images/book-store.png";

export const projects = [
  {
    title: "Food App",
    description: "Fully responsive food app using react.",
    image: pj1, // Use the imported image here
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://food-app-by-aatosh.netlify.app/",
    githubUrl: "https://github.com/AATOSH0/Food-App",
  },
  {
    title: "College Alumni Portal",
    description: "Fully responsive college alumni portal using react.",
    image: pj2, // Use the imported image here
    technologies: ["React", "Tailwind CSS", "Context API"],
    liveUrl: "https://ssbam-alumni-portal-by-aatosh.netlify.app/",
    githubUrl: "https://github.com/AATOSH0/ssbam-alumni-portal",
  },
  {
    title: "Book Store",
    description: "A fullstack book store application built with MERN stack",
    image: pj3, // Use the imported image here
    technologies: ["React", "Mongodb", "Node.js", "Express.js"],
    liveUrl: "https://book-store-by-aatosh.netlify.app/",
    githubUrl: "https://github.com/AATOSH0/Book-Store",
  },
];

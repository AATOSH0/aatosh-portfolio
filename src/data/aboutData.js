import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export const aboutData = {
  name: "Aatosh Kumar",
  role: "MERN Stack Developer",
  intro:
    "👋 Hi, I’m Aatosh — a Full-Stack Web Developer passionate about building scalable and user-friendly web applications.\n\nI work with the MERN stack (MongoDB, Express.js, React.js, Node.js) along with HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. From creating clean, responsive frontends to developing secure backends and RESTful APIs, I enjoy the full process of turning ideas into working products.\n\nCurrently, I’m in the final year of my BCA (graduating in 2026) and actively working on real-world projects to sharpen my skills.",
  contacts: [
    {
      label: "Email",
      href: "mailto:aatoshkumar3333@gmail.com",
      icon: FaEnvelope,
      bgColor: "bg-netflix-red",
      hoverColor: "hover:bg-red-700",
    },

    {
      label: "GitHub",
      href: "https://github.com/AATOSH0",
      icon: FaGithub,
      bgColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-700",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aatosh-kumar",
      icon: FaLinkedin,
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },

    {
      label: "Mobile",
      href: "tel:+919301265561",
      icon: FaPhone,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919301265561",
      icon: FaWhatsapp,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aatosh0/",
      icon: FaInstagram,
      bgColor: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
    },
  ],
};

import React from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "CodeSoft",
    duration: "Dec 2024 - Jan 2025",
    period: "1 Month",
    points: [
      "This internship has been an incredible learning experience.",
      "Gained valuable hands-on experience in real-world projects.",
      "Collaborated closely with the design team on responsive UI improvements.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-black text-gray-200 py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
         Experience
          <span className="absolute top-[calc(100%+0.5rem)] left-0 w-16 h-1 bg-netflix-red mt-2"></span>
        </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-lg shadow-red-900/20 hover:shadow-red-600/30 transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">
                {exp.role} <span className="text-red-500">||</span>{" "}
                {exp.company}
              </h3>
              <p className="text-sm text-gray-400 mt-2 md:mt-0">
                {exp.period} <span className="mx-2">|</span> {exp.duration}
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="hover:text-red-400 transition">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

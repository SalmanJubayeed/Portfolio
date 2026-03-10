import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
  FaJava,
  FaAndroid,
  FaFileAlt
} from "react-icons/fa";

import { SiKotlin, SiFirebase } from "react-icons/si";

const techIcons = {
  HTML: { icon: FaHtml5, color: "text-orange-500" },
  CSS: { icon: FaCss3Alt, color: "text-blue-500" },
  JS: { icon: FaJs, color: "text-yellow-400" },
  JavaScript: { icon: FaJs, color: "text-yellow-400" },
  React: { icon: FaReact, color: "text-cyan-400" },
  PHP: { icon: FaPhp, color: "text-indigo-400" },
  MySQL: { icon: FaDatabase, color: "text-blue-400" },
  Java: { icon: FaJava, color: "text-red-400" },
  Android: { icon: FaAndroid, color: "text-green-500" },

  Kotlin: { icon: SiKotlin, color: "text-purple-400" },
  Firebase: { icon: SiFirebase, color: "text-yellow-400" },

  "File Management": { icon: FaFileAlt, color: "text-slate-300" }
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className="
      flex flex-col h-full
      rounded-xl p-6

      bg-white/5
      backdrop-blur-xl
      border border-white/10

      shadow-lg
      hover:border-sky-400/40
      hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]

      transition-all duration-300
      "
    >

      {/* Image */}
      <div className="h-40 flex items-center justify-center mb-5">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-full object-contain opacity-90"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-center text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-sm mt-3 text-center flex-grow leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
{project.tech.map((tech) => {
  const TechIcon = techIcons[tech]?.icon;
  const color = techIcons[tech]?.color || "text-sky-300";

  return (
    <div
      key={tech}
      className="
      flex items-center gap-2
      px-3 py-1
      rounded-full

      bg-white/5
      border border-white/10
      backdrop-blur-md
      text-xs text-slate-200
      "
    >
      {TechIcon && <TechIcon className={`${color} text-sm`} />}
      {tech}
    </div>
  );
})}
      </div>

      {/* Links */}
      <div className="flex justify-center gap-4 mt-6">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex items-center gap-2
            px-4 py-2
            rounded-lg

            bg-white/5
            backdrop-blur-md
            border border-white/10

            text-sm text-slate-200

            hover:border-sky-400/40
            hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]

            transition
            "
          >
            <FaGithub />
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            flex items-center gap-2
            px-4 py-2
            rounded-lg

            bg-white/5
            backdrop-blur-md
            border border-white/10

            text-sm text-slate-200

            hover:border-emerald-400/40
            hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]

            transition
            "
          >
            <FaExternalLinkAlt />
            Live
          </a>
        )}

      </div>

    </motion.div>
  );
}
import Reveal from "./Reveal";
import { certifications } from "../data/certifications";
import {
  FaAward,
  FaExternalLinkAlt,
  FaCuttlefish,
  FaPython,
  FaDatabase,
  FaShieldAlt,
  FaLock,
  FaKey,
  FaProjectDiagram,
  FaReact,
  FaJs,
  FaServer,
  FaNetworkWired,
  FaUserShield,
  FaUserSecret,
  FaFileCode,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import { SiFlask, SiDjango } from "react-icons/si";

// Icons and colors for certification skill badges matching ProjectCard techIcons
const certSkillIcons = {
  C: { icon: FaCuttlefish, color: "text-blue-400" },
  Python: { icon: FaPython, color: "text-yellow-400" },
  SQL: { icon: FaDatabase, color: "text-orange-400" },
  HTML: { icon: FaHtml5, color: "text-orange-500" },
  CSS: { icon: FaCss3Alt, color: "text-blue-500" },
  JavaScript: { icon: FaJs, color: "text-yellow-400" },
  Algorithms: { icon: FaProjectDiagram, color: "text-purple-400" },
  "Data Structures": { icon: FaProjectDiagram, color: "text-indigo-400" },

  // Security & Web Programming topics from CS50x & CS50 Cybersecurity
  Security: { icon: FaShieldAlt, color: "text-emerald-400" },
  Cybersecurity: { icon: FaShieldAlt, color: "text-emerald-400" },
  "Web Programming": { icon: FaLaptopCode, color: "text-cyan-400" },
  "Securing Accounts": { icon: FaUserShield, color: "text-sky-400" },
  "Securing Data": { icon: FaLock, color: "text-amber-400" },
  "Securing Systems": { icon: FaServer, color: "text-purple-400" },
  "Securing Software": { icon: FaFileCode, color: "text-indigo-400" },
  "Privacy Preservation": { icon: FaUserSecret, color: "text-pink-400" },

  Flask: { icon: SiFlask, color: "text-slate-300" },
  Django: { icon: SiDjango, color: "text-emerald-500" },
  React: { icon: FaReact, color: "text-cyan-400" },
  APIs: { icon: FaServer, color: "text-sky-400" },
  Scalability: { icon: FaProjectDiagram, color: "text-cyan-400" },
  Authentication: { icon: FaKey, color: "text-amber-400" },
  Cryptography: { icon: FaLock, color: "text-pink-400" },
  "Network Defense": { icon: FaNetworkWired, color: "text-emerald-400" },
  "Threat Analysis": { icon: FaShieldAlt, color: "text-red-400" }
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-28 py-24 px-6">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div
            className="
            h-[2px] w-24 mx-auto mt-3
            bg-gradient-to-r
            from-transparent
            via-sky-400
            to-transparent
            animate-pulse
            "
          />
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.1}>
            <div
              className="
              flex flex-col h-full
              rounded-2xl p-6 md:p-8
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              shadow-lg
              hover:border-sky-400/40
              hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]
              transition-all duration-300
              "
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className="
                    w-12 h-12 rounded-xl
                    flex items-center justify-center
                    bg-amber-500/10 border border-amber-400/30
                    text-amber-400 text-xl
                    shadow-[0_0_15px_rgba(245,158,11,0.2)]
                    shrink-0
                    "
                  >
                    <FaAward />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sky-400 text-sm font-semibold mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {cert.badge && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-300 border border-sky-400/30">
                    {cert.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-grow">
                {cert.description}
              </p>

              {/* Skills Tags styled exactly as on ProjectCard */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {cert.skills.map((skill) => {
                    const skillData = certSkillIcons[skill];
                    const SkillIcon = skillData?.icon;
                    const color = skillData?.color || "text-sky-300";

                    return (
                      <div
                        key={skill}
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
                        {SkillIcon && <SkillIcon className={`${color} text-sm`} />}
                        {skill}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Link / Verification styled exactly like ProjectCard's GitHub button */}
              {cert.link && (
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href={cert.link}
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
                    <FaExternalLinkAlt />
                    View Credential
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

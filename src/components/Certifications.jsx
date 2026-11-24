import Reveal from "./Reveal";
import { certifications } from "../data/certifications";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

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
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sky-400 text-sm font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {cert.badge && (
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium bg-sky-500/10 text-sky-300 border border-sky-400/30">
                    {cert.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-grow">
                {cert.description}
              </p>

              {/* Skills Tags */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                      px-2.5 py-0.5
                      rounded-full
                      bg-white/5
                      border border-white/10
                      backdrop-blur-md
                      text-xs text-slate-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Link / Verification */}
              {cert.link && (
                <div className="pt-2">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    rounded-lg
                    bg-white/5
                    border border-white/10
                    text-xs text-slate-200
                    hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-white
                    hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]
                    transition-all duration-300
                    "
                  >
                    <span>View Credential</span>
                    <FaExternalLinkAlt className="text-[10px]" />
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

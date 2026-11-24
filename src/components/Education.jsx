import Reveal from "./Reveal";
import { education } from "../data/education";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-28 py-24 px-6">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Education</h2>
          <div
            className="
            h-[2px] w-20 mx-auto mt-3
            bg-gradient-to-r
            from-transparent
            via-sky-400
            to-transparent
            animate-pulse
            "
          />
        </div>
      </Reveal>

      {/* Widened card container for better horizontal layout */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 0.1}>
            <div
              className="
              relative
              rounded-2xl p-7 md:p-9
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              shadow-lg
              hover:border-sky-400/40
              hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]
              transition-all duration-300
              "
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  <div
                    className="
                    w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    bg-sky-500/10 border border-sky-400/30
                    text-sky-400 text-2xl
                    shadow-[0_0_20px_rgba(56,189,248,0.25)]
                    shrink-0
                    "
                  >
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sky-400 text-base font-medium mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-slate-200">
                  <FaCalendarAlt className="text-sky-400 text-xs" />
                  <span>{item.period}</span>
                  {item.status && (
                    <span className="ml-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Enhanced & More Visible Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3 block">
                    Key Highlights &amp; Coursework
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="
                        inline-flex items-center gap-2
                        px-3.5 py-1.5
                        rounded-xl
                        bg-white/10
                        border border-white/15
                        text-sm font-medium text-slate-100
                        shadow-sm
                        hover:border-sky-400/50 hover:bg-sky-500/15 hover:text-sky-200
                        transition-all duration-200
                        "
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

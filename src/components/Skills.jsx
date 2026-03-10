import { skills } from "../data/skills";
import Reveal from "./Reveal";


export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-28 py-24 px-6">

      
  <Reveal>
<div className="text-center mb-12">

  <h2 className="text-3xl font-bold">
    Skills
  </h2>

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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <Reveal key={skill.name} delay={index * 0.05}>

              <div className="flex flex-col items-center">

                {/* Glass Icon */}
                <div
                  className="
                  w-16 h-16 flex items-center justify-center
                  rounded-full
                  bg-white/5
                  backdrop-blur-md
                  border border-white/10
                  shadow-lg
                  hover:scale-110
                  transition
                  "
                >
                  <Icon size={28} className={skill.color} />
                </div>

                <p className="mt-3 text-sm text-slate-300 text-center">
                  {skill.name}
                </p>

              </div>

            </Reveal>
          );
        })}

      </div>

    </section>
  );
}
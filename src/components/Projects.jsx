import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";


export default function Projects() {
  return (
<section id="projects" className="relative scroll-mt-28 py-24 px-6">

  <Reveal>
<div className="text-center mb-12">

  <h2 className="text-3xl font-bold">
    Projects
  </h2>

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
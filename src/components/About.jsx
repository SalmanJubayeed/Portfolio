import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
<section
  id="about"
  className="relative overflow-hidden scroll-mt-28 py-24 px-6 text-center"
>  


<Reveal>
<div className="text-center mb-12">

  <h2 className="text-3xl font-bold">
    About Me
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

  <p className="max-w-2xl mx-auto text-slate-300">
    {profile.bio}
  </p>

</section>
  );
}
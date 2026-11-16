import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, Heart } from "lucide-react";
import PageIntro from "../components/PageIntro";

const values = [
  [Lightbulb, "Curiosity", "I enjoy learning new tools and finding practical ways to apply them."],
  [Target, "Purpose", "Good digital work should solve a real problem, not just look impressive."],
  [Rocket, "Progress", "I believe in improving through consistent practice and completed projects."],
  [Heart, "Ownership", "Build it Till Done — stay committed to taking an idea through to delivery."],
];

export default function About() {
  return (
    <>
      <PageIntro eyebrow="A little about me" title={<>Curious by nature.<br /><span className="gradient-text">Driven to create.</span></>} description="I'm Saket Kumar, a developing digital professional focused on web development, video editing and content writing." />
      <section className="section-wrap pt-0">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="about-visual flex min-h-[340px] items-center justify-center rounded-3xl border border-white/10">
            <div className="text-center">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-electric/40 bg-electric/10 font-display text-5xl font-bold text-electric">SK</div>
              <p className="mt-5 font-display text-2xl font-bold text-white">Saket Kumar</p>
              <p className="mt-1 text-sm text-slate-400">Build it Till Done.</p>
            </div>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p className="text-xl leading-9 text-slate-200">I’m building a skill set that connects technology with creativity.</p>
            <p>My current focus is web development, where I work with HTML, CSS and JavaScript and am growing my React.js skills. I also edit videos with DaVinci Resolve and develop my content-writing skills.</p>
            <p>I take a hands-on approach to my work: I personally plan, create, edit, test and review each deliverable. I use my own skills and professional software tools, take responsibility for the details, and keep improving through practice and feedback.</p>
            <p className="font-display text-xl font-semibold text-white">“{`Build it Till Done.`}”</p>
          </div>
        </div>
      </section>
      <section className="section-wrap pt-0">
        <div className="mb-10"><p className="eyebrow">What guides my work</p><h2 className="section-title mt-3">The principles behind the process.</h2></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(([Icon, title, desc], i) => (
            <motion.div whileHover={{ y: -5 }} className="feature-card" key={title}>
              <div className="icon-box"><Icon size={23} /></div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 leading-7 text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

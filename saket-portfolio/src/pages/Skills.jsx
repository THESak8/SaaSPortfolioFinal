import { motion } from "framer-motion";
import { Code2, Clapperboard, Bot, PenTool, Sparkles } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { skillGroups } from "../data";

const icons = [Code2, Clapperboard, Bot, PenTool];

export default function Skills() {
  return (
    <>
      <PageIntro eyebrow="Skills & technologies" title={<>A toolkit that's always<br /><span className="gradient-text">getting sharper.</span></>} description="A snapshot of the skills I practise across web development, creative media and content writing." />
      <section className="section-wrap pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i] || Sparkles;
            const exploring = group.status === "Currently exploring";
            return (
              <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="skill-card" key={group.title}>
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-box"><Icon size={24} /></div>
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${exploring ? "border-violet-400/30 bg-violet-400/10 text-violet-200" : "border-electric/20 bg-electric/5 text-electric"}`}>{group.status}</span>
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold text-white">{group.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.025] p-5 text-sm leading-7 text-slate-400">
          <strong className="text-white">A note on experience:</strong> This page focuses on skills I am actively practising. I personally carry out the planning, building, editing and review for the work I present. I will add new capabilities as I gain practical experience.
        </div>
      </section>
    </>
  );
}

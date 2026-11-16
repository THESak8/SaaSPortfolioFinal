import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Clapperboard, PenTool, Sparkles } from "lucide-react";
import { profile, skillGroups, services } from "../data";
import SectionHeading from "../components/SectionHeading";

const rise = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden px-5 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .12 } } }}>
            <motion.div variants={rise} className="mb-7 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-electric">
              <span className="h-2 w-2 animate-pulse rounded-full bg-electric" /> Available for select projects
            </motion.div>
            <motion.p variants={rise} className="eyebrow">Web Developer · Video Editor · Content Writer</motion.p>
            <motion.h1 variants={rise} className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              I build digital<br /><span className="gradient-text">experiences</span><br />that move ideas forward.
            </motion.h1>
            <motion.p variants={rise} className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              I'm {profile.name}. I help businesses bring their ideas online through websites, creative video editing and clear digital content.
            </motion.p>
            <motion.div variants={rise} className="mt-9 flex flex-wrap gap-4">
              <Link to="/projects" className="button-primary">Explore my work <ArrowUpRight size={18} /></Link>
              <Link to="/contact" className="button-secondary">Let's work together</Link>
            </motion.div>
            <motion.div variants={rise} className="mt-14 flex items-center gap-4 text-sm text-slate-500">
              <span className="h-px w-12 bg-electric/50" /> {profile.tagline}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, delay: .2 }} className="relative mx-auto w-full max-w-md">
            <div className="avatar-card relative aspect-[.88] overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent" />
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-xs uppercase tracking-[.2em] text-slate-400"><span>Creative developer</span><Sparkles size={18} className="text-electric" /></div>
                <div className="avatar-illustration mx-auto flex h-64 w-64 max-w-full items-center justify-center rounded-full">
                  <div className="avatar-ring flex h-52 w-52 items-center justify-center rounded-full">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#10172d] shadow-2xl">
                      <Code2 size={88} strokeWidth={1.25} className="text-electric" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-white">Saket Kumar<span className="text-electric">.</span></p>
                  <p className="mt-1 text-sm text-slate-400">Code × Creativity × Craft</p>
                </div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="floating-chip -left-7 top-20"><Code2 size={17} /> Web development</motion.div>
            <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 4.5 }} className="floating-chip -right-6 bottom-24"><Clapperboard size={17} /> Video editing</motion.div>
            <div className="floating-chip bottom-5 left-8"><Sparkles size={17} /> Content writing</div>
          </motion.div>
        </div>
        <a href="#what-i-do" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.2em] text-slate-500 md:flex">Scroll to explore <ArrowDown size={14} /></a>
      </section>

      <section id="what-i-do" className="section-wrap">
        <SectionHeading eyebrow="What I do" title="A mix of technology and creativity." description="I bring together hands-on web development, visual storytelling and writing to turn ideas into useful digital experiences." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [Code2, "Web Development", "Responsive websites, landing pages and thoughtful digital experiences."],
            [Clapperboard, "Creative Media", "Video editing and visual content for creators and businesses."],
            [PenTool, "Content Writing", "Clear, engaging content for websites and digital platforms."],
          ].map(([Icon, title, desc], i) => (
            <motion.div whileHover={{ y: -7 }} key={title} className="feature-card">
              <div className="icon-box"><Icon size={25} /></div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[.18em] text-electric">0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="section-band">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured project</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">FASTag Services Website</h2>
            <p className="mt-4 leading-7 text-slate-400">A service-focused website concept covering FASTag activation, replacement, KYC and annual pass enquiries.</p>
            <Link to="/projects" className="mt-7 inline-flex items-center gap-2 font-semibold text-electric hover:gap-3">View project details <ArrowRight size={17} /></Link>
          </div>
          <div className="project-art">
            <div className="browser-bar"><i /><i /><i /><span>fastag-services / home</span></div>
            <div className="p-5">
              <div className="h-2 w-20 rounded bg-electric/70" />
              <div className="mt-5 h-5 w-4/5 rounded bg-white/80" />
              <div className="mt-2 h-2 w-3/5 rounded bg-white/20" />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Activation", "Replacement", "KYC", "Annual Pass"].map((x) => <div key={x} className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300">{x}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <SectionHeading eyebrow="Skills snapshot" title="Tools and skills I'm building with." description="A growing toolkit across web development, creative production and content writing." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div className="soft-card" key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-electric">{group.status}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-7"><Link to="/skills" className="button-secondary">Explore all skills <ArrowUpRight size={17} /></Link></div>
      </section>

      <section className="section-wrap pt-0">
        <div className="cta-panel">
          <p className="eyebrow">Have an idea in mind?</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">Let's make something meaningful together.</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">Tell me what you're building. We can explore the right digital solution for your next step.</p>
          <Link to="/contact" className="button-primary mt-8">Start a conversation <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

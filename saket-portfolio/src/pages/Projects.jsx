import { ArrowUpRight, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import PageIntro from "../components/PageIntro";

const features = ["FASTag activation information", "FASTag replacement information", "KYC service information", "Annual pass information", "Clear customer enquiry call-to-action"];

export default function Projects() {
  return (
    <>
      <PageIntro eyebrow="Selected work" title={<>Ideas made practical.<br /><span className="gradient-text">One project at a time.</span></>} description="A growing collection of practical work. This featured project is based on a real website-building exercise." />
      <section className="section-wrap pt-0">
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.025]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="project-preview flex min-h-[340px] items-center justify-center p-7 md:p-12">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0c1427] p-5 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4"><span className="h-2 w-2 rounded-full bg-rose-400"/><span className="h-2 w-2 rounded-full bg-amber-300"/><span className="h-2 w-2 rounded-full bg-emerald-400"/><span className="ml-auto text-[10px] text-slate-500">FASTAG SERVICES</span></div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-electric">Fast, simple, convenient</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-white">FASTag Services</h3>
                <p className="mt-2 text-xs text-slate-400">Choose the service you need</p>
                <div className="mt-6 grid grid-cols-2 gap-3">{["Activation", "Replacement", "KYC", "Annual Pass"].map(x => <div key={x} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200">{x}</div>)}</div>
                <div className="mt-5 rounded-lg bg-electric px-4 py-3 text-center text-xs font-bold text-slate-950">Contact for assistance</div>
              </div>
            </div>
            <div className="p-7 md:p-12">
              <p className="eyebrow">Featured project · Website</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white">FASTag Services Website</h2>
              <p className="mt-5 leading-7 text-slate-400">A service-focused website designed to help customers understand and enquire about four FASTag-related services. The goal was to present the options clearly and make it easy to contact the service provider.</p>
              <div className="mt-7 space-y-3">{features.map(x => <div key={x} className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 size={17} className="shrink-0 text-electric"/>{x}</div>)}</div>
              <div className="mt-8 flex flex-wrap gap-2"><span className="skill-pill">HTML</span><span className="skill-pill">CSS</span><span className="skill-pill">JavaScript</span></div>
              <div className="mt-8 rounded-xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-amber-100/80">This portfolio entry describes the project scope. Add a live website URL and screenshots after confirming the published version is publicly accessible.</div>
            </div>
          </div>
        </article>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="soft-card"><p className="eyebrow">Work in progress</p><h3 className="mt-3 font-display text-xl font-bold text-white">Responsive business website</h3><p className="mt-2 text-sm leading-6 text-slate-400">A planned hands-on project to practise responsive layouts, clear navigation and accessible page structure.</p><span className="mt-4 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">Planned project</span></div>
          <div className="soft-card"><p className="eyebrow">Work in progress</p><h3 className="mt-3 font-display text-xl font-bold text-white">Video editing showreel</h3><p className="mt-2 text-sm leading-6 text-slate-400">A curated collection of personally edited clips to demonstrate pacing, transitions and storytelling.</p><span className="mt-4 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">Planned project</span></div>
        </div>
      </section>
    </>
  );
}

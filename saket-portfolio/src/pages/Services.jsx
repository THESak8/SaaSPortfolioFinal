import { Link } from "react-router-dom";
import { ArrowUpRight, Code2, PanelsTopLeft, Clapperboard, MonitorSmartphone, Film, PenTool } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { services } from "../data";

const icons = { Code2, PanelsTopLeft, Clapperboard, MonitorSmartphone, Film, PenTool };

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="Services" title={<>Digital support for<br /><span className="gradient-text">ideas in motion.</span></>} description="A set of hands-on services across website development, video editing and content writing. I personally handle the work from planning through final review." />
      <section className="section-wrap pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article key={service.number} className="service-card">
                <div className="flex items-start justify-between"><div className="icon-box"><Icon size={24}/></div><span className="font-display text-sm text-slate-600">{service.number}</span></div>
                <h2 className="mt-6 font-display text-2xl font-bold text-white">{service.title}</h2>
                <p className="mt-3 leading-7 text-slate-400">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{service.tags.map(tag => <span key={tag} className="skill-pill">{tag}</span>)}</div>
                <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:gap-3">Discuss a project <ArrowUpRight size={16}/></Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

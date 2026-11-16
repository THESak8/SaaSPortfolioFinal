import { ArrowUpRight, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, socialLinks } from "../data";

const icons = { GitHub: Github, LinkedIn: Linkedin, Instagram, Facebook };

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Link to="/" className="font-display text-2xl font-bold text-white">SAKET<span className="text-electric">.</span></Link>
          <p className="mt-2 max-w-sm text-sm text-slate-400">Building digital experiences with code, creativity and curiosity.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((item) => {
            const Icon = icons[item.name];
            return item.href ? (
              <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="social-icon" aria-label={item.name}><Icon size={18} /></a>
            ) : (
              <span key={item.name} title={`${item.name} profile URL not added yet`} className="social-icon cursor-not-allowed opacity-50"><Icon size={18} /></span>
            );
          })}
          <a href={`mailto:${profile.email}`} className="social-icon" aria-label="Email"><ArrowUpRight size={18} /></a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Saket Kumar. All rights reserved.</span>
        <span>{profile.tagline}</span>
      </div>
    </footer>
  );
}

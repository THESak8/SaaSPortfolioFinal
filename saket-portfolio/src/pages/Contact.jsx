import { useState } from "react";
import { Mail, Phone, MessageCircle, ArrowUpRight, Send, Github, Linkedin, Instagram, Facebook, CheckCircle2 } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { profile, socialLinks } from "../data";

const icons = { GitHub: Github, LinkedIn: Linkedin, Instagram, Facebook };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "Website Development", message: "" });
  const [copied, setCopied] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${profile.email}`; }
  };
  return (
    <>
      <PageIntro eyebrow="Get in touch" title={<>Have a project?<br /><span className="gradient-text">Let's talk.</span></>} description="Have a website idea, a video to edit or content to create? Send a few details and let's start a conversation." />
      <section className="section-wrap pt-0">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="contact-card">
              <div className="icon-box"><Mail size={22}/></div>
              <p className="mt-5 text-sm text-slate-400">Email me</p>
              <a className="mt-1 block break-all font-display text-lg font-semibold text-white hover:text-electric" href={`mailto:${profile.email}`}>{profile.email}</a>
              <button onClick={copyEmail} className="mt-3 text-xs font-semibold text-electric">{copied ? "Copied!" : "Copy email address"}</button>
            </div>
            <div className="contact-card">
              <div className="icon-box"><Phone size={22}/></div>
              <p className="mt-5 text-sm text-slate-400">Call me</p>
              <a className="mt-1 block font-display text-lg font-semibold text-white hover:text-electric" href={`tel:+91${profile.phone}`}>+91 {profile.phone}</a>
            </div>
            <a className="contact-card block transition hover:-translate-y-1 hover:border-emerald-400/30" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
              <div className="icon-box !border-emerald-400/20 !bg-emerald-400/10 !text-emerald-300"><MessageCircle size={22}/></div>
              <p className="mt-5 text-sm text-slate-400">Prefer WhatsApp?</p>
              <span className="mt-1 flex items-center gap-2 font-display text-lg font-semibold text-white">Message me <ArrowUpRight size={17}/></span>
            </a>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map(({ name, href }) => { const Icon = icons[name]; return href ? <a key={name} className="social-icon" href={href} target="_blank" rel="noreferrer" aria-label={name}><Icon size={18}/></a> : <span key={name} title={`${name} URL not added yet`} className="social-icon cursor-not-allowed opacity-40"><Icon size={18}/></span>; })}
            </div>
          </div>
          <form onSubmit={submit} className="form-card space-y-5">
            <div><p className="eyebrow">Send an enquiry</p><h2 className="mt-2 font-display text-2xl font-bold text-white">Tell me about your project.</h2><p className="mt-2 text-sm leading-6 text-slate-400">Submitting opens your email app with the details filled in. No information is stored on a server.</p></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-label">Your name<input required name="name" value={form.name} onChange={update} placeholder="Name" className="form-input"/></label>
              <label className="form-label">Your email<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" className="form-input"/></label>
            </div>
            <label className="form-label">What do you need?
              <select name="service" value={form.service} onChange={update} className="form-input">
                {["Website Development","Responsive Website Design","Landing Page / Website Redesign","Video Editing","YouTube Video Editing","Reels & Shorts Editing","Content Writing","Other"].map(x => <option key={x}>{x}</option>)}
              </select>
            </label>
            <label className="form-label">Project details<textarea required name="message" value={form.message} onChange={update} rows="5" placeholder="A little about your idea, goals and timeline..." className="form-input resize-y"/></label>
            <button type="submit" className="button-primary w-full sm:w-auto">Prepare email <Send size={17}/></button>
          </form>
        </div>
      </section>
    </>
  );
}

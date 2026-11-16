import { Play, Clapperboard, Film, AudioLines } from "lucide-react";
import PageIntro from "../components/PageIntro";

const formats = [
  { icon: Clapperboard, title: "YouTube videos", desc: "Long-form edits with clear pacing, structure and engaging storytelling.", cls: "video-art-one" },
  { icon: Film, title: "Reels & Shorts", desc: "Short-form content designed for quick viewing and social platforms.", cls: "video-art-two" },
  { icon: AudioLines, title: "Creative storytelling", desc: "Thoughtful pacing, sound and visual choices to make each video clear and engaging.", cls: "video-art-three" },
];

export default function Video() {
  return (
    <>
      <PageIntro eyebrow="Video editing showcase" title={<>Stories deserve<br /><span className="gradient-text">great editing.</span></>} description="A dedicated space for video work and creative edits that I plan, assemble and refine myself. Add your finished video links or upload portfolio clips here as your reel grows." />
      <section className="section-wrap pt-0">
        <div className="mb-8 rounded-2xl border border-electric/20 bg-electric/5 p-5 text-sm leading-7 text-slate-300">
          <strong className="text-white">Showreel area:</strong> No finished video files or public video links have been provided yet, so this page uses designed placeholders rather than claiming sample edits are completed work.
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {formats.map(({ icon: Icon, title, desc, cls }) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.025]">
              <div className={`video-art ${cls} flex aspect-[4/3] items-center justify-center`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur"><Play fill="currentColor" size={22} /></div>
              </div>
              <div className="p-5"><div className="icon-box !h-10 !w-10"><Icon size={20}/></div><h2 className="mt-4 font-display text-xl font-bold text-white">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p><span className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-slate-400">Add showcase clip</span></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

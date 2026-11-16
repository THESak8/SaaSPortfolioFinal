import { motion } from "framer-motion";

export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-shell pb-12 pt-16 md:pt-24">
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{description}</p>
      </motion.div>
    </section>
  );
}

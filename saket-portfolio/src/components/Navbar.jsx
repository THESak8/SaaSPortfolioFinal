import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Video", "/video"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="site-nav mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 md:px-7">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-white" onClick={() => setOpen(false)}>
          SAKET<span className="text-electric">.</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>
              {label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="button-primary hidden items-center gap-2 !px-4 !py-2.5 text-sm md:inline-flex">
          Let's talk <ArrowUpRight size={16} />
        </Link>
        <button className="rounded-xl border border-white/10 p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="site-nav mx-auto mt-2 max-w-7xl rounded-2xl p-3 lg:hidden">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)} className={({ isActive }) => `mobile-nav-link ${isActive ? "text-electric" : ""}`}>
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

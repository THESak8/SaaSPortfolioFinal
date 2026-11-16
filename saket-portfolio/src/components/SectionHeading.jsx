export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title mt-3">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

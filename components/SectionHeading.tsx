type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

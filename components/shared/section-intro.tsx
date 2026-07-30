export function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`corp-section-intro ${light ? "is-light" : ""} ${
        centered ? "is-centered" : ""
      }`}
    >
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  );
}

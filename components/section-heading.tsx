import { Reveal, type RevealVariant } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "blur-up",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: RevealVariant;
}) {
  return (
    <Reveal className="section-heading" variant={variant}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </Reveal>
  );
}

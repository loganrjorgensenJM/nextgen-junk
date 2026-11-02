import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  text: string;
  cta?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  accent,
  text,
  cta = true,
}: PageHeroProps) {
  return (
    <section className="pageHero">
      <div className="pageHeroAccent" />

      <div className="shell pageHeroInner">
        <span className="sectionKicker">{eyebrow}</span>
        <h1>
          {title}
          {accent ? <span>{accent}</span> : null}
        </h1>
        <p>{text}</p>

        {cta ? (
          <div className="pageHeroActions">
            <Link className="button buttonGradient" href="/contact">
              Get a Free Quote <span aria-hidden="true">→</span>
            </Link>
            <Link className="button buttonOutline" href="/pricing">
              View Pricing
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

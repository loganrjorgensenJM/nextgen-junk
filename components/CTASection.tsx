import Link from "next/link";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export default function CTASection({
  title = "Ready to get the junk gone?",
  text = "Send us a quick description or text photos and we’ll help you figure out the next step.",
}: CTASectionProps) {
  return (
    <section className="ctaSection">
      <div className="shell ctaInner">
        <div>
          <span className="sectionKicker">Free Quote</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="ctaActions">
          <Link className="button buttonGradient" href="/contact">
            Request a Quote <span aria-hidden="true">→</span>
          </Link>
          <a className="button buttonOutline" href="tel:+15306808652">
            Call or Text
          </a>
        </div>
      </div>
    </section>
  );
}

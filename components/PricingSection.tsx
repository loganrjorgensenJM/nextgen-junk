import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="pricingImageSection">
      <div className="shell pricingImageShell">
        <div className="sectionHeading centeredHeading">
          <span className="sectionKicker">Simple, Upfront Pricing</span>
          <h2>See the full pricing guide.</h2>
          <p>
            Pricing is based on how much space your items take up in our trailer.
            Tap the flyer to view it full size.
          </p>
        </div>

        <a
          className="pricingFlyerLink"
          href="/images/pricing-flyer.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open NextGen Junk pricing flyer full size"
        >
          <Image
            src="/images/pricing-flyer.png"
            alt="NextGen Junk junk removal pricing flyer"
            width={1103}
            height={1426}
            className="pricingFlyerImage"
            sizes="(max-width: 1200px) 94vw, 1000px"
          />
        </a>

        <div className="pricingContactRow">
          <a href="tel:+15306808652">
            <span>Call or Text Logan</span>
            <strong>(530) 680-8652</strong>
          </a>

          <a href="tel:+17753868276">
            <span>Call or Text Michael</span>
            <strong>(775) 386-8276</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

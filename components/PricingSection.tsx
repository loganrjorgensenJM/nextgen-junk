import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="pricingImageSection" id="pricing">
      <div className="shell pricingImageShell">
        <a
          className="pricingFlyerLink"
          href="/images/pricing-flyer.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the NextGen Junk pricing flyer full size"
        >
          <Image
            src="/images/pricing-flyer.png"
            alt="NextGen Junk pricing flyer showing junk removal pricing, included services, and contact information"
            width={1103}
            height={1426}
            className="pricingFlyerImage"
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
        </a>

        <p className="pricingImageHint">
          Tap the pricing flyer to view it full size.
        </p>
      </div>
    </section>
  );
}

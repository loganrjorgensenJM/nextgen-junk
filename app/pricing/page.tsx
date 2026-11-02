import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Junk Removal Pricing",
  description:
    "View NextGen Junk pricing for junk removal and trailer-load pricing in Reno and Sparks, Nevada.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing based on"
        accent="trailer space."
        text="Our standard pricing is based on how much space your items take up in the trailer. The pricing guide below gives you a clear starting point."
        cta={false}
      />

      <PricingSection />

      <section className="section sectionWhite">
        <div className="shell pricingNotesGrid">
          <article>
            <span className="cardNumber">01</span>
            <h3>Standard Pricing Includes</h3>
            <p>Loading, hauling, labor, and standard disposal.</p>
          </article>

          <article>
            <span className="cardNumber">02</span>
            <h3>Special Items</h3>
            <p>
              Mattresses, tires, refrigerators/freezers, TVs/e-waste, and heavy
              materials may have additional disposal costs.
            </p>
          </article>

          <article>
            <span className="cardNumber">03</span>
            <h3>Photo Estimates</h3>
            <p>
              Text photos before the job and we can help estimate how much
              trailer space your items may take.
            </p>
          </article>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

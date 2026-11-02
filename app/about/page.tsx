import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NextGen Junk, a local Reno-Sparks junk removal company focused on straightforward communication and dependable service.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About NextGen Junk"
        title="Local service."
        accent="Straightforward process."
        text="NextGen Junk was built to make junk removal easier to understand, easier to schedule, and easier to communicate from start to finish."
      />

      <section className="section sectionWhite">
        <div className="shell aboutSplit">
          <div className="aboutLogoPanel">
            <Image
              src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
              alt="NextGen Junk"
              width={900}
              height={650}
              className="aboutLogo"
            />
          </div>

          <div className="aboutCopy">
            <span className="sectionKicker">Who We Are</span>
            <h2>Built around simple, local service.</h2>
            <p>
              NextGen Junk serves homeowners, renters, landlords, property
              managers, contractors, and local businesses throughout the
              Reno-Sparks area.
            </p>
            <p>
              Our goal is simple: make it easy to show us what needs to go,
              understand the pricing, schedule the work, and get the space
              cleaned up.
            </p>

            <div className="ownerGrid">
              <div>
                <span>Owner</span>
                <strong>Logan Jorgensen</strong>
                <a href="tel:+15306808652">(530) 680-8652</a>
              </div>

              <div>
                <span>Owner</span>
                <strong>Michael Whaley</strong>
                <a href="tel:+17753868276">(775) 386-8276</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell valuesGrid">
          <article>
            <span className="cardNumber">01</span>
            <h3>Clear Communication</h3>
            <p>Call, text, or send a quote request without jumping through hoops.</p>
          </article>

          <article>
            <span className="cardNumber">02</span>
            <h3>Simple Pricing</h3>
            <p>Trailer-space pricing gives customers a clear way to understand cost.</p>
          </article>

          <article>
            <span className="cardNumber">03</span>
            <h3>Local Focus</h3>
            <p>We are focused on serving Reno, Sparks, and nearby communities.</p>
          </article>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

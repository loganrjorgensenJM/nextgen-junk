import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Contact NextGen Junk for a free junk removal quote in Reno, Sparks, and surrounding Northern Nevada communities.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us what"
        accent="needs to go."
        text="Call, text, or send a quote request online. For the fastest estimate, text photos of the items you want removed."
        cta={false}
      />

      <section className="section contactPageSection">
        <div className="shell contactPageGrid">
          <div className="contactInfo">
            <span className="sectionKicker">Call or Text</span>
            <h2>Talk directly with us.</h2>
            <p>
              If you have photos ready, texting is often the fastest way to get
              started.
            </p>

            <div className="contactPersonCards">
              <a href="tel:+15306808652">
                <span>Logan</span>
                <strong>(530) 680-8652</strong>
                <small>Call or Text</small>
              </a>

              <a href="tel:+17753868276">
                <span>Michael</span>
                <strong>(775) 386-8276</strong>
                <small>Call or Text</small>
              </a>

              <a href="mailto:nextgenjunkteam@gmail.com">
                <span>Email</span>
                <strong>nextgenjunkteam@gmail.com</strong>
                <small>Send us job details</small>
              </a>
            </div>

            <div className="serviceAreaNote">
              <strong>Serving:</strong>
              <span>
                Reno • Sparks • Spanish Springs • Sun Valley • Verdi •
                Surrounding Areas
              </span>
            </div>
          </div>

          <div className="quoteCard">
            <div className="quoteCardHeading">
              <span className="sectionKicker">Free Quote Request</span>
              <h2>Send us the details.</h2>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}

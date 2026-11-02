import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

const serviceHighlights = [
  {
    title: "Furniture & Bulky Items",
    text: "Couches, sectionals, mattresses, dressers, tables, and other large household items.",
  },
  {
    title: "Property Cleanouts",
    text: "Garages, rentals, storage units, move-outs, estates, and recurring property cleanup.",
  },
  {
    title: "Debris & Commercial",
    text: "Yard debris, remodel waste, office furniture, and cleanup support for local businesses.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="homeHero">
          <div className="homeHeroAccent" />

          <div className="shell homeHeroGrid">
            <div className="homeHeroCopy">
              <span className="sectionKicker">Reno • Sparks • Northern Nevada</span>
              <h1>
                Junk Removal
                <span>Made Simple.</span>
              </h1>
              <p>
                Fast, local junk removal for homes, rentals, businesses, and
                properties throughout the Reno-Sparks area.
              </p>

              <div className="heroActions">
                <Link className="button buttonGradient" href="/contact">
                  Get a Free Quote <span aria-hidden="true">→</span>
                </Link>
                <Link className="button buttonOutline" href="/services">
                  View Services
                </Link>
              </div>

              <div className="homeContactRow">
                <a href="tel:+15306808652">
                  <span>Call or Text</span>
                  <strong>Logan — (530) 680-8652</strong>
                </a>

                <a href="tel:+17753868276">
                  <span>Call or Text</span>
                  <strong>Michael — (775) 386-8276</strong>
                </a>
              </div>
            </div>

            <div className="homeHeroVisual">
              <div className="logoFrame">
                <Image
                  src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
                  alt="NextGen Junk"
                  width={900}
                  height={650}
                  className="homeHeroLogo"
                  priority
                />
              </div>

              <div className="heroTrustRow">
                <span>Local Service</span>
                <span>Straightforward Quotes</span>
                <span>Residential & Commercial</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionLight">
          <div className="shell">
            <div className="sectionHeading splitHeading">
              <div>
                <span className="sectionKicker">What We Do</span>
                <h2>Cleanup without the hassle.</h2>
              </div>

              <div>
                <p>
                  Whether it is one bulky item or a larger property cleanup,
                  NextGen Junk keeps the process simple from the first message to
                  the final haul-away.
                </p>
                <Link className="textLink" href="/services">
                  See all services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="homeServiceGrid">
              {serviceHighlights.map((service, index) => (
                <article className="homeServiceCard" key={service.title}>
                  <span className="cardNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="processBand">
          <div className="shell">
            <div className="sectionHeading sectionHeadingLight centeredHeading">
              <span className="sectionKicker">How It Works</span>
              <h2>Three steps. Then it&apos;s gone.</h2>
            </div>

            <div className="processGrid">
              <article>
                <span>01</span>
                <h3>Show Us the Junk</h3>
                <p>Text photos or send a quote request with a quick description.</p>
              </article>

              <article>
                <span>02</span>
                <h3>Get Your Quote</h3>
                <p>We give you straightforward pricing based on the job and load.</p>
              </article>

              <article>
                <span>03</span>
                <h3>We Haul It Away</h3>
                <p>Choose a time that works and we handle the loading and removal.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section sectionWhite">
          <div className="shell homeFeatureSplit">
            <div className="homeFeatureVisual">
              <Image
                src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
                alt="NextGen Junk"
                width={800}
                height={600}
                className="featureLogo"
              />
            </div>

            <div className="homeFeatureCopy">
              <span className="sectionKicker">Why NextGen Junk</span>
              <h2>Local service without the runaround.</h2>
              <p>
                We focus on responsive communication, clear expectations, and a
                simple process that works for homeowners, landlords, property
                managers, and businesses.
              </p>

              <div className="featureList">
                <div><span>✓</span><strong>Call, text, or request a quote online</strong></div>
                <div><span>✓</span><strong>Residential and commercial cleanup</strong></div>
                <div><span>✓</span><strong>Serving Reno, Sparks, and nearby areas</strong></div>
              </div>

              <Link className="textLink" href="/about">
                Learn more about NextGen Junk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}

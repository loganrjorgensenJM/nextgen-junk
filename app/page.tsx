import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

const services = [
  {
    title: "Furniture Removal",
    text: "Couches, sectionals, dressers, tables, mattresses, box springs, and other bulky furniture.",
  },
  {
    title: "Appliance Removal",
    text: "Refrigerators, washers, dryers, and other large household appliances.",
  },
  {
    title: "Property Cleanouts",
    text: "Garages, spare rooms, storage units, rentals, move-outs, and estate cleanouts.",
  },
  {
    title: "Yard Debris",
    text: "Branches, landscaping waste, outdoor clutter, and general yard cleanup material.",
  },
  {
    title: "Construction Debris",
    text: "Remodel and construction debris hauling for homeowners, contractors, and property managers.",
  },
  {
    title: "Commercial Cleanouts",
    text: "Office furniture, recurring property cleanup, and hauling for local businesses.",
  },
];

const areas = [
  "Reno",
  "Sparks",
  "Spanish Springs",
  "Sun Valley",
  "Verdi",
  "Surrounding Areas",
];

export default function Home() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero">
          <div className="heroAccent heroAccentTop" />
          <div className="heroAccent heroAccentBottom" />

          <div className="shell heroGrid">
            <div className="heroCopy">
              <div className="heroEyebrow">Reno • Sparks • Northern Nevada</div>

              <h1>
                Junk Removal
                <span>Made Simple.</span>
              </h1>

              <p>
                Fast, local junk removal for homes, rentals, businesses, and
                properties throughout the Reno-Sparks area.
              </p>

              <div className="heroButtons">
                <a className="button buttonGradient" href="#quote">
                  Get a Free Quote <span>→</span>
                </a>

                <a className="button buttonOutline" href="tel:+15306808652">
                  Call (530) 680-8652
                </a>
              </div>

              <div className="heroTrust">
                <span>Local Service</span>
                <span>Straightforward Quotes</span>
                <span>Residential & Commercial</span>
              </div>
            </div>

            <div className="heroLogoPanel">
              <div className="heroLogoGlow" />
              <Image
                src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
                alt="NextGen Junk mountain logo"
                width={900}
                height={650}
                className="heroLogo"
                priority
              />
              <div className="heroTagline">
                <span>Junk Removal</span>
                <i />
                <span>Cleanouts</span>
                <i />
                <span>Hauling</span>
              </div>
            </div>
          </div>
        </section>

        <section className="brandStrip">
          <div className="brandStripOrange" />
          <div className="brandStripBlack" />
        </section>

        <section className="quickBar">
          <div className="shell quickBarGrid">
            <div>
              <strong>Furniture</strong>
              <span>Couches, mattresses & more</span>
            </div>
            <div>
              <strong>Cleanouts</strong>
              <span>Garages, rentals & estates</span>
            </div>
            <div>
              <strong>Debris</strong>
              <span>Yard, remodel & construction</span>
            </div>
            <div>
              <strong>Commercial</strong>
              <span>Offices & property cleanup</span>
            </div>
          </div>
        </section>

        <section className="section servicesSection" id="services">
          <div className="shell">
            <div className="sectionHeading">
              <span className="sectionKicker">What We Haul</span>
              <h2>Get the junk off your property and off your list.</h2>
              <p>
                From one bulky item to larger cleanouts, we make removal simple.
              </p>
            </div>

            <div className="serviceGrid">
              {services.map((service, index) => (
                <article className="serviceCard" key={service.title}>
                  <span className="serviceNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="serviceSlash" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#quote">
                    Get a quote <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="processSection" id="how-it-works">
          <div className="processTopSlash" />

          <div className="shell processContent">
            <div className="sectionHeading sectionHeadingLight">
              <span className="sectionKicker">How It Works</span>
              <h2>Three steps. Then it&apos;s gone.</h2>
            </div>

            <div className="processGrid">
              <article>
                <div className="processNumber">01</div>
                <h3>Show Us the Junk</h3>
                <p>
                  Send photos or fill out the quote form with a quick
                  description of what needs to go.
                </p>
              </article>

              <article>
                <div className="processNumber">02</div>
                <h3>Get Your Quote</h3>
                <p>
                  We review the job and give you straightforward pricing based
                  on the load and work involved.
                </p>
              </article>

              <article>
                <div className="processNumber">03</div>
                <h3>We Haul It Away</h3>
                <p>
                  Pick a time that works, show us what goes, and we handle the
                  removal.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section whySection">
          <div className="shell whyGrid">
            <div className="whyVisual">
              <div className="whyVisualOrange" />
              <div className="whyVisualBlack" />
              <Image
                src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
                alt="NextGen Junk"
                width={800}
                height={600}
                className="whyLogo"
              />
            </div>

            <div className="whyCopy">
              <span className="sectionKicker">Why NextGen Junk</span>
              <h2>Local service without the runaround.</h2>
              <p>
                NextGen Junk is built around straightforward communication,
                flexible scheduling, and a simple process from the first call to
                the final haul-away.
              </p>

              <div className="checkList">
                <div>
                  <span>✓</span>
                  <p>
                    <strong>Simple communication</strong>
                    Call, text, or send a quote request online.
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    <strong>Flexible job sizes</strong>
                    Single items, full cleanouts, debris, and recurring work.
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    <strong>Local focus</strong>
                    Serving homeowners, renters, property managers, and
                    businesses around Reno and Sparks.
                  </p>
                </div>
              </div>

              <a className="textLink" href="#quote">
                Tell us about your job <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="areaSection" id="service-areas">
          <div className="areaOrangeSlash" />

          <div className="shell areaGrid">
            <div>
              <span className="sectionKicker">Service Area</span>
              <h2>Serving Reno, Sparks & nearby communities.</h2>
              <p>
                Have a job just outside the normal area? Reach out and we can
                let you know whether we can make it work.
              </p>
              <a className="button buttonWhite" href="#quote">
                Check Your Area <span>→</span>
              </a>
            </div>

            <div className="areaList">
              {areas.map((area) => (
                <div key={area}>
                  <span className="pin">●</span>
                  <strong>{area}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faqSection" id="faq">
          <div className="shell faqGrid">
            <div className="faqIntro">
              <span className="sectionKicker">Common Questions</span>
              <h2>What to know before we haul it.</h2>
              <p>
                Still have a question? Call or text and we can walk through the
                job with you.
              </p>
            </div>

            <div className="faqList">
              <details>
                <summary>
                  How does pricing work?
                  <span>+</span>
                </summary>
                <p>
                  Pricing depends on load size, material type, disposal costs,
                  labor, and access. Photos help us give you the best estimate.
                </p>
              </details>

              <details>
                <summary>
                  Do you handle small jobs?
                  <span>+</span>
                </summary>
                <p>
                  Yes. We can help with single bulky items, curbside pickups,
                  dump runs, and larger cleanouts.
                </p>
              </details>

              <details>
                <summary>
                  Can I text photos?
                  <span>+</span>
                </summary>
                <p>
                  Yes. Text photos and a short description to (530) 680-8652.
                </p>
              </details>

              <details>
                <summary>
                  What areas do you serve?
                  <span>+</span>
                </summary>
                <p>
                  Reno, Sparks, Spanish Springs, Sun Valley, Verdi, and nearby
                  Northern Nevada communities.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="quoteSection" id="quote">
          <div className="quoteSlash" />

          <div className="shell quoteGrid">
            <div className="quoteIntro">
              <span className="sectionKicker">Free Quote</span>
              <h2>Ready to clear the junk?</h2>
              <p>
                Give us the basics and we&apos;ll have what we need to start
                putting together your quote.
              </p>

              <div className="contactCards">
                <a href="tel:+15306808652">
                  <span>Call</span>
                  <strong>(530) 680-8652</strong>
                </a>

                <a href="sms:+15306808652">
                  <span>Text</span>
                  <strong>Send Job Photos</strong>
                </a>

                <a href="mailto:Nexgenjunkteam@gmail.com">
                  <span>Email</span>
                  <strong>Nexgenjunkteam@gmail.com</strong>
                </a>
              </div>
            </div>

            <div className="quoteCard">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="mobileSticky">
        <a href="tel:+15306808652">Call</a>
        <a href="sms:+15306808652">Text</a>
        <a href="#quote">Free Quote</a>
      </div>
    </div>
  );
}

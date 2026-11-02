import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Junk Removal Services",
  description:
    "Furniture removal, cleanouts, appliance removal, yard debris, construction debris, and commercial junk removal in Reno and Sparks.",
};

const services = [
  {
    title: "Furniture Removal",
    text: "Couches, sectionals, recliners, dressers, tables, mattresses, box springs, and other bulky household furniture.",
    examples: "Couches • Mattresses • Dressers • Tables",
  },
  {
    title: "Appliance Removal",
    text: "Large household appliances that are difficult to move on your own.",
    examples: "Refrigerators • Washers • Dryers • Appliances",
  },
  {
    title: "Property Cleanouts",
    text: "Flexible cleanup for homes and properties when clutter has built up or a space needs to be cleared.",
    examples: "Garages • Spare Rooms • Storage Units • Estates",
  },
  {
    title: "Move-Out & Rental Cleanouts",
    text: "Junk removal for move-outs, tenant turnovers, property managers, and rental-property cleanup.",
    examples: "Move-Outs • Tenant Turnovers • Property Cleanup",
  },
  {
    title: "Yard & Outdoor Debris",
    text: "Removal of branches, landscaping waste, outdoor clutter, and general yard cleanup material.",
    examples: "Branches • Yard Waste • Outdoor Clutter",
  },
  {
    title: "Construction & Remodel Debris",
    text: "Hauling for common remodel and construction cleanup projects for homeowners and contractors.",
    examples: "Remodel Debris • Jobsite Cleanup • Mixed Debris",
  },
  {
    title: "Commercial Cleanouts",
    text: "Office furniture, business cleanouts, and recurring cleanup support for local commercial properties.",
    examples: "Offices • Furniture • Property Cleanup",
  },
  {
    title: "Curbside Pickups & Dump Runs",
    text: "A simple option when your items are already staged and ready for pickup.",
    examples: "Curbside • Small Loads • Quick Pickups",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Junk Removal Services"
        title="Whatever needs to go,"
        accent="we can help."
        text="From single-item pickups to larger cleanouts, NextGen Junk handles residential and commercial hauling throughout the Reno-Sparks area."
      />

      <section className="section sectionLight">
        <div className="shell servicePageGrid">
          {services.map((service, index) => (
            <article className="serviceDetailCard" key={service.title}>
              <span className="cardNumber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <strong>{service.examples}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionWhite">
        <div className="shell twoColumnInfo">
          <div>
            <span className="sectionKicker">Service Area</span>
            <h2>Local to Reno & Sparks.</h2>
            <p>
              We serve Reno, Sparks, Spanish Springs, Sun Valley, Verdi, and
              surrounding communities. If you are nearby and unsure whether we
              can reach you, send us a message.
            </p>
          </div>

          <div className="infoPanel">
            <h3>Have something unusual?</h3>
            <p>
              Send a photo before booking. Some heavy, specialty, or regulated
              materials may require different disposal arrangements or pricing.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service fits?"
        text="Send us photos and a short description. We’ll help you figure out the right pickup or cleanout."
      />
    </main>
  );
}

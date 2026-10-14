import Image from "next/image";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerSlash footerSlashTop" />

      <div className="shell footerGrid">
        <div className="footerBrand">
          <Image
            src="/images/NextGen%20Junk%20Co.%20Mountain%20Logo.png"
            alt="NextGen Junk"
            width={410}
            height={210}
            className="footerLogo"
          />
          <p>
            Local junk removal, cleanouts, and hauling serving Reno, Sparks,
            and surrounding Northern Nevada communities.
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <a href="tel:+15306808652">Logan — (530) 680-8652</a>
          <a href="tel:+17753868276">Michael — (775) 386-8276</a>
          <a href="mailto:nextgenjunkteam@gmail.com">
            nextgenjunkteam@gmail.com
          </a>
          <span>NextGenJunkCo.com</span>
        </div>

        <div>
          <h3>Service Area</h3>
          <span>Reno</span>
          <span>Sparks</span>
          <span>Spanish Springs</span>
          <span>Sun Valley</span>
          <span>Verdi</span>
        </div>

        <div>
          <h3>Services</h3>
          <a href="#services">Furniture Removal</a>
          <a href="#services">Cleanouts</a>
          <a href="#services">Debris Hauling</a>
          <a href="#services">Commercial Cleanup</a>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>© 2026 NextGen Junk. All rights reserved.</span>
        <span>Junk Removal • Cleanouts • Hauling</span>
      </div>
    </footer>
  );
}

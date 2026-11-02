import Image from "next/image";
import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61594986256543";
const INSTAGRAM_URL = "https://www.instagram.com/nextgenjunkteam";
const GOOGLE_REVIEW_URL = "https://g.page/r/CccvnsInN1vmEAE/review";

export default function Footer() {
  return (
    <footer className="siteFooter">
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

          <div className="footerSocialLinks">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
              Google Reviews
            </a>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
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
          <span>Surrounding Areas</span>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>© 2026 NextGen Junk. All rights reserved.</span>
        <span>Junk Removal • Cleanouts • Hauling</span>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GoogleReviews from "@/components/GoogleReviews";
import CTASection from "@/components/CTASection";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61594986256543";
const INSTAGRAM_URL = "https://www.instagram.com/nextgenjunkteam";
const GOOGLE_REVIEW_URL = "https://g.page/r/CccvnsInN1vmEAE/review";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "See Google reviews for NextGen Junk and follow NextGen Junk on Facebook and Instagram.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Customer Reviews"
        title="See what customers"
        accent="are saying."
        text="Read recent Google reviews, leave feedback after a job, and follow NextGen Junk on social media."
        cta={false}
      />

      <section className="section sectionWhite">
        <div className="shell">
          <GoogleReviews />
        </div>
      </section>

      <section className="section socialPageSection">
        <div className="shell socialPageGrid">
          <div>
            <span className="sectionKicker">Stay Connected</span>
            <h2>Follow NextGen Junk.</h2>
            <p>
              Follow along for recent jobs, cleanouts, before-and-after work,
              and updates from around the Reno-Sparks area.
            </p>
          </div>

          <div className="socialPageLinks">
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              <span>Facebook</span>
              <strong>Follow NextGen Junk</strong>
            </a>

            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@nextgenjunkteam</strong>
            </a>

            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
              <span>Google</span>
              <strong>Leave a Review</strong>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

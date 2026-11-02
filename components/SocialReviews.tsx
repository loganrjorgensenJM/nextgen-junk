import GoogleReviews from "@/components/GoogleReviews";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61594986256543";
const INSTAGRAM_URL = "https://www.instagram.com/nextgenjunkteam";
const GOOGLE_REVIEW_URL = "https://g.page/r/CccvnsInN1vmEAE/review";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M28 17h6v-7h-6c-7 0-11 4-11 11v4h-5v7h5v12h8V32h7l1-7h-8v-4c0-3 1-4 3-4Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="8" y="8" width="32" height="32" rx="9" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="34" cy="14" r="2.6" fill="currentColor" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 10a14 14 0 1 0 0 28c7.7 0 13.4-5.4 13.4-13 0-1-.1-1.9-.3-2.8H24v5.5h7.6c-.8 3.6-3.8 5.8-7.6 5.8a9.5 9.5 0 1 1 6.6-16.3l4-3.9A14.7 14.7 0 0 0 24 10Z" fill="currentColor" />
    </svg>
  );
}

export default function SocialReviews() {
  return (
    <section className="socialReviewsSection" aria-labelledby="social-reviews-title">
      <div className="shell socialReviewsGrid">
        <div className="socialReviewsIntro">
          <span className="sectionKicker">Stay Connected</span>
          <h2 id="social-reviews-title">Follow NextGen Junk</h2>
          <p>
            Follow along for recent cleanouts, before-and-after jobs, local
            updates, and more from NextGen Junk.
          </p>

          <div className="socialButtons">
            <a
              className="socialButton socialButtonFacebook"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow NextGen Junk on Facebook"
            >
              <span className="socialIcon"><FacebookIcon /></span>
              <span>
                <small>Follow us on</small>
                <strong>Facebook</strong>
              </span>
            </a>

            <a
              className="socialButton socialButtonInstagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow NextGen Junk on Instagram"
            >
              <span className="socialIcon"><InstagramIcon /></span>
              <span>
                <small>Follow us on</small>
                <strong>Instagram</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="socialGooglePrompt">
          <div>
            <span className="socialGooglePromptLabel">Google</span>
            <h3>Help others find NextGen Junk.</h3>
            <p>
              Used NextGen Junk recently? A Google review helps local customers
              know what to expect.
            </p>
          </div>

          <a
            className="button buttonGradient googleReviewButton"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
          >
            Leave a Google Review <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="shell">
        <GoogleReviews />
      </div>
    </section>
  );
}

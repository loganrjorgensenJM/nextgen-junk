"use client";

import { useEffect, useState } from "react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CccvnsInN1vmEAE/review";

type Review = {
  rating: number;
  relativeTime: string;
  text: string;
  authorName: string;
  authorUrl: string;
  authorPhoto: string;
  reviewUrl: string;
};

type ReviewsResponse = {
  configured?: boolean;
  placeName?: string;
  rating?: number | null;
  reviewCount?: number | null;
  googleMapsUrl?: string;
  reviews?: Review[];
  error?: string;
};

function Stars({ rating, label = true }: { rating: number; label?: boolean }) {
  const rounded = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span
      className="liveReviewStars"
      aria-label={label ? `${rating} out of 5 stars` : undefined}
      aria-hidden={label ? undefined : true}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          className={index < rounded ? "starFilled" : "starEmpty"}
          key={index}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadReviews() {
      try {
        const response = await fetch("/api/google-reviews");
        const payload = (await response.json()) as ReviewsResponse;

        if (active) {
          setData(payload);
        }
      } catch {
        if (active) {
          setData({ error: "Unable to load Google reviews right now." });
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadReviews();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="liveReviewsSection" aria-label="Google reviews">
        <div className="liveReviewsHeader">
          <div>
            <span className="sectionKicker">Google Reviews</span>
            <h2>What Customers Are Saying</h2>
          </div>
          <div className="reviewsLoading">Loading reviews…</div>
        </div>
      </section>
    );
  }

  const reviews = data?.reviews ?? [];
  const hasLiveReviews = Boolean(data?.configured && reviews.length);

  return (
    <section className="liveReviewsSection" aria-labelledby="google-reviews-title">
      <div className="liveReviewsHeader">
        <div>
          <span className="sectionKicker">Google Reviews</span>
          <h2 id="google-reviews-title">What Customers Are Saying</h2>
        </div>

        {data?.rating ? (
          <div className="overallRatingCard">
            <strong>{data.rating.toFixed(1)}</strong>
            <div>
              <Stars rating={data.rating} />
              {typeof data.reviewCount === "number" ? (
                <span>{data.reviewCount} Google reviews</span>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {hasLiveReviews ? (
        <>
          <div className="liveReviewsGrid">
            {reviews.map((review, index) => (
              <article className="liveReviewCard" key={`${review.authorName}-${index}`}>
                <div className="liveReviewAuthor">
                  {review.authorPhoto ? (
                    <img
                      src={review.authorPhoto}
                      alt=""
                      className="liveReviewAvatar"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="liveReviewAvatar liveReviewAvatarFallback">
                      {review.authorName.slice(0, 1).toUpperCase()}
                    </span>
                  )}

                  <div>
                    {review.authorUrl ? (
                      <a
                        href={review.authorUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="liveReviewAuthorName"
                      >
                        {review.authorName}
                      </a>
                    ) : (
                      <strong className="liveReviewAuthorName">
                        {review.authorName}
                      </strong>
                    )}

                    <div className="liveReviewMeta">
                      <Stars rating={review.rating} label={false} />
                      {review.relativeTime ? <span>{review.relativeTime}</span> : null}
                    </div>
                  </div>
                </div>

                {review.text ? <p className="liveReviewText">“{review.text}”</p> : null}

                {review.reviewUrl ? (
                  <a
                    href={review.reviewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="reviewSourceLink"
                  >
                    View on Google
                  </a>
                ) : null}
              </article>
            ))}
          </div>

          <div className="liveReviewsActions">
            {data?.googleMapsUrl ? (
              <a
                href={data.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="button buttonOutlineDark"
              >
                View on Google
              </a>
            ) : null}

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="button buttonGradient"
            >
              Leave a Google Review <span aria-hidden="true">→</span>
            </a>
          </div>
        </>
      ) : (
        <div className="reviewsFallback">
          <div>
            <h3>See what customers are saying on Google.</h3>
            <p>
              Live Google reviews will appear here once the Google Places API
              key is added to the website.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="button buttonGradient"
          >
            Leave a Google Review <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </section>
  );
}

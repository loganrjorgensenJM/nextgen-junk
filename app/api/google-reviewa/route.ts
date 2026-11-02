import { NextResponse } from "next/server";

const PLACE_ID = "ChIJxwNcy0YlhIARxy-ewic3W-Y";

type GoogleReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
    languageCode?: string;
  };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  googleMapsUri?: string;
};

type GooglePlaceResponse = {
  displayName?: {
    text?: string;
  };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        configured: false,
        message: "Google Places API key is not configured.",
      },
      { status: 200 }
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
        next: { revalidate: 21600 },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Google Places API error:", response.status, errorText);

      return NextResponse.json(
        {
          configured: true,
          error: "Unable to load Google reviews right now.",
        },
        { status: 502 }
      );
    }

    const data = (await response.json()) as GooglePlaceResponse;

    const reviews = (data.reviews ?? []).map((review) => ({
      rating: review.rating ?? 0,
      relativeTime: review.relativePublishTimeDescription ?? "",
      text: review.text?.text ?? "",
      authorName: review.authorAttribution?.displayName ?? "Google reviewer",
      authorUrl: review.authorAttribution?.uri ?? "",
      authorPhoto: review.authorAttribution?.photoUri ?? "",
      reviewUrl: review.googleMapsUri ?? data.googleMapsUri ?? "",
    }));

    return NextResponse.json(
      {
        configured: true,
        placeName: data.displayName?.text ?? "NextGen Junk",
        rating: data.rating ?? null,
        reviewCount: data.userRatingCount ?? null,
        googleMapsUrl: data.googleMapsUri ?? "",
        reviews,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Unable to fetch Google reviews:", error);

    return NextResponse.json(
      {
        configured: true,
        error: "Unable to load Google reviews right now.",
      },
      { status: 500 }
    );
  }
}

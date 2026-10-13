import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextgenjunkco.com"),
  title: {
    default: "NextGen Junk | Junk Removal in Reno & Sparks, NV",
    template: "%s | NextGen Junk",
  },
  description:
    "NextGen Junk provides junk removal, cleanouts, and hauling in Reno, Sparks, and surrounding Northern Nevada communities.",
  keywords: [
    "junk removal Reno NV",
    "junk removal Sparks NV",
    "Reno cleanouts",
    "furniture removal Reno",
    "appliance removal Reno",
    "estate cleanout Reno",
    "construction debris removal Reno",
    "NextGen Junk",
  ],
  openGraph: {
    title: "NextGen Junk | Junk Removal • Cleanouts • Hauling",
    description:
      "Fast, local junk removal serving Reno, Sparks, and surrounding Northern Nevada communities.",
    url: "https://www.nextgenjunkco.com",
    siteName: "NextGen Junk",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

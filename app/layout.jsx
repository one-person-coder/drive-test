import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const title = "DriveBurn | MoviesBurn, MoviesMod, DriveSeed, DriveLeech";
const description = "DriveBurn is the Best Drive Site for Downloading Movies & Series.";

const mainRootDomain = "https://drive.moviesburn.com";

export const metadata = {
  metadataBase: new URL(mainRootDomain),
  title: title,
  description: description,
  verification: {
    google: "wQibb8P7NVEX_DA5P4Za4SJJMsRW9UxIP6qUrOoH3-U",
  },
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: title,
    description: description,
    type: "website",
    authors: ["Hussain Coder"],
    siteName: "DriveBurn",
    url: mainRootDomain,
    images: "/favicon.png",
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  const popunder = process.env.ADSTERRA_POPUNDER;
  const socialBar = process.env.ADSTERRA_SOCIAL;

  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1JCH9F9LQL" />

      {/* Adsterra Pop Ad */}
      <Script src={popunder} strategy="afterInteractive" />

      {/* Adsterra Social Ad */}
      <Script src={socialBar} strategy="afterInteractive" />
      <body>{children}</body>
    </html>
  );
}

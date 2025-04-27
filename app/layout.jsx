import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const title = "DriveBurn | MoviesBurn, MoviesMod, DriveSeed, DriveLeech";
const description =
  "DriveBurn is the Best Drive Site for Downloading Movies & Series.";

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
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1JCH9F9LQL" />

      {/* Adsterra Pop Ad */}
      <Script
        src="//pl26494530.profitableratecpm.com/9f/44/83/9f448307a53ed619d61f24133b64dd4f.js"
        strategy="afterInteractive"
      />

      {/* Adsterra Social Ad */}
      <Script
        src="//pl26494823.profitableratecpm.com/7e/2d/35/7e2d35514acc5d4c42fdf33927975efc.js"
        strategy="afterInteractive"
      />
      <body>{children}</body>
    </html>
  );
}

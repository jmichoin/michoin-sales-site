import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://michoin-sales-site.vercel.app"),
  title: {
    default: "Jan Michoin - Brand and UX/UI Designer",
    template: "%s | Jan Michoin",
  },
  description:
    "Senior brand and UX/UI design partner for strategy, digital products, visual systems, and focused design sprints.",
  applicationName: "Jan Michoin",
  keywords: [
    "Jan Michoin",
    "brand designer",
    "UX designer",
    "UI designer",
    "digital product design",
    "brand strategy",
    "visual systems",
  ],
  authors: [{ name: "Jan Michoin" }],
  creator: "Jan Michoin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jan Michoin - Brand and UX/UI Designer",
    description:
      "Senior brand and UX/UI design partner for strategy, digital products, visual systems, and focused design sprints.",
    siteName: "Jan Michoin",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jan Michoin - Brand and UX/UI Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Michoin - Brand and UX/UI Designer",
    description:
      "Senior brand and UX/UI design partner for strategy, digital products, visual systems, and focused design sprints.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

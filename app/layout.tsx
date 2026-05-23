import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jan Michoin - Brand and UX/UI Designer",
  description:
    "Senior brand and UX/UI design partner for strategy, digital products, visual systems, and focused design sprints.",
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

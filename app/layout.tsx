import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ND+A | NAOMI DESIGN AND ASSOCIATES",
  description:
    "Brand development and design studio in San Francisco. ND+A creates distinctive brand identities that resonate.",
  keywords: ["brand development", "design", "San Francisco", "ND+A", "NAOMI DESIGN"],
  openGraph: {
    title: "ND+A | NAOMI DESIGN AND ASSOCIATES",
    description: "Brand development and design studio in San Francisco.",
    type: "website",
    url: "https://www.naomidesigners.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}

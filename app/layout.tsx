import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naomidesigners.com"),
  title: "ND+A | NAOMI DESIGN AND ASSOCIATES",
  description:
    "Brand development and design studio in San Francisco. ND+A creates distinctive brand identities that resonate.",
  keywords: ["brand development", "design", "San Francisco", "ND+A", "NAOMI DESIGN"],
  openGraph: {
    title: "ND+A | NAOMI DESIGN AND ASSOCIATES",
    description: "Brand development and design studio in San Francisco.",
    type: "website",
    url: "https://www.naomidesigners.com",
    siteName: "ND+A",
    images: [
      {
        url: "/og-image.png",
        width: 2940,
        height: 1214,
        alt: "ND+A - Brand Development & Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ND+A | NAOMI DESIGN AND ASSOCIATES",
    description: "Brand development and design studio in San Francisco.",
    images: ["/og-image.png"],
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

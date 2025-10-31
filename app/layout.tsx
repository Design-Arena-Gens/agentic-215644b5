import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bangles & Earrings - Elegant Jewelry Collection",
  description: "Discover our exquisite collection of handcrafted bangles and earrings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

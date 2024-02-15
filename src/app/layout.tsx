import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  style: "normal",
  weight: "800",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Sofia Rönnkvist",
  description: "Portfolio for full-stack developer Sofia Rönnkvist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fraunces.className}>{children}</body>
    </html>
  );
}

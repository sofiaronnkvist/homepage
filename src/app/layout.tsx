import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const poppins = Poppins({
  style: "normal",
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins"
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
    <html className="scroll-smooth" lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}

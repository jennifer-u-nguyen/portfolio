import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start-2p",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jennifer Nguyen | Mechanical Engineer",
  description: "Mechanical Engineer focused on Robotics & Autonomous Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${pressStart2P.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

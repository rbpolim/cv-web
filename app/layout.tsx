import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { CommandMenu } from "@/components/command-menu";
// import { GrainyBackground } from "@/components/grainy-background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigo Polim | Full Stack Developer",
  description:
    "I'm a Full Stack developer based in Brazil. I'm passionate about technology, and I love to learn new things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CommandMenu />
        {/* <GrainyBackground /> */}
        <svg id="texture" className="texture">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".8"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "VidVersea",
  description:
    "Vidversea AI is a smart short-video generator that turns your ideas into engaging videos using artificial intelligence—fast, easy, and creative.",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

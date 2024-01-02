import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";

import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
export const metadata: Metadata = {
  title: "Overflow Dev",
  description:
    "OverflowDev is a vibrant online platform tailored for programming and technology enthusiasts. It functions as a collaborative hub where developers, coders, and tech aficionados can seek and provide assistance, share insights, and engage in discussions encompassing various technical subjects.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <p className="h1-bold">this is hello</p>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

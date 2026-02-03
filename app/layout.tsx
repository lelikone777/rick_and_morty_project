import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "Rick and Morty Characters database",
  icons: {
    icon: "/imgs/Rick_and_Morty.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col justify-between bg-background font-sans text-sm antialiased sm:text-base",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

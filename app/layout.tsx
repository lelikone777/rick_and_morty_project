import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

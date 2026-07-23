import type { Metadata } from "next";
import "./globals.css";
import FontProvider from "@/providers/fonts/Font.provider";
import React from "react";

export const metadata: Metadata = {
  title: "Data Science Resource Center",
  description: "A hub for all resources related to data science at UNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <FontProvider>
      {children}
      </FontProvider>
      </body>
    </html>
  );
}

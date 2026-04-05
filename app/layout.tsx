import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bank Materi - Sains Data UNS",
  description:
    "Bank Materi adalah platform pembelajaran daring yang menyediakan berbagai materi pembelajaran untuk mahasiswa Sains Data UNS. Platform ini dirancang untuk membantu mahasiswa dalam memahami konsep-konsep penting dalam bidang sains data, serta memberikan akses mudah ke sumber daya pembelajaran yang berkualitas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <section className="flex w-screen justify-center h-screen">
          <div className="flex-1 md:max-w-130">{children}</div>
        </section>
      </body>
    </html>
  );
}

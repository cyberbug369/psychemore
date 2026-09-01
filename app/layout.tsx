
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Psychemore — Think Smarter. Grow Further.",
  description:
    "Psychemore helps you learn smarter, build your career, and grow further.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-zinc-950">
        <Navbar />

        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />

        {children}
      </body>
    </html>
  );
}



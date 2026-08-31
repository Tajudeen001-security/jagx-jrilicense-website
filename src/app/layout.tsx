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
  title: "JagX & JRILICENSE | Future of AI, Chips, Cars & Secure Social",
  description:
    "JagX & JRILICENSE — Building the most advanced AI, JagX Connect (Africa's most secure social platform), future chips, next-gen cars, mobile devices and frontier technology. Created by JagX & JRILICENSE.",
  keywords: [
    "JagX",
    "JRILICENSE",
    "JagX AI",
    "JagX Connect",
    "secure social media Africa",
    "future chips",
    "AI company",
    "next-gen cars",
    "mobile devices",
  ],
  authors: [{ name: "JagX & JRILICENSE" }],
  openGraph: {
    title: "JagX & JRILICENSE | Future of Advanced Technology",
    description:
      "Our AI • JagX Connect • Future Chips • Cars • Mobile Devices • The most secured social platform Africa & the world will have.",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-50">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Crimson_Text } from "next/font/google";
import Sidebar from "@/components/Sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Charles Javelona",
  description: "Personal site of Charles Javelona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased ${crimson.className}`}>
      <body className="min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row gap-16 sm:gap-32">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Merel Vandekerkhove",
  description: "A showcase of projects by Merel Vandekerkhove",
  keywords: [
    "portfolio",
    "Merel Vandekerkhove",
    "projects",
    "architecture",
    "interior design",
    "3D modeling",
    "design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="absolute -z-10 min-h-screen w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:10px_10px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

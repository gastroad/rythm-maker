import "./globals.css"
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"


import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Mini Game Maker",
  description: "Generate And Play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          background: '240 10% 3.9%'
        }}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >{children}</body>
    </html>
  );
}

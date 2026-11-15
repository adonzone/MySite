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
  title: "Adonai Afewerki (@adonzone) — Systems, Robotics & Edge AI",
  description:
    "Personal engineering portfolio of Adonai Afewerki. Systems programming, competitive robotics software, Linux deployment, and edge AI infrastructure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090D16] text-slate-100 selection:bg-cyan-500/25">
        {children}
      </body>
    </html>
  );
}

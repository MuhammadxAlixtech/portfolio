import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Muhammad Ali | Software Engineer",
  description: "Competitive Programmer | AI/ML Researcher | Full Stack Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "Muhammad Ali",
  description: "Competitive Programmer | AI-ML | Blockchain Enthusiast",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#EEEFE0] text-gray-900">
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow p-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

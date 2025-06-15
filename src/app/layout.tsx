"use clinet";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Basic/footer";
import Navbar from "@/components/Basic/TopNavbar";
import CategoriesBar from "@/components/Basic/CategoriesBar";

export const metadata: Metadata = {
  title: "香水電商",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex flex-col">
          <Navbar />
          <CategoriesBar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

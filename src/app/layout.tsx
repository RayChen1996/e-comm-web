"use clinet";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import queryClient from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
const inter = Inter({ subsets: ["latin"] });

import Footer from "@/components/Basic/footer";
import Navbar from "@/components/Basic/TopNavbar";

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
        <div className="mx-auto flex h-screen flex-col">
          <Navbar />
          <div className="h-screen flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

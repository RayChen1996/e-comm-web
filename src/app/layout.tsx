"use clinet";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { ReduxProvider } from "@/provider/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });
import { store } from "@/store/index";
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
    <ReduxProvider>
      <html lang="en">
        <Navbar />
        <body className={inter.className}>
          <div className=" h-screen">{children}</div>
        </body>
        <Footer />
      </html>
    </ReduxProvider>
  );
}

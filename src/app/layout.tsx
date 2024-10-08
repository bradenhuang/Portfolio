import type { Metadata } from "next";
import { Inter } from "next/font/google";
import navbar from "./components/Navbar";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Braden Huang",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

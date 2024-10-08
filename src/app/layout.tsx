import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Infobar from "./infobar";
import Page from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=' bg-gradient-to-b from-cyan-400 to-white dark:to-slate-900 h-screen'>
        <Infobar/>
       <div className="sticky top-10 z-50"><Navbar/></div> 
        <Page/></body>
    </html>
  );
}

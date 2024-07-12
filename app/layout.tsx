import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css"
import Navbar from "./navbar/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-One Solution",
  description: "M-One Solution Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

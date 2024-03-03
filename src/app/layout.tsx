import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <Navbar/>
        <main className="h-screen p-16">
          {children}
        </main>
      </body>
    </html>
  );
}

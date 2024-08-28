import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoSub",
  description: "Generate your subtitle automatically",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}flex min-h-screen flex-col items-center justify-between p-10 bg-white`}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

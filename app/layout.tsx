import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import NavBar from "./NavBar";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"], weight: ["400", "900"] });

export const metadata: Metadata = {
  title: "Dakshina Tharindu",
  description: "Electronic Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>
        <NavBar />
        <main className="p-5">{children}</main>
      </body>
      <GoogleAnalytics gaId="G-X6D5LQ4S16" />
    </html>
  );
}

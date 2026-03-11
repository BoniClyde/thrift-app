import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BANK_NAME } from "@/config/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BANK_NAME} - Your New Favorite Bank`,
  description: `${BANK_NAME} - Your New Favorite Bank; credit cards, mortgages, commercial banking, auto loans, investing & retirement planning, checking and business banking.`,
};

import CustomCursor from "@/components/layout/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${onest.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

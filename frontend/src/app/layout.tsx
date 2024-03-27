import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: "Frag Nikogenia",
  description: "Online Latein-Deutsch Wörterbuch",
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${roboto_mono.variable}
      font-sans bg-background text-text p-8 md:p-16`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

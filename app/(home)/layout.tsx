"use client"
import "public/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import { Analytics } from '@vercel/analytics/react';
import { Noto_Sans } from '@next/font/google';

const noto_sans = Noto_Sans({
  weight: ['300','400','500'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${noto_sans.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900 font-myfont subpixel-antialiased">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

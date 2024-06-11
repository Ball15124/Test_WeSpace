import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import "./globals.css";
import favicon from './favicon.ico';

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "WE Space | Live a meaningful life |",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faviconUrl = favicon.src;
  return (
    <html lang="en">
      <link rel="icon" href={faviconUrl} />
      <body className={kanit.className}>{children}</body>
    </html>
  );
}

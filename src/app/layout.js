import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hello world!",
  description: "Simple hosting test for password protected website.",
  openGraph: {
    title: "Hello World! My name is An",
    description: "Look at my message to the world.",
    url: 'https://main.d3tqd4h05q91nm.amplifyapp.com/',
    type: 'website',
    images: [
      {
        width: 1200,
        height: 900,
        alt: 'Pie picture'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

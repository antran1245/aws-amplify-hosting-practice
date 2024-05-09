import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hello world!",
  description: "Simple hosting test for password protected website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Hello World! My name is An" />
        <meta property="og:description" content="Look at my message to the world." />
        <meta property="og:url" content="https://main.d3tqd4h05q91nm.amplifyapp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/opengraph-image.jpeg" />
        <meta property="og:image:alt" content="Pie Picture" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

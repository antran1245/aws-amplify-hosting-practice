import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://main.d3tqd4h05q91nm.amplifyapp.com/'),
  title: "Hello world!",
  description: "Simple hosting test for password protected website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

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
        url: "https://images.unsplash.com/photo-1584468032442-d22740512124?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

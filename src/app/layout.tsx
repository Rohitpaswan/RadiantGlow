
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ReduxProvider } from "@/components/ReduxProvider";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <title>RadiantGlow</title>
        <meta name="description" content="My Next.js App Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} `}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}


import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ReduxProvider } from "@/components/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

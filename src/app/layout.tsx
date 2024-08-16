import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@styles/globals.css";
import Navbar from "@components/Navbar/Navbar";

import { LanguageProvider } from "@contexts/LanguageContext";
import { ThemeProvider } from "@contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LanguageProvider>
          <body className={inter.className}>
            <Navbar />
            <main>{children}</main>
          </body>
        </LanguageProvider>
      </ThemeProvider>
    </html>
  );
}

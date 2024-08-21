import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@styles/globals.css";
import Navbar from "@components/Navbar/Navbar";

import { LanguageProvider } from "@contexts/LanguageContext";
import { ThemeProvider } from "@contexts/ThemeContext";
import InvisibleBox from "@components/ui/invisible-box";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@components/Footer";

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
      <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <body className={inter.className}>
              <Navbar />
              <InvisibleBox className="h-[150px] w-full" />
              <main>{children}</main>
              <Footer/>
            </body>
          </LanguageProvider>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}

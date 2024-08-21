import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@styles/globals.css";

import { LanguageProvider } from "@contexts/LanguageContext";
import { ThemeProvider } from "@contexts/ThemeContext";
import InvisibleBox from "@components/ui/invisible-box";
import { ClerkProvider } from "@clerk/nextjs";

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
              <main>{children}</main>
            </body>
          </LanguageProvider>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}

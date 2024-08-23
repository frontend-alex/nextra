"use client";

import { Inter } from "next/font/google";

import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@contexts/ThemeContext";
import { LanguageProvider } from "@contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

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
            <ToastContainer
              position="bottom-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
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

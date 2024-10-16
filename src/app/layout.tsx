import type { Metadata } from "next";
import { Suspense } from "react";

import Navbar from "@/components/navbar";

import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next Template",
  description: "Starter template for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="h-screen w-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow overflow-auto bg-[url(/light-bg.svg)] bg-cover dark:bg-[url(/dark-bg.svg)]">
            <Suspense>{children}</Suspense>
          </main>
        </Providers>
      </body>
    </html>
  );
}

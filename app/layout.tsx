import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Anas Khan — Backend Engineer",
  description:
    "Associate Software Engineer specialising in Node.js, PostgreSQL, REST APIs, and scalable backend systems. Based in Karachi, Pakistan.",
  keywords: ["backend engineer", "Node.js", "PostgreSQL", "REST API", "Karachi"],
  openGraph: {
    title: "Muhammad Anas Khan — Backend Engineer",
    description: "Building scalable APIs and backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-background text-slate-200 font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-background font-mono text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0e1a] text-slate-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

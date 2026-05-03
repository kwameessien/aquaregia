import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqua Regia",
  description: "Aqua Regia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

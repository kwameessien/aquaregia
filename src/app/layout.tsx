import type { Metadata } from "next";
import "./globals.css";

const description =
  "RITUALS is a permanent document and a body of work dedicated to independent image-making — sites of lingering. Published by Aqua Regia, 2026.";

export const metadata: Metadata = {
  title: "Aqua Regia",
  description,
  openGraph: {
    title: "Aqua Regia",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

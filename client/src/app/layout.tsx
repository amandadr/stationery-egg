import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Egg. Stationery",
  description: "A placeholder for Weirdly Impressed Stationery Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = metadata.title || ""; // Ensure title is not null
  const description = metadata.description || ""; // Ensure description is not null
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
        <title>{`${title}`}</title>
        <meta name="description" content={description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Music Player",
  description: "Music Player in Next js + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-teal-300 to-blue-200 min-h-screen">
        <main className="px-4 pt-10">{children}</main>
      </body>
    </html>
  );
}

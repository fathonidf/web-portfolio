import type { Metadata } from "next";
import '../ui/globals.css';

export const metadata: Metadata = {
  title: "Daffa Fathoni",
  description: "A Website Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

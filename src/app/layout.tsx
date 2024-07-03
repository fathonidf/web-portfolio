import type { Metadata } from "next";
import '../ui/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Daffa Fathoni',
    default: 'Daffa Fathoni',
  },
  description: 'Daffa Mohamad Fathoni\'s Web Portfolio.',
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

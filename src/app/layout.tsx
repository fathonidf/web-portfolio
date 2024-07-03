import type { Metadata } from "next";
import '../ui/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Daffa Fathoni',
    default: 'Daffa Fathoni',
  },
  description: "Daffa Mohamad Fathoni's Web Portfolio.",
  openGraph: {
    title: 'Daffa Fathoni',
    description: "Daffa Mohamad Fathoni's Web Portfolio.",
    url: 'https://yourdomain.com',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 800,
        height: 600,
        alt: 'Daffa Fathoni Portfolio Cover Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daffa Fathoni',
    description: "Daffa Mohamad Fathoni's Web Portfolio.",
    images: ['/opengraph-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can include additional head elements here if needed */}
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import '../ui/globals.css';
import Navbar from "@/ui/navbar/Navbar";
import Footer from "@/ui/footer/Footer";
import { ViewTransitions } from 'next-view-transitions';

export const metadata: Metadata = {
  metadataBase: new URL('https://daffafathoni.com'),
  title: {
    template: '%s | Daffa Fathoni',
    default: 'Daffa Fathoni',
  },
  description: "Welcome to Daffa's Web!",
  openGraph: {
    title: 'Daffa Fathoni',
    description: "Welcome to Daffa's Web!",
    url: 'https://daffafathoni.com',
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
    description: "Welcome to Daffa's Web!",
    images: ['/opengraph-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can include additional head elements here if needed */}
      </head>
      <body>
        <div className="flex flex-col min-h-screen mx-auto sm:px-10 px-5">
          <Navbar />
          <div className="flex flex-col items-center justify-center flex-grow max-w-5xl mx-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
    </ViewTransitions>
  );
}

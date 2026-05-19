
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Aura Jewels | Fine Minimalist Luxury',
  description: 'Curated artisanal jewelry for the modern woman. Pearl Earrings, Gold Bracelets, and Diamond Necklaces.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#b19351" />
      </head>
      <body className="font-body selection:bg-primary/20">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

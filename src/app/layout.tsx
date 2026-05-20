import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Suspense } from 'react';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Aura Jewels | Fine Minimalist Luxury',
  description: 'Curated artisanal jewelry for the modern woman. Pearl Earrings, Gold Bracelets, and Diamond Necklaces.',
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
        <meta name="theme-color" content="#B19351" />
      </head>
      <body className="font-body selection:bg-primary/20 antialiased overflow-x-hidden">
        <CartProvider>
          <Suspense fallback={<div className="h-20 bg-white" />}>
            <Header />
          </Suspense>
          
          <main className="min-h-[70vh]">
            {children}
          </main>
          
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}

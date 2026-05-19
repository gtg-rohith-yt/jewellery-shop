
"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Lock, UserCheck, EyeOff, ShieldAlert } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header showSearch={false} />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-headline font-bold italic">Privacy Policy</h1>
            <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Your trust is our most precious asset</p>
          </div>

          <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl space-y-12">
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-headline font-bold italic">Data Usage</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Customer details such as your name, phone number, and address are collected and used exclusively for the purpose of order processing, fulfillment, and delivery. We believe in keeping your experience focused on the beauty of our jewellery.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-headline font-bold italic">Confidentiality</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Your phone number and physical address are kept strictly private within our internal order management system. We employ industry-standard security measures to protect this sensitive information from unauthorized access.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <EyeOff className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-headline font-bold italic">No Third-Party Sharing</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                We respect your privacy deeply. Customer information is never sold, traded, or shared with third-party marketing firms. The only external parties who see your address are our trusted logistics partners who handle the actual delivery.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-headline font-bold italic">Your Consent</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light italic">
                By placing an order on our platform, you consent to the collection and use of information in accordance with this policy. We will always update this page if any significant changes are made to our data handling practices.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

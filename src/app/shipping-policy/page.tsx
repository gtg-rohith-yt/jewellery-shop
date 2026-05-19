
"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Truck, Package, Clock, ShieldCheck } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header showSearch={false} />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-headline font-bold italic">Shipping Policy</h1>
            <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">How we deliver your treasures</p>
          </div>

          <div className="space-y-12">
            <section className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-headline font-bold italic">Order Processing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every piece at Aura Jewels is handled with care. Orders are typically processed and prepared for shipping within 2-3 business days. During peak seasons or sales, this might take slightly longer.
                </p>
              </div>
            </section>

            <section className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-headline font-bold italic">Delivery Timelines</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Once shipped, delivery usually takes 2-3 business days depending on your location. We partner with premium logistics providers to ensure your jewellery reaches you safely and promptly.
                </p>
              </div>
            </section>

            <section className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-headline font-bold italic">Safe Packaging</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our artisanal products are packed using high-quality luxury materials designed to prevent damage during transit. Each item undergoes a final quality check before being placed in our signature luxury boxes.
                </p>
              </div>
            </section>

            <section className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-headline font-bold italic">Customer Responsibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To ensure successful delivery, customers must provide a complete and correct delivery address along with an active phone number. We are not responsible for delays caused by incorrect information.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

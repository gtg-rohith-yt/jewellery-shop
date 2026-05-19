
import { Truck, Package, Clock, ShieldCheck } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-24 space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">Logistics</h3>
            <h1 className="text-5xl md:text-7xl font-headline font-bold italic">Shipping Protocol</h1>
            <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">The journey of your handcrafted masterpiece</p>
          </div>

          <div className="grid gap-16">
            <section className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                <Clock className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold italic">Preparation & Curation</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  Every piece at Aura Jewels undergoes a final meticulous inspection before dispatch. Orders are typically processed and prepared for shipping within 1-2 business days to ensure perfection.
                </p>
              </div>
            </section>

            <section className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                <Truck className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold italic">Transit Excellence</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  We partner with premium global logistics providers. Domestic deliveries usually arrive within 5-7 business days, while international shipping timelines vary by destination.
                </p>
              </div>
            </section>

            <section className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                <Package className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold italic">Secure Packaging</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  Your jewellery is encased in our signature tamper-proof, high-grade luxury boxes designed for safe transit. Our packaging is not only secure but also serves as a beautiful keepsake.
                </p>
              </div>
            </section>

            <section className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                <ShieldCheck className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold italic">Delivery Assurance</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light italic">
                  To ensure successful arrival, please provide a comprehensive address and an active phone number. Our carriers will coordinate with you for a smooth doorstep delivery.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

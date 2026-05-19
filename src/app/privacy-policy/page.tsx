
import { Lock, UserCheck, EyeOff, ShieldAlert } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-24 space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">Confidentiality</h3>
            <h1 className="text-5xl md:text-7xl font-headline font-bold italic">Privacy Ethos</h1>
            <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Your privacy is as rare as our gemstones</p>
          </div>

          <div className="bg-secondary/20 p-12 md:p-20 rounded-[3rem] space-y-16 luxury-shadow">
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold italic">Data Integrity</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                We collect your name, phone number, and address strictly for artisanal fulfillment. Every piece of data shared with us is treated with the same reverence as the materials we use in our studio.
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold italic">Internal Security</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                Our internal order management is encrypted and inaccessible to unauthorized entities. We use industry-standard protocols to ensure that your private details remain just that—private.
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <EyeOff className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold italic">Absolute Exclusivity</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                Aura Jewels has a zero-tolerance policy for third-party data trading. Your information is never sold or shared for marketing. The only external partners who see your details are our logistics couriers.
              </p>
            </section>

            <section className="pt-10 border-t border-primary/10 space-y-6">
              <div className="flex items-center gap-4">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-headline font-bold italic">Client Consent</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed font-light italic opacity-80">
                By engaging with our platform and placing an order, you acknowledge and agree to our data handling practices. We remain committed to transparency and will notify you of any changes to this ethos.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

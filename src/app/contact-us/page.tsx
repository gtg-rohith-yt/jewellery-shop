"use client";

import { BUSINESS_DETAILS } from '@/data/business';
import { MessageCircle, Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactUs() {
  const faqs = [
    {
      q: "How can I track my order?",
      a: "Once your order is shipped, you will receive a tracking link via WhatsApp. You can also reach out to our support team for live updates."
    },
    {
      q: "Do you offer customization?",
      a: "Yes, we specialize in bespoke handmade pieces. Please contact us on WhatsApp for a personalized consultation with our master artisans."
    },
    {
      q: "What is your return policy?",
      a: "Due to the artisanal nature of our products, we only accept returns for items damaged during transit with a valid unboxing video."
    },
    {
      q: "Is shipping really complimentary?",
      a: `Yes, we offer free shipping on all orders above ₹${BUSINESS_DETAILS.freeShippingThreshold}. For orders below this, a minimal fee applies.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Contact Hero */}
        <section className="bg-secondary/30 py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center space-y-4 mb-16 md:mb-24">
              <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">Concierge</h3>
              <h1 className="text-4xl md:text-7xl font-headline font-bold italic">At Your Service</h1>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold max-w-xs mx-auto leading-loose">Elevating your luxury experience with dedicated support</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] luxury-shadow space-y-10">
                <h3 className="text-2xl font-headline font-bold italic">Direct Contact</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Electronic Mail</p>
                      <p className="text-sm font-bold">{BUSINESS_DETAILS.supportEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Boutique Hotline</p>
                      <p className="text-sm font-bold">{BUSINESS_DETAILS.supportPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Global HQ</p>
                      <p className="text-sm font-bold">New Delhi, India (By Appointment)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-1 gap-4">
                  <Button 
                    className="w-full h-16 bg-[#25D366] hover:bg-[#1ebd54] text-white rounded-xl font-bold gap-3 transition-all shadow-lg"
                    onClick={() => window.open(`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}`, '_blank')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="uppercase tracking-[0.2em] text-[10px]">WhatsApp Concierge</span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full h-16 border-primary/20 hover:bg-primary/5 rounded-xl font-bold gap-3 transition-all text-primary"
                    onClick={() => window.open(BUSINESS_DETAILS.instagramLink, '_blank')}
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="uppercase tracking-[0.2em] text-[10px]">Follow Our Journey</span>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="bg-foreground text-white p-8 md:p-12 rounded-[2rem] flex flex-col justify-center space-y-8 h-full">
                  <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-headline font-bold italic">Instant Inquiries</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">Whether it's a sizing query or a bespoke request, our master artisans are ready to assist you in real-time.</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary">Response Window: Mon-Sat | 10AM - 8PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Curiosity</h3>
            <h2 className="text-3xl md:text-4xl font-headline font-bold italic">Essential Knowledge</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none rounded-2xl px-6 md:px-8 bg-secondary/20 overflow-hidden transition-all hover:bg-secondary/40">
                <AccordionTrigger className="hover:no-underline font-headline font-bold italic text-lg py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-sm font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  );
}

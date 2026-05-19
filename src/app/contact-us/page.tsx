
"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/data/business';
import { MessageCircle, Mail, Phone, Instagram, MapPin, ChevronDown } from 'lucide-react';
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
      a: "Once your order is shipped, you will receive a tracking link via WhatsApp or email. You can also reach out to our support team for live updates."
    },
    {
      q: "Do you offer customization?",
      a: "Yes, we specialize in bespoke handmade pieces. Please contact us on WhatsApp with your requirements for a personalized consultation."
    },
    {
      q: "What is your return policy?",
      a: "Due to the artisanal nature of our products, we only accept returns for items damaged during transit. Please share an unboxing video within 24 hours of delivery."
    },
    {
      q: "Is worldwide shipping available?",
      a: "Yes, we ship our luxury pieces worldwide. Shipping costs and delivery timelines vary depending on your country."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header showSearch={false} />
      
      <main className="flex-1">
        {/* Contact Hero */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-headline font-bold italic">Let's Connect</h1>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">We're here to assist your luxury journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl luxury-shadow space-y-8">
                <h3 className="text-xl font-headline font-bold italic">Reach Out Directly</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email Support</p>
                      <p className="text-sm font-medium">{BUSINESS_DETAILS.supportEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Call Us</p>
                      <p className="text-sm font-medium">{BUSINESS_DETAILS.supportPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Boutique Office</p>
                      <p className="text-sm font-medium">Available by Appointment Only</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <Button 
                    className="w-full h-14 bg-[#25D366] hover:bg-[#1ebd54] text-white rounded-xl font-bold gap-3 transition-all"
                    onClick={() => window.open(`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}`, '_blank')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="uppercase tracking-widest text-[10px]">Chat on WhatsApp</span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full h-14 border-primary/20 hover:bg-primary/5 rounded-xl font-bold gap-3 transition-all text-primary"
                    onClick={() => window.open(BUSINESS_DETAILS.instagramLink, '_blank')}
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="uppercase tracking-widest text-[10px]">Follow on Instagram</span>
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl luxury-shadow flex flex-col justify-center text-center space-y-6">
                <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold italic">Quick Inquiry</h3>
                  <p className="text-sm text-muted-foreground">Have a quick question about a specific piece or shipping? Our WhatsApp concierge is online from 10 AM to 8 PM IST.</p>
                </div>
                <div className="pt-4">
                   <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Response Time: &lt; 30 Mins</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 space-y-2">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-primary text-center">Questions?</h3>
            <h2 className="text-3xl font-headline font-bold italic text-center">Frequently Asked</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 bg-white overflow-hidden luxury-shadow border-none">
                <AccordionTrigger className="hover:no-underline font-headline font-bold italic text-lg py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <Footer />
    </div>
  );
}

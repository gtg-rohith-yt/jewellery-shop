
"use client";

import { BUSINESS_DETAILS } from '@/data/business';
import { CATEGORIES } from '@/data/categories';
import Link from 'next/link';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="font-headline text-4xl font-bold italic tracking-tighter text-primary">
                {BUSINESS_DETAILS.businessName}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-sm">
                Redefining modern luxury through artisanal craftsmanship and timeless design. Every piece tells a story of elegance and precision.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={BUSINESS_DETAILS.instagramLink} 
                target="_blank" 
                rel="noreferrer" 
                className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href={BUSINESS_DETAILS.facebookLink} 
                target="_blank" 
                rel="noreferrer" 
                className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}`} 
                target="_blank" 
                rel="noreferrer" 
                className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-foreground border-b pb-2 inline-block">Boutique</h4>
            <ul className="space-y-4 text-[11px] text-muted-foreground font-bold uppercase tracking-[0.15em]">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-foreground border-b pb-2 inline-block">Collections</h4>
            <ul className="space-y-4 text-[11px] text-muted-foreground font-bold uppercase tracking-[0.15em]">
              {CATEGORIES.slice(1, 6).map(cat => (
                <li key={cat.name}>
                  <Link href={`/?cat=${cat.name}`} className="hover:text-primary transition-colors">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-foreground border-b pb-2 inline-block">Concierge</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs">
                  <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  <span className="text-muted-foreground font-medium">{BUSINESS_DETAILS.supportEmail}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  <span className="text-muted-foreground font-medium">{BUSINESS_DETAILS.supportPhone}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  <span className="text-muted-foreground font-medium">Flagship Studio, New Delhi</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-2xl space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Insider Access</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Subscribe for preview access to new collections and seasonal offers.</p>
              <div className="flex border-b border-foreground/10 focus-within:border-primary transition-all pb-1 group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-transparent border-none outline-none text-xs w-full font-medium py-2"
                />
                <button className="p-2 hover:text-primary transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-bold">
          <p>© 2024 {BUSINESS_DETAILS.businessName}. Crafted with Precision.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="hover:text-primary">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-primary">Privacy</Link>
            <Link href="/shipping-policy" className="hover:text-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CartItem } from "@/lib/types";
import { Copy, QrCode, MessageCircle, Info, ShieldCheck, MapPin, Phone, User, CreditCard } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BUSINESS_DETAILS } from "@/data/business";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  total: number;
  items: CartItem[];
}

export function CheckoutModal({ open, onOpenChange, total, items }: CheckoutModalProps) {
  const { upiId, upiQr, whatsappNumber } = BUSINESS_DETAILS;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    city: '',
    notes: ''
  });

  const isFormValid = 
    formData.name.trim() !== '' && 
    formData.phone.trim().length >= 10 && 
    formData.address.trim() !== '' && 
    formData.pincode.trim().length >= 6 &&
    formData.city.trim() !== '';

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      title: "UPI ID Copied!",
      description: "You can now paste it in your payment app.",
    });
  };

  const generateWhatsAppOrder = () => {
    const timestamp = new Date().toLocaleString('en-IN', { 
      dateStyle: 'full', 
      timeStyle: 'short' 
    });
    
    const itemStrings = items.map(i => `• ${i.name}\n  Qty: ${i.quantity} × ₹${i.price.toLocaleString()} = ₹${(i.price * i.quantity).toLocaleString()}`).join('\n\n');
    
    const message = `✨ *ORDER REQUEST - ${BUSINESS_DETAILS.businessName.toUpperCase()}* ✨
-------------------------------------------
📅 *Order Date:* ${timestamp}

👤 *CUSTOMER DETAILS:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Address: ${formData.address}
• City: ${formData.city}
• Pincode: ${formData.pincode}
${formData.notes ? `• Notes: ${formData.notes}\n` : ''}

🛍️ *ORDER SUMMARY:*
${itemStrings}

💳 *PAYMENT INFO:*
• Total Amount: *₹${total.toLocaleString()}*
• Payment Method: *UPI Transfer*
• UPI ID: ${upiId}

-------------------------------------------
✅ *Next Step:* 
I have initiated the payment. I am sharing this message along with the transaction screenshot for confirmation. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden border-none rounded-2xl luxury-shadow">
        <DialogHeader className="p-8 pb-4 bg-secondary/30">
          <div className="flex items-center gap-2 text-primary mb-2">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure Checkout</span>
          </div>
          <DialogTitle className="font-headline text-3xl font-bold italic">Finalize Your Order</DialogTitle>
          <DialogDescription className="text-sm font-medium">
            Complete the payment and share delivery details to confirm your artisanal pieces.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh] px-8 pb-8">
          <div className="space-y-8 py-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">1</div>
                <h4 className="font-headline text-lg font-bold italic flex items-center gap-2">
                  Payment Details
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </h4>
              </div>
              
              <div className="bg-secondary/50 p-5 rounded-2xl border border-primary/10 space-y-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-xl border luxury-shadow group transition-all hover:border-primary/30">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Transfer to UPI ID</p>
                    <p className="text-sm font-mono font-bold text-foreground">{upiId}</p>
                  </div>
                  <Button size="icon" variant="ghost" className="h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors" onClick={copyUpi}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-6 py-2">
                  <div className="relative h-28 w-28 bg-white p-2 rounded-xl border luxury-shadow flex-shrink-0">
                    <Image 
                      src={upiQr} 
                      alt="UPI QR Code" 
                      width={200} 
                      height={200}
                      className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-[1px] rounded-xl pointer-events-none">
                       <QrCode className="h-6 w-6 text-primary/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Scan the QR code with any UPI app to pay
                      <span className="font-bold text-foreground"> ₹{total.toLocaleString()}</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-foreground/5" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">2</div>
                <h4 className="font-headline text-lg font-bold italic flex items-center gap-2">
                  Delivery Destination
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </h4>
              </div>
              
              <div className="grid gap-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Full Name *" 
                    className="pl-12 h-14 rounded-xl border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/20"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="tel" 
                    placeholder="Phone Number (10 Digits) *" 
                    className="pl-12 h-14 rounded-xl border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                  />
                </div>

                <div className="space-y-1.5">
                  <Textarea 
                    placeholder="Complete Delivery Address *" 
                    className="min-h-[100px] p-4 rounded-xl border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/20 resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="City *" 
                    className="h-14 rounded-xl border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/20 px-5"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                  <Input 
                    placeholder="Pincode *" 
                    className="h-14 rounded-xl border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/20 px-5"
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value.replace(/\D/g, '').slice(0, 6)})}
                  />
                </div>

                <Input 
                  placeholder="Order Notes (Optional)" 
                  className="h-14 rounded-xl border-none bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary/20 px-5"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>
            </div>

            <div className="pt-4 space-y-4">
              {!isFormValid && (
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-destructive/80 bg-destructive/5 p-3 rounded-lg border border-destructive/10">
                  <Info className="h-3 w-3" /> 
                  Complete required fields to proceed
                </div>
              )}
              
              <Button 
                className="w-full h-16 bg-[#25D366] hover:bg-[#1ebd54] text-white rounded-xl font-bold gap-3 disabled:opacity-50 luxury-shadow transition-all group active:scale-[0.98]"
                onClick={generateWhatsAppOrder}
                disabled={!isFormValid}
              >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="uppercase tracking-widest text-xs">Confirm via WhatsApp</span>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}


"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CartItem } from "@/lib/types";
import { Copy, QrCode, MessageCircle, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  total: number;
  items: CartItem[];
}

export function CheckoutModal({ open, onOpenChange, total, items }: CheckoutModalProps) {
  const upiId = 'kaverirohith09@okicici';
  const whatsappNumber = '919043253446';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    city: '',
    notes: ''
  });

  const isFormValid = formData.name.trim() !== '' && 
                      formData.phone.trim() !== '' && 
                      formData.address.trim() !== '' && 
                      formData.pincode.trim() !== '';

  const copyUpi = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      title: "UPI ID Copied!",
      description: "You can now paste it in your payment app.",
    });
  };

  const generateWhatsAppOrder = () => {
    const itemStrings = items.map(i => `• ${i.name} (x${i.quantity}) - ₹${i.price * i.quantity}`).join('\n');
    
    const message = `Hello Aura Jewels! I'd like to place an order.

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
Pincode: ${formData.pincode}
${formData.notes ? `Notes: ${formData.notes}\n` : ''}

*Order Summary:*
${itemStrings}

*Total Amount:* ₹${total}

*Payment Status:*
I've made the payment via UPI to ${upiId}. Attached is the screenshot proof.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-headline text-2xl">Checkout</DialogTitle>
          <DialogDescription>
            Complete the payment and provide your delivery details.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[80vh] px-6 pb-6">
          <div className="space-y-6 py-4">
            {/* Step 1: Payment */}
            <div className="bg-muted/50 p-4 rounded-xl border space-y-3">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">1</span>
                Pay via UPI
              </h4>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-primary/20">
                <span className="text-xs font-mono font-bold text-primary">{upiId}</span>
                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={copyUpi}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center py-2">
                <div className="relative h-32 w-32 bg-white p-2 rounded-lg border">
                  <Image 
                    src="https://picsum.photos/seed/qrcode/200/200" 
                    alt="UPI QR Code" 
                    width={200} 
                    height={200}
                    className="rounded"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[1px] rounded pointer-events-none">
                     <QrCode className="h-6 w-6 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Delivery Details */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">2</span>
                Delivery Details
              </h4>
              
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="h-10 rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter 10-digit number" 
                    className="h-10 rounded-lg"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-xs">Full Address *</Label>
                  <Textarea 
                    id="address" 
                    placeholder="House No, Street, Landmark..." 
                    className="min-h-[80px] rounded-lg resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-xs">City</Label>
                    <Input 
                      id="city" 
                      placeholder="City" 
                      className="h-10 rounded-lg"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode" className="text-xs">Pincode *</Label>
                    <Input 
                      id="pincode" 
                      placeholder="600001" 
                      className="h-10 rounded-lg"
                      value={formData.pincode}
                      onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-xs">Order Notes (Optional)</Label>
                  <Input 
                    id="notes" 
                    placeholder="Any special instructions?" 
                    className="h-10 rounded-lg"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              {!isFormValid && (
                <p className="text-[10px] text-destructive mb-3 flex items-center gap-1">
                  <Info className="h-3 w-3" /> Please fill all required fields (*) to continue.
                </p>
              )}
              <Button 
                className="w-full h-12 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full font-bold gap-2 disabled:opacity-50"
                onClick={generateWhatsAppOrder}
                disabled={!isFormValid}
              >
                <MessageCircle className="h-5 w-5" />
                Send Order on WhatsApp
              </Button>
              <p className="text-[10px] text-center mt-3 text-muted-foreground">
                Don't forget to attach your payment screenshot in the WhatsApp chat.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

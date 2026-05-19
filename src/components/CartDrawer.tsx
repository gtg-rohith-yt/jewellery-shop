
"use client";

import { CartItem, Product } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { CheckoutModal } from "./CheckoutModal";
import { useState } from "react";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export function CartDrawer({ open, onOpenChange, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="flex flex-col w-full sm:max-w-md p-0 border-none shadow-2xl">
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="flex items-center gap-3 font-headline text-xl italic">
              <ShoppingBag className="h-5 w-5" />
              Shopping Bag
              <span className="text-xs font-medium text-muted-foreground ml-1">({items.length} items)</span>
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-muted-foreground opacity-30" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-xl italic font-bold">Your bag is empty</h3>
                  <p className="text-xs text-muted-foreground max-w-[200px] mx-auto uppercase tracking-widest font-bold">Discover our latest handcrafted collections.</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => onOpenChange(false)} 
                  className="rounded-none border-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-10 h-12"
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative h-28 w-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col flex-1 justify-between py-1">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-[13px] font-bold tracking-tight line-clamp-2 uppercase leading-tight">{item.name}</h4>
                          <button onClick={() => onRemove(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{item.category}</p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-bold text-foreground font-headline">₹{item.price.toLocaleString()}</span>
                        <div className="flex items-center bg-secondary rounded-full h-8 px-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1.5 hover:text-primary transition-colors disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1.5 hover:text-primary transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-8 border-t bg-secondary/30 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-[11px] uppercase tracking-widest font-bold">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase tracking-widest font-bold">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary">Complimentary</span>
                </div>
                <Separator className="bg-foreground/5" />
                <div className="flex justify-between text-xl font-headline font-bold italic pt-2">
                  <span>Total</span>
                  <span className="text-primary">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full h-14 rounded-none bg-foreground hover:bg-primary text-white font-bold tracking-[0.2em] uppercase text-xs transition-colors shadow-xl"
                  onClick={() => setCheckoutOpen(true)}
                >
                  Proceed to Checkout
                </Button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  <ShieldCheck className="h-3 w-3 text-primary" /> 100% Secure Checkout
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        total={total}
        items={items}
      />
    </>
  );
}

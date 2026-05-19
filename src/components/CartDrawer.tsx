
"use client";

import { CartItem, Product } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
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
        <SheetContent className="flex flex-col w-full sm:max-w-md p-0">
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="flex items-center gap-2 font-headline">
              <ShoppingCart className="h-5 w-5" />
              Your Shopping Bag ({items.length})
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Your bag is empty</h3>
                  <p className="text-sm text-muted-foreground mt-1">Looks like you haven't added anything to your cart yet.</p>
                </div>
                <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-full">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col flex-1 justify-between py-0.5">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                        <button onClick={() => onRemove(item.id)} className="text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-primary">₹{item.price}</span>
                        <div className="flex items-center border rounded-full h-8 px-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-primary transition-colors"
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
            <div className="p-6 border-t bg-muted/30">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary font-headline">₹{total}</span>
                </div>
                <Button 
                  className="w-full h-12 rounded-full bg-accent hover:bg-accent/90 text-white font-headline tracking-wide"
                  onClick={() => setCheckoutOpen(true)}
                >
                  Proceed to Order
                </Button>
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

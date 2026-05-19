
"use client";

import { Product } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";

interface WishlistDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: Product[];
  onAddToCart: (p: Product) => void;
  onRemove: (id: string) => void;
}

export function WishlistDrawer({ open, onOpenChange, items, onAddToCart, onRemove }: WishlistDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-md p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2 font-headline">
            <Heart className="h-5 w-5" />
            Your Wishlist ({items.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Your wishlist is empty</h3>
                <p className="text-sm text-muted-foreground mt-1">Save your favorite handcrafted pieces to find them later.</p>
              </div>
              <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-full">
                Explore Collection
              </Button>
            </div>
          ) : (
            <div className="grid gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 py-0.5">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{item.category}</span>
                      <button onClick={() => onRemove(item.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <h4 className="text-sm font-medium line-clamp-1 mb-1">{item.name}</h4>
                    <span className="text-sm font-bold text-primary mb-3">₹{item.price}</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full text-xs h-8 rounded-full border-accent text-accent hover:bg-accent hover:text-white"
                      onClick={() => onAddToCart(item)}
                    >
                      <ShoppingBag className="h-3 w-3 mr-1.5" />
                      Add to Bag
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

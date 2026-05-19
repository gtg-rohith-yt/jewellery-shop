
"use client";

import { Product } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
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
      <SheetContent className="flex flex-col w-full sm:max-w-md p-0 border-none shadow-2xl">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-3 font-headline text-xl italic">
            <Heart className="h-5 w-5 fill-primary text-primary" />
            Wishlist
            <span className="text-xs font-medium text-muted-foreground ml-1">({items.length} pieces)</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-muted-foreground opacity-30" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-xl italic font-bold">Wishlist is empty</h3>
                <p className="text-xs text-muted-foreground max-w-[200px] mx-auto uppercase tracking-widest font-bold">Save your favorite artisanal pieces for later.</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => onOpenChange(false)} 
                className="rounded-none border-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-10 h-12"
              >
                Discover Collection
              </Button>
            </div>
          ) : (
            <div className="grid gap-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="relative h-32 w-28 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 py-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{item.category}</span>
                      <button onClick={() => onRemove(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <h4 className="text-sm font-bold tracking-tight line-clamp-1 mb-1 uppercase font-headline">{item.name}</h4>
                    <span className="text-sm font-bold text-foreground mb-4 font-headline">₹{item.price.toLocaleString()}</span>
                    
                    <Button 
                      className="w-full bg-foreground text-white hover:bg-primary rounded-none h-10 text-[10px] font-bold uppercase tracking-widest transition-colors gap-2"
                      onClick={() => onAddToCart(item)}
                    >
                      <ShoppingBag className="h-3 w-3" />
                      Add to Bag
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-6 border-t bg-secondary/30">
            <Button 
              variant="link" 
              className="w-full text-xs font-bold uppercase tracking-widest gap-2 group"
              onClick={() => onOpenChange(false)}
            >
              Continue Browsing <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

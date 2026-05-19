
"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import { Heart, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (p: Product) => void;
  isWishlisted: boolean;
}

export function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-white">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          data-ai-hint={product.category}
        />
        
        {/* Badges/Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.price > 5000 && (
            <Badge className="bg-white/90 backdrop-blur-sm text-foreground text-[8px] font-bold uppercase tracking-widest border-none px-2 py-0.5">
              Bestseller
            </Badge>
          )}
          {product.category === 'Earrings' && (
            <Badge className="bg-primary text-white text-[8px] font-bold uppercase tracking-widest border-none px-2 py-0.5">
              New
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist(product)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-all hover:bg-white active:scale-90"
        >
          <Heart
            className={cn("h-4 w-4 transition-colors duration-300", isWishlisted ? "fill-primary text-primary" : "text-foreground/30")}
            strokeWidth={1.5}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            className="w-full bg-foreground text-white hover:bg-primary rounded-none h-11 text-[10px] font-bold uppercase tracking-widest transition-colors shadow-2xl"
            onClick={() => onAddToCart(product)}
          >
            <Plus className="h-3 w-3 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="py-4 px-1 space-y-1.5 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-body">
            {product.category}
          </span>
          <div className="flex items-center justify-center md:justify-end gap-1 text-[10px] text-primary font-bold">
             <Sparkles className="h-3 w-3" /> Handcrafted
          </div>
        </div>
        
        <h3 className="text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors tracking-tight font-headline">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center md:justify-start gap-2 pt-1">
          <span className="text-sm font-bold text-foreground">₹{product.price.toLocaleString()}</span>
          {product.price > 4000 && (
             <span className="text-[10px] text-muted-foreground line-through">₹{(product.price * 1.2).toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}


"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import { Heart, ShoppingBag, Plus } from "lucide-react";
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
    <div className="group relative flex flex-col bg-white overflow-hidden rounded-xl border border-transparent product-card-hover">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={product.category}
        />
        <button
          onClick={() => onToggleWishlist(product)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-all hover:bg-white"
        >
          <Heart
            className={cn("h-5 w-5 transition-colors", isWishlisted ? "fill-secondary text-secondary" : "text-foreground/40")}
            strokeWidth={1.5}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            {product.category}
          </span>
          <span className="text-sm font-headline font-bold text-primary">₹{product.price}</span>
        </div>
        <h3 className="text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-4 flex gap-2">
          <Button
            size="sm"
            className="flex-1 bg-accent hover:bg-accent/90 text-white rounded-full text-xs font-semibold"
            onClick={() => onAddToCart(product)}
          >
            <Plus className="h-3 w-3 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}


"use client";

import { useState, useMemo } from 'react';
import { useStore } from '@/app/store/use-store';
import { Product } from '@/lib/types';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag, Heart, Menu, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Handmade Pearl Drop Earrings', price: 299, category: 'Earrings', image: 'https://picsum.photos/seed/earrings/600/600', description: 'Classic drops with freshwater pearls.' },
  { id: '2', name: 'Textured Golden Cuff Bracelet', price: 399, category: 'Bracelets', image: 'https://picsum.photos/seed/bracelet/600/600', description: '24k gold plated textured finish.' },
  { id: '3', name: 'Raw Emerald Stone Necklace', price: 499, category: 'Necklaces', image: 'https://picsum.photos/seed/necklace/600/600', description: 'Handcrafted with genuine raw emerald.' },
  { id: '4', name: 'Dainty Stackable Ring Set', price: 199, category: 'Rings', image: 'https://picsum.photos/seed/rings/600/600', description: 'Set of 5 minimalist stackable rings.' },
  { id: '5', name: 'Rose Gold Heart Pendant', price: 599, category: 'Necklaces', image: 'https://picsum.photos/seed/pendant/600/600', description: 'Elegant heart-shaped rose gold pendant.' },
  { id: '6', name: 'Minimalist Silver Anklets', price: 349, category: 'Other', image: 'https://picsum.photos/seed/anklet/600/600', description: 'Sterling silver chain anklets.' },
  { id: '7', name: 'Crystal Cluster Studs', price: 249, category: 'Earrings', image: 'https://picsum.photos/seed/studs/600/600', description: 'Shimmering crystal clusters for everyday elegance.' },
  { id: '8', name: 'Chunky Gold Link Chain', price: 699, category: 'Necklaces', image: 'https://picsum.photos/seed/chain/600/600', description: 'Bold gold-filled link chain necklace.' },
];

const CATEGORIES = ['All', 'Earrings', 'Bracelets', 'Necklaces', 'Rings', 'Other'];

export default function Home() {
  const { cart, wishlist, addToCart, removeFromCart, updateQuantity, toggleWishlist, isLoaded } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <header className="sticky-nav">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 -ml-2 text-muted-foreground">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="font-headline text-2xl font-bold tracking-tighter text-primary">Aura</h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search unique handmade pieces..." 
              className="pl-10 rounded-full bg-muted/50 border-none h-10 focus-visible:ring-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <button className="md:hidden p-2 text-muted-foreground">
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setWishlistOpen(true)}
            >
              <Heart className="h-6 w-6" strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <Badge className="absolute top-0 right-0 h-4 min-w-[1rem] flex items-center justify-center p-0 text-[10px] bg-secondary border-none">
                  {wishlist.length}
                </Badge>
              )}
            </button>
            <button 
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
              {cart.length > 0 && (
                <Badge className="absolute top-0 right-0 h-4 min-w-[1rem] flex items-center justify-center p-0 text-[10px] bg-primary border-none">
                  {cart.length}
                </Badge>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-12">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[450px] overflow-hidden bg-primary/5">
          <Image 
            src="https://picsum.photos/seed/hero/1200/600" 
            alt="New Collection" 
            fill 
            priority
            className="object-cover opacity-80"
            data-ai-hint="jewelry model"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
            <div className="container mx-auto px-4 text-white space-y-4">
              <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                New Collection 2024
              </span>
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
                Embrace Your <br /> Golden Hour
              </h2>
              <p className="text-sm md:text-base max-w-md text-white/90">
                Curated handmade jewelry that speaks to the soul. Minimalist luxury for the modern aesthetic.
              </p>
              <Button className="rounded-full bg-white text-primary hover:bg-white/90 px-8 h-12 font-bold shadow-xl">
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="border-b bg-white overflow-x-auto no-scrollbar">
          <div className="container mx-auto px-4 flex items-center justify-start md:justify-center gap-8 h-14 whitespace-nowrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm font-medium transition-all relative py-1 ${
                  selectedCategory === cat 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="container mx-auto px-4 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-headline font-bold">Recommended for You</h2>
              <p className="text-sm text-muted-foreground">Hand-picked selections from our master artisans.</p>
            </div>
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  isWishlisted={wishlist.some(w => w.id === product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-bold text-xl">No results found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="rounded-full">
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold text-primary">Aura</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe in the beauty of handcrafted imperfections. Every piece in our collection is curated to bring out your inner radiance.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">New Arrivals</a></li>
                <li><a href="#" className="hover:text-primary">Best Sellers</a></li>
                <li><a href="#" className="hover:text-primary">Jewelry Care</a></li>
                <li><a href="#" className="hover:text-primary">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Customer Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-primary">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Join Aura</h4>
              <p className="text-xs text-muted-foreground mb-4">Subscribe for exclusive offers and new arrivals.</p>
              <div className="flex gap-2">
                <Input placeholder="Email Address" className="rounded-full bg-white h-10" />
                <Button className="rounded-full h-10 px-6">Join</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2024 Aura Jewels. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Drawers */}
      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      <WishlistDrawer
        open={wishlistOpen}
        onOpenChange={setWishlistOpen}
        items={wishlist}
        onAddToCart={addToCart}
        onRemove={(id) => toggleWishlist({ id } as Product)}
      />
    </div>
  );
}


"use client";

import { useState, useMemo, useEffect } from 'react';
import { useStore } from '@/app/store/use-store';
import { Product } from '@/lib/types';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag, Heart, Menu, Filter, ArrowRight, Sparkles, Star, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Handmade Pearl Drop Earrings', price: 2499, category: 'Earrings', image: 'https://picsum.photos/seed/earrings/800/1000', description: 'Classic drops with freshwater pearls.' },
  { id: '2', name: '24k Textured Golden Cuff', price: 4999, category: 'Bracelets', image: 'https://picsum.photos/seed/bracelet/800/1000', description: '24k gold plated textured finish.' },
  { id: '3', name: 'Raw Emerald Stone Necklace', price: 8999, category: 'Necklaces', image: 'https://picsum.photos/seed/necklace/800/1000', description: 'Handcrafted with genuine raw emerald.' },
  { id: '4', name: 'Dainty Stackable Ring Set', price: 1899, category: 'Rings', image: 'https://picsum.photos/seed/rings/800/1000', description: 'Set of 5 minimalist stackable rings.' },
  { id: '5', name: 'Rose Gold Heart Pendant', price: 3499, category: 'Necklaces', image: 'https://picsum.photos/seed/pendant/800/1000', description: 'Elegant heart-shaped rose gold pendant.' },
  { id: '6', name: 'Minimalist Silver Anklets', price: 1299, category: 'Other', image: 'https://picsum.photos/seed/anklet/800/1000', description: 'Sterling silver chain anklets.' },
  { id: '7', name: 'Crystal Cluster Studs', price: 1599, category: 'Earrings', image: 'https://picsum.photos/seed/studs/800/1000', description: 'Shimmering crystal clusters for everyday elegance.' },
  { id: '8', name: 'Chunky Gold Link Chain', price: 5499, category: 'Necklaces', image: 'https://picsum.photos/seed/chain/800/1000', description: 'Bold gold-filled link chain necklace.' },
];

const CATEGORIES = [
  { name: 'All', icon: '✨' },
  { name: 'Earrings', icon: '👂' },
  { name: 'Bracelets', icon: '💍' },
  { name: 'Necklaces', icon: '📿' },
  { name: 'Rings', icon: '💍' },
  { name: 'Other', icon: '🎁' }
];

export default function Home() {
  const { cart, wishlist, addToCart, toggleWishlist, isLoaded, updateQuantity, removeFromCart } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Promo Bar */}
      <div className="bg-primary text-white py-2 text-center text-[10px] md:text-xs font-medium tracking-widest uppercase">
        Complimentary Shipping on all Orders over ₹5000 • Easy Returns
      </div>

      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b shadow-sm py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 -ml-2 text-foreground">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tighter text-foreground italic">Aura</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {['Collections', 'Gifts', 'Bespoke', 'About'].map((item) => (
              <a key={item} href="#" className="text-xs font-semibold uppercase tracking-widest hover:text-primary transition-colors">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-4">
            <div className="hidden md:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search collection..." 
                className="pl-10 rounded-full bg-secondary border-none w-48 lg:w-64 h-9 text-xs focus-visible:ring-1 focus-visible:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              className="relative p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setWishlistOpen(true)}
            >
              <Heart className="h-5 w-5" strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 h-3.5 w-3.5 flex items-center justify-center text-[8px] bg-primary text-white rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button 
              className="relative p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 h-3.5 w-3.5 flex items-center justify-center text-[8px] bg-foreground text-white rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/hero-luxury/1920/1080" 
            alt="Artisanal Collection" 
            fill 
            priority
            className="object-cover"
            data-ai-hint="luxury jewelry"
          />
          <div className="absolute inset-0 hero-gradient flex items-center">
            <div className="container mx-auto px-4 text-white">
              <div className="max-w-xl space-y-6 animate-slide-up">
                <Badge className="bg-white/20 backdrop-blur-md text-white border-none px-4 py-1 text-[10px] tracking-widest uppercase">The Winter Edit 2024</Badge>
                <h2 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] italic">
                  Poetry in <br /> Precious Metals
                </h2>
                <p className="text-base md:text-lg text-white/80 font-light max-w-sm">
                  Exquisite handcrafted pieces designed for the modern muse. Minimalist luxury, maximalist impact.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button className="rounded-none bg-white text-foreground hover:bg-white/90 px-8 h-14 font-bold tracking-widest uppercase text-xs">
                    Shop Collection
                  </Button>
                  <Button variant="outline" className="rounded-none border-white text-white hover:bg-white/10 px-8 h-14 font-bold tracking-widest uppercase text-xs">
                    Discover Bespoke
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="bg-secondary/50 border-y py-8">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Global Delivery', desc: 'Secure worldwide shipping' },
              { icon: ShieldCheck, title: 'Certified Quality', desc: 'Authenticity guaranteed' },
              { icon: Star, title: 'Artisan Crafted', desc: 'Handmade with precision' },
              { icon: Sparkles, title: 'Luxury Packing', desc: 'Exquisite gifting experience' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <feature.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">{feature.title}</h4>
                <p className="text-[10px] text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category Selection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-2">
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-primary">Explore Categories</h3>
              <h2 className="text-3xl md:text-4xl font-headline font-bold italic">Curated Collections</h2>
            </div>
            
            <div className="flex items-center justify-start md:justify-center gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-4">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex flex-col items-center gap-3 min-w-[80px] group transition-all`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                    selectedCategory === cat.name 
                    ? 'bg-primary text-white scale-110 shadow-lg' 
                    : 'bg-secondary text-foreground group-hover:bg-primary/10'
                  }`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    selectedCategory === cat.name ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-end justify-between mb-10">
            <div className="space-y-2">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Trending Now</h3>
              <h2 className="text-3xl font-headline font-bold italic">Most Desired Pieces</h2>
            </div>
            <Button variant="link" className="text-xs font-bold uppercase tracking-widest gap-2 group">
              View All <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
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
            <div className="py-20 text-center space-y-6 bg-secondary/30 rounded-3xl">
              <Search className="h-12 w-12 text-muted-foreground mx-auto opacity-20" />
              <div className="space-y-2">
                <h3 className="font-bold text-xl italic">No treasures found</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">Adjust your search to find the perfect artisanal piece.</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
                className="rounded-full px-8 text-[10px] font-bold uppercase tracking-widest"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>

        {/* Brand Story / Banner */}
        <section className="py-20 bg-foreground text-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl luxury-shadow">
              <Image 
                src="https://picsum.photos/seed/story/800/1000" 
                alt="Our Heritage" 
                fill 
                className="object-cover"
                data-ai-hint="jewelry workshop"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-primary">Our Heritage</h3>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight italic">
                Crafting Legacies, <br /> One Sparkle at a Time
              </h2>
              <p className="text-white/70 leading-relaxed font-light text-lg">
                At Aura, we believe that jewelry is more than just an accessory—it's an extension of your soul. Each piece is meticulously handcrafted by master artisans using ethically sourced materials, ensuring that your sparkle is as responsible as it is radiant.
              </p>
              <div className="pt-4">
                <Button className="rounded-none bg-primary text-white hover:bg-primary/90 px-10 h-14 font-bold tracking-widest uppercase text-xs">
                  Read Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Luxury Footer */}
      <footer className="bg-white border-t pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4 space-y-6">
              <h3 className="font-headline text-4xl font-bold italic tracking-tighter">Aura</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Redefining modern luxury through artisanal craftsmanship and timeless design. Join our journey toward elegance.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Pinterest', 'Facebook'].map(social => (
                  <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">{social}</a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-foreground">Collection</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bestsellers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Guide</a></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-foreground">Services</h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Custom Orders</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Jewelry Care</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-6">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-foreground">Newsletter</h4>
              <p className="text-xs text-muted-foreground">Subscribe to receive first access to new collections and exclusive offers.</p>
              <div className="flex border-b border-foreground/20 focus-within:border-primary transition-colors pb-1">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none text-sm w-full font-light py-2"
                />
                <button className="text-[10px] font-bold uppercase tracking-widest text-primary ml-2">Join</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            <p>© 2024 Aura Jewels International. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Accessibility</a>
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

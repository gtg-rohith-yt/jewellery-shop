
"use client";

import { useState, useMemo } from 'react';
import { useStore } from '@/app/store/use-store';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Search, Sparkles, Star, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// Import Data from our editable files
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { BUSINESS_DETAILS } from '@/data/business';
import { HOME_BANNERS } from '@/data/banners';

export default function Home() {
  const { cart, wishlist, addToCart, toggleWishlist, isLoaded } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (!isLoaded) return null;

  const currentBanner = HOME_BANNERS[0];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <Image 
            src={currentBanner.image} 
            alt={currentBanner.title} 
            fill 
            priority
            className="object-cover"
            data-ai-hint="luxury jewelry"
          />
          <div className="absolute inset-0 hero-gradient flex items-center">
            <div className="container mx-auto px-4 text-white">
              <div className="max-w-xl space-y-6 animate-slide-up">
                <Badge className="bg-white/20 backdrop-blur-md text-white border-none px-4 py-1 text-[10px] tracking-widest uppercase">New Arrival 2024</Badge>
                <h2 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] italic">
                  {currentBanner.title.split(' ').slice(0, 2).join(' ')} <br /> {currentBanner.title.split(' ').slice(2).join(' ')}
                </h2>
                <p className="text-base md:text-lg text-white/80 font-light max-w-sm">
                  {currentBanner.subtitle}
                </p>
                <div className="flex gap-4 pt-4">
                  <Button className="rounded-none bg-white text-foreground hover:bg-white/90 px-8 h-14 font-bold tracking-widest uppercase text-xs">
                    {currentBanner.buttonText}
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
      </main>

      <Footer />
    </div>
  );
}

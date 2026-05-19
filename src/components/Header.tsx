
"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useStore } from '@/app/store/use-store';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_DETAILS } from '@/data/business';
import { CATEGORIES } from '@/data/categories';
import { CartDrawer } from '@/components/CartDrawer';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cart, wishlist, addToCart, toggleWishlist, isLoaded, updateQuantity, removeFromCart } = useStore();
  
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/?q=${encodeURIComponent(searchValue.trim())}`);
    } else {
      router.push('/');
    }
  }, [searchValue, router]);

  if (!isLoaded) return null;

  const NavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact-us' },
    { name: 'Shipping', href: '/shipping-policy' },
    { name: 'Privacy', href: '/privacy-policy' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-foreground text-white py-2 text-center text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase transition-all">
        Complimentary Shipping on Orders over ₹{BUSINESS_DETAILS.freeShippingThreshold} • Handcrafted Luxury
      </div>

      <header className={`glass-nav ${scrolled ? 'py-2 shadow-sm' : 'py-5'}`}>
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-4 lg:flex-1">
            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden p-1.5 -ml-1 text-foreground">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
                <div className="p-8 border-b">
                  <h2 className="font-headline text-2xl italic font-bold text-primary">{BUSINESS_DETAILS.businessName}</h2>
                </div>
                <div className="flex-1 overflow-y-auto py-6 px-8 space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Main Menu</p>
                    <div className="flex flex-col gap-4">
                      {NavLinks.map(link => (
                        <Link key={link.name} href={link.href} className="text-sm font-semibold uppercase tracking-widest hover:text-primary transition-colors">{link.name}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Collections</p>
                    <div className="flex flex-col gap-4">
                      {CATEGORIES.map(cat => (
                        <Link key={cat.name} href={`/?cat=${cat.name}`} className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-3">
                          <span className="text-lg">{cat.icon}</span> {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="transition-transform active:scale-95">
              <h1 className="font-headline text-xl md:text-3xl font-bold tracking-tighter text-foreground italic flex items-center gap-2">
                <span className="text-primary hidden md:inline-block">💎</span>
                {BUSINESS_DETAILS.businessName}
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-10 flex-1">
            <Link href="/" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-primary outline-none transition-all group">
                Collections <ChevronDown className="h-3 w-3 group-data-[state=open]:rotate-180 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 rounded-xl luxury-shadow border-none animate-in fade-in zoom-in-95 mt-2">
                {CATEGORIES.map((cat) => (
                  <DropdownMenuItem key={cat.name} asChild className="rounded-lg">
                    <Link href={`/?cat=${cat.name}`} className="w-full flex items-center gap-3 py-2 cursor-pointer">
                      <span className="text-lg">{cat.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-widest">{cat.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact-us" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all">Contact</Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center justify-end gap-1 md:gap-4 flex-1">
            <form onSubmit={handleSearch} className="hidden md:flex relative group ml-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search treasures..." 
                className="pl-9 rounded-full bg-secondary/50 border-none w-40 lg:w-56 h-9 text-[11px] focus-visible:ring-1 focus-visible:ring-primary/30 transition-all font-medium"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>

            <button 
              className="relative p-2.5 text-foreground hover:text-primary transition-all hover:bg-secondary rounded-full"
              onClick={() => setWishlistOpen(true)}
              aria-label="Wishlist"
            >
              <Heart className={`h-[1.1rem] w-[1.1rem] ${wishlist.length > 0 ? 'fill-primary text-primary' : ''}`} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 h-3.5 w-3.5 flex items-center justify-center text-[7px] font-bold bg-primary text-white rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button 
              className="relative p-2.5 text-foreground hover:text-primary transition-all hover:bg-secondary rounded-full"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 h-3.5 w-3.5 flex items-center justify-center text-[7px] font-bold bg-foreground text-white rounded-full">
                  {cart.reduce((sum, i) => sum + i.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

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
        onRemove={(id) => toggleWishlist({ id } as any)}
      />
    </>
  );
}

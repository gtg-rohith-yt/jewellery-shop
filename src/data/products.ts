
/**
 * PRODUCT LIST
 * Add your products here. 
 * Images can be local (e.g., /products/my-item.jpg) or URLs.
 */
import { Product } from "@/lib/types";

export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Handmade Pearl Drop Earrings', 
    price: 2499, 
    oldPrice: 2999,
    discount: '15% OFF',
    category: 'Earrings', 
    image: 'https://picsum.photos/seed/ear1/800/1000', 
    description: 'Classic drops with freshwater pearls.',
    stock: 15,
    rating: 4.8
  },
  { 
    id: '2', 
    name: '24k Textured Golden Cuff', 
    price: 4999, 
    oldPrice: 5999,
    discount: '20% OFF',
    category: 'Bracelets', 
    image: 'https://picsum.photos/seed/bra1/800/1000', 
    description: '24k gold plated textured finish.',
    stock: 8,
    rating: 4.9
  },
  { 
    id: '3', 
    name: 'Raw Emerald Stone Necklace', 
    price: 8999, 
    oldPrice: 10500,
    discount: '15% OFF',
    category: 'Necklaces', 
    image: 'https://picsum.photos/seed/nec1/800/1000', 
    description: 'Handcrafted with genuine raw emerald.',
    stock: 5,
    rating: 5.0
  },
  { 
    id: '4', 
    name: 'Dainty Stackable Ring Set', 
    price: 1899, 
    oldPrice: 2499,
    discount: '25% OFF',
    category: 'Rings', 
    image: 'https://picsum.photos/seed/rin1/800/1000', 
    description: 'Set of 5 minimalist stackable rings.',
    stock: 20,
    rating: 4.7
  }
];

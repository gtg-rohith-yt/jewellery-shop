
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  category: string;
  image: string;
  description: string;
  stock: number;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BusinessDetails {
  businessName: string;
  whatsappNumber: string;
  upiId: string;
  instagramLink: string;
  facebookLink: string;
  supportEmail: string;
  supportPhone: string;
  deliveryCharge: number;
  freeShippingThreshold: number;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
}

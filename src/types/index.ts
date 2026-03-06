export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Other' | 'Music' | 'Home';
  rating: number;
  reviews: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  count?: number;
}

export interface Filter {
  id: string;
  name: string;
}

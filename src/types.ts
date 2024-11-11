export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'template' | 'ebook' | 'course' | 'photo';
  preview: string;
  author: string;
  sales: number;
  rating: number;
}
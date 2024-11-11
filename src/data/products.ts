import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Ultimate Web Development Course',
    description: 'Master modern web development with this comprehensive course covering React, Node.js, and more.',
    price: 99.99,
    category: 'course',
    preview: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Johnson',
    sales: 1250,
    rating: 4.8
  },
  {
    id: '2',
    title: 'Minimal Portfolio Template',
    description: 'Clean and modern portfolio template perfect for creatives and designers.',
    price: 29.99,
    category: 'template',
    preview: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    author: 'David Chen',
    sales: 843,
    rating: 4.6
  },
  {
    id: '3',
    title: 'Digital Marketing Blueprint',
    description: 'Comprehensive guide to mastering digital marketing in 2024.',
    price: 49.99,
    category: 'ebook',
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    author: 'Emma Williams',
    sales: 2150,
    rating: 4.9
  }
];
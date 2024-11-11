import React from 'react';
import { Book, Image, FileCode, GraduationCap } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories = [
    { id: 'all', label: 'All', icon: null },
    { id: 'template', label: 'Templates', icon: FileCode },
    { id: 'ebook', label: 'E-Books', icon: Book },
    { id: 'course', label: 'Courses', icon: GraduationCap },
    { id: 'photo', label: 'Photos', icon: Image },
  ];

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-4">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSelectCategory(id === 'all' ? null : id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            (id === 'all' && !selectedCategory) || id === selectedCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {Icon && <Icon className="w-4 h-4" />}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
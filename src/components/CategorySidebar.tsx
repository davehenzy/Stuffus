import { motion } from 'framer-motion';
import { ChevronDown, Home, Music, Smartphone, HardDrive, Package } from 'lucide-react';
import type { Category, Filter } from '@/types';

interface CategorySidebarProps {
  categories: Category[];
  filters: Filter[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  all: Package,
  home: Home,
  music: Music,
  phone: Smartphone,
  storage: HardDrive,
};

export function CategorySidebar({ 
  categories, 
  filters, 
  activeCategory, 
  onSelectCategory 
}: CategorySidebarProps) {
  return (
    <div className="w-full lg:w-60 flex-shrink-0 space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-stuffus-primary mb-4">Category</h3>
        <div className="space-y-1">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id] || Package;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  isActive 
                    ? 'bg-stuffus-surface text-stuffus-primary' 
                    : 'text-stuffus-secondary hover:bg-stuffus-surface hover:text-stuffus-primary'
                }`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </div>
                {category.count && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-stuffus-accent text-white' 
                      : 'bg-stuffus-surface text-stuffus-muted'
                  }`}>
                    {category.count}
                  </span>
                )}
                {isActive && category.id === 'all' && (
                  <ChevronDown className="w-4 h-4 text-stuffus-accent" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div>
        <div className="space-y-1">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-stuffus-secondary hover:bg-stuffus-surface hover:text-stuffus-primary transition-all duration-200"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-4 h-4 rounded border border-stuffus-border flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-stuffus-accent opacity-0 hover:opacity-100 transition-opacity" />
              </div>
              <span>{filter.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

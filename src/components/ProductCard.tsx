import { motion } from 'framer-motion';
import type { Product } from '@/types';
import { StarRating } from './StarRating';
import { CategoryTag } from './CategoryTag';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const
      }}
      whileHover={{ y: -4 }}
      className="group bg-white border border-stuffus-border rounded-xl p-4 transition-colors duration-300 hover:border-stuffus-primary"
    >
      {/* Category Tag */}
      <div className="flex justify-end mb-3">
        <CategoryTag category={product.category} />
      </div>

      {/* Product Image */}
      <div className="relative aspect-square mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-stuffus-primary truncate">
          {product.name}
        </h3>
        
        <StarRating rating={product.rating} reviews={product.reviews} />
        
        <p className="text-base font-bold text-stuffus-primary">
          ${product.price.toFixed(2)}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            className="flex-1 h-9 text-xs font-semibold border-stuffus-border hover:bg-stuffus-surface transition-all duration-200"
          >
            Add to Chart
          </Button>
          <Button
            className="flex-1 h-9 text-xs font-semibold bg-stuffus-primary text-white hover:bg-stuffus-primary/90 transition-all duration-200 hover:scale-[1.02]"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

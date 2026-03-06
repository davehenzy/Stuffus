import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, 2, 3, '...', currentPage, '...', totalPages - 2, totalPages - 1, totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 text-sm text-stuffus-secondary hover:text-stuffus-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        whileHover={{ x: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </motion.button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          <motion.button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`min-w-[36px] h-9 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              page === currentPage
                ? 'bg-stuffus-primary text-white'
                : page === '...'
                ? 'text-stuffus-muted cursor-default'
                : 'text-stuffus-secondary hover:bg-stuffus-surface hover:text-stuffus-primary'
            }`}
            whileHover={page !== '...' ? { scale: 1.05 } : {}}
            whileTap={page !== '...' ? { scale: 0.95 } : {}}
          >
            {page}
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 text-sm text-stuffus-secondary hover:text-stuffus-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative w-full h-[400px] mt-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/asset_1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative h-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
      >
        {/* Large Shop Text */}
        <motion.h1
          variants={itemVariants}
          className="text-[80px] sm:text-[100px] lg:text-[120px] font-extrabold text-white leading-none tracking-tighter drop-shadow-lg"
        >
          Shop
        </motion.h1>

        {/* Subtitle and Search */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-4"
        >
          <p className="text-lg font-semibold text-white/90">
            Give All You Need
          </p>

          {/* Search Bar */}
          <div className="flex w-full sm:w-auto">
            <div className="relative flex-1 sm:w-[320px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stuffus-muted" />
              <Input
                type="text"
                placeholder="Search on Stuffus"
                className="w-full pl-10 pr-4 py-3 h-12 bg-white border-0 rounded-l-lg rounded-r-none text-sm placeholder:text-stuffus-muted focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button 
              className="h-12 px-6 bg-stuffus-primary text-white font-semibold rounded-l-none rounded-r-lg hover:bg-stuffus-primary/90 transition-all duration-200 hover:scale-[1.02]"
            >
              Search
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

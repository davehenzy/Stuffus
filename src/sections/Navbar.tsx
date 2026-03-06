import { motion } from 'framer-motion';
import { Search, ShoppingCart, Leaf } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { name: 'Beranda', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Blog', href: '#' },
];

export function Navbar() {
  const { isScrolled } = useScrollPosition();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-nav' : 'border-b border-stuffus-border'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Leaf className="w-5 h-5 text-stuffus-accent" />
            <span className="text-xl font-bold text-stuffus-primary tracking-tight">
              Stuffus
            </span>
          </motion.a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-stuffus-secondary hover:text-stuffus-primary transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stuffus-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-stuffus-secondary hover:text-stuffus-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-stuffus-secondary hover:text-stuffus-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-stuffus-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Avatar className="w-9 h-9 cursor-pointer">
                <AvatarImage src="/assets/user_avatar.jpg" alt="User" />
                <AvatarFallback className="bg-stuffus-surface text-stuffus-primary text-sm font-medium">
                  US
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

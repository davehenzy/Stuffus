import { motion } from 'framer-motion';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const aboutLinks = [
  { name: 'Blog', href: '#' },
  { name: 'Meet The Team', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const supportLinks = [
  { name: 'Contact Us', href: '#' },
  { name: 'Shipping', href: '#' },
  { name: 'Return', href: '#' },
  { name: 'FAQ', href: '#' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export function Footer() {
  return (
    <footer className="border-t border-stuffus-border bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {/* About Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-stuffus-primary mb-4">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-stuffus-secondary hover:text-stuffus-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-stuffus-primary mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-stuffus-secondary hover:text-stuffus-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Empty space for alignment */}
          <div className="hidden md:block" />

          {/* Social Media */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-stuffus-primary mb-4 text-right">
              Social Media
            </h3>
            <div className="flex justify-end gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full border border-stuffus-border flex items-center justify-center text-stuffus-secondary hover:text-stuffus-primary hover:border-stuffus-primary transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-stuffus-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-stuffus-muted">
            Copyright 2023 Stuffus. All Rights Reserved <span className="hidden sm:inline">|</span> <span className="block sm:inline mt-1 sm:mt-0">build with ❤️ by <a href="https://techiextract.com.ng" target="_blank" rel="noopener noreferrer" className="hover:text-stuffus-primary transition-colors duration-200">TechieXtract</a></span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-stuffus-muted hover:text-stuffus-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-stuffus-muted hover:text-stuffus-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

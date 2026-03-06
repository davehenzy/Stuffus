import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export function NewsletterSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-stuffus-primary rounded-2xl p-8 lg:p-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Ready to Get<br />Our New Stuff?
              </h2>
              
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-[280px] h-12 bg-white border-0 rounded-l-lg rounded-r-none text-sm placeholder:text-stuffus-muted focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button 
                  className="h-12 px-6 bg-white text-stuffus-primary font-semibold rounded-l-none rounded-r-lg hover:bg-stuffus-surface transition-all duration-200 hover:scale-[1.02]"
                >
                  Send
                </Button>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div variants={itemVariants} className="lg:max-w-md">
              <h3 className="text-lg font-semibold text-white mb-3">
                Stuffus for Homes and Needs
              </h3>
              <p className="text-stuffus-muted leading-relaxed">
                We'll listen to your needs, identify the best approach, and then 
                create a bespoke smart EV charging solution that's right for you.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Navbar } from '@/sections/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { ProductGridSection } from '@/sections/ProductGridSection';
import { RecommendationsSection } from '@/sections/RecommendationsSection';
import { NewsletterSection } from '@/sections/NewsletterSection';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGridSection />
        <RecommendationsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;


import { useState } from 'react';
import { ChevronDown, Globe, Leaf, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const [language, setLanguage] = useState('es');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d2a13] border-b border-[#0a1e0c]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-20 w-auto flex items-center justify-center">
              <img src="/logo-cannlabs.png" alt="CannLabs Logo" className="h-16 w-auto object-contain" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-green-300 transition-colors">
              {language === 'es' ? 'Quiénes Somos' : 'About Us'}
            </a>
            <a href="#products" className="text-white hover:text-green-300 transition-colors">
              {language === 'es' ? 'Productos' : 'Products'}
            </a>
            <a href="#technology" className="text-white hover:text-green-300 transition-colors">
              {language === 'es' ? 'Tecnología' : 'Technology'}
            </a>
            <a href="#contact" className="text-white hover:text-green-300 transition-colors">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero language={language} />
        <About language={language} />
        <Products language={language} />
        <Technology language={language} />
        <Sustainability language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Index;


import { useState } from 'react';
import { ChevronDown, Globe, Leaf, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import International from "@/components/International";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const [language, setLanguage] = useState('es');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#113a1a] border-b border-[#0d2a13]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-800 to-green-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Cannlabs S.A.</h1>
              <p className="text-xs text-green-200">Natural Extracts Innovation</p>
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
        <International language={language} />
        <Sustainability language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Index;


import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Tea/Yerba Mate Field */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1597318112184-2b8b24c0e7b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4">
            {language === 'es' ? 'Paraguay 🇵🇾 + Canadá 🇨🇦' : 'Paraguay 🇵🇾 + Canada 🇨🇦'}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {language === 'es' ? (
            <>
              Fusionamos <span className="text-primary">tecnología canadiense</span><br />
              y <span className="text-primary">naturaleza paraguaya</span><br />
              para nutrir al mundo
            </>
          ) : (
            <>
              We fuse <span className="text-primary">Canadian technology</span><br />
              with <span className="text-primary">Paraguayan nature</span><br />
              to nourish the world
            </>
          )}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
          {language === 'es' 
            ? 'Extractos herbales solubles de alta calidad para mercados globales. Yerba mate, stevia y té con tecnología spray-dry avanzada.'
            : 'High-quality soluble herbal extracts for global markets. Yerba mate, stevia and tea with advanced spray-dry technology.'
          }
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {language === 'es' ? 'Contacto Comercial' : 'Commercial Contact'}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
          >
            {language === 'es' ? 'Descargar Brochure' : 'Download Brochure'}
          </Button>
        </div>
        
        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="text-sm text-white font-semibold">{language === 'es' ? 'Orgánico' : 'Organic'}</div>
            <div className="text-xs text-gray-300">{language === 'es' ? 'Certificado' : 'Certified'}</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💧</span>
            </div>
            <div className="text-sm text-white font-semibold">ISO 14001</div>
            <div className="text-xs text-gray-300">{language === 'es' ? 'Gestión Ambiental' : 'Environmental'}</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <div className="text-sm text-white font-semibold">{language === 'es' ? 'Comercio Justo' : 'Fair Trade'}</div>
            <div className="text-xs text-gray-300">{language === 'es' ? 'Ético' : 'Ethical'}</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-sm text-white font-semibold">HACCP</div>
            <div className="text-xs text-gray-300">{language === 'es' ? 'Inocuidad' : 'Food Safety'}</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;

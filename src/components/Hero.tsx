
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm rounded-full text-green-200 text-sm font-medium mb-4">
            {language === 'es' ? 'Paraguay 🇵🇾 + Canadá 🇨🇦' : 'Paraguay 🇵🇾 + Canada 🇨🇦'}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {language === 'es' ? (
            <>
              Fusionamos <span className="text-green-400">tecnología canadiense</span><br />
              y <span className="text-green-400">naturaleza paraguaya</span><br />
              para nutrir al mundo
            </>
          ) : (
            <>
              We fuse <span className="text-green-400">Canadian technology</span><br />
              with <span className="text-green-400">Paraguayan nature</span><br />
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
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full group"
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
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">15+</div>
            <div className="text-sm text-gray-300">{language === 'es' ? 'Países' : 'Countries'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">6°C</div>
            <div className="text-sm text-gray-300">{language === 'es' ? 'Solubilidad' : 'Solubility'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-sm text-gray-300">{language === 'es' ? 'Natural' : 'Natural'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">0</div>
            <div className="text-sm text-gray-300">{language === 'es' ? 'Agroquímicos' : 'Agrochemicals'}</div>
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

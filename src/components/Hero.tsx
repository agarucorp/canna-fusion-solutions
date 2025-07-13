
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Yerba Mate Plantation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://oaidalleapiprodscus.blob.core.windows.net/private/org-3bQwQwQwQwQwQwQwQwQwQw/user-3bQwQwQwQwQwQwQwQwQwQw/img-3bQwQwQwQwQwQwQwQwQwQw.png?st=2024-05-01T00%3A00%3A00Z&se=2024-06-01T00%3A00%3A00Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image&skoid=3bQwQwQwQwQwQwQwQwQwQw&sktid=3bQwQwQwQwQwQwQwQwQwQw&skt=2024-05-01T00%3A00%3A00Z&ske=2024-06-01T00%3A00%3A00Z&sks=b&skv=2021-08-06&sig=3bQwQwQwQwQwQwQwQwQwQw')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-green-200 text-sm font-medium mb-4">
            {language === 'es' ? 'Paraguay 🇵🇾 + Canadá 🇨🇦' : 'Paraguay 🇵🇾 + Canada 🇨🇦'}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {language === 'es' ? (
            <>
              Fusionamos <span className="text-green-300">tecnología canadiense</span><br />
              y <span className="text-green-300">naturaleza paraguaya</span><br />
              para nutrir al mundo
            </>
          ) : (
            <>
              We fuse <span className="text-green-300">Canadian technology</span><br />
              with <span className="text-green-300">Paraguayan nature</span><br />
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
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {language === 'es' ? 'Contacto Comercial' : 'Commercial Contact'}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Scroll Indicator */}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;

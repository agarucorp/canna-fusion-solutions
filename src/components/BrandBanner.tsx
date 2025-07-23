import { motion } from 'framer-motion';

interface BrandBannerProps {
  language: string;
}

const BrandBanner = ({ language }: BrandBannerProps) => {
  const brands = [
    'pure-circle-logo.png',
    'cuarto-creciente-logo.png',
    'squadra-logo.png',
    'kerry-logo.png',
    'colon-logo.png',
    'selecta-logo.png',
    'ccu-logo.png',
    'healssen-logo.png',
    'wisdom-logo.png'
  ];

  return (
    <section className="py-8 bg-[#0d2a13] border-y border-yellow-500/30">
      <div className="container mx-auto px-4">
        {/* Título pequeño */}
        <div className="text-center mb-6">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-wider">
            {language === 'es' ? 'Marcas seleccionadas que confían en nosotros' : 'Selected brands that trust us'}
          </h3>
        </div>
        
        {/* Banner de logos con scroll infinito */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Primera fila de logos */}
            {brands.map((brand, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={`/${brand}`}
                  alt={`Brand ${index + 1}`}
                  className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Segunda fila de logos (duplicada para continuidad perfecta) */}
            {brands.map((brand, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={`/${brand}`}
                  alt={`Brand ${index + 1}`}
                  className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Tercera fila de logos (para transición más suave) */}
            {brands.map((brand, index) => (
              <div key={`third-${index}`} className="flex-shrink-0 mx-8">
                <img
                  src={`/${brand}`}
                  alt={`Brand ${index + 1}`}
                  className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandBanner; 
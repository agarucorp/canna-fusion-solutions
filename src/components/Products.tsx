
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ProductsProps {
  language: string;
}

const Products = ({ language }: ProductsProps) => {
  // Estados para el carrusel automático
  const [yerbaMateIndex, setYerbaMateIndex] = useState(0);
  const [steviaIndex, setSteviaIndex] = useState(0);

  // Combinaciones de Yerba Mate
  const yerbaMateCombinations = [
    {
      image: '/mate-en-polvo-colon.png',
      logo: '/colon-logo.png',
      partner: 'Colon'
    },
    {
      image: '/wisdom-yerba-product.jpg',
      logo: '/wisdom-logo.png',
      partner: 'Wisdom'
    },
    {
      image: '/mate-en-polvo-indega.jpg',
      logo: '/indega-logo.png',
      partner: 'Indega'
    },
    {
      image: '/mate-en-polvo-selecta-ok.png',
      logo: '/selecta-logo.png',
      partner: 'Selecta'
    }
  ];

  // Combinaciones de Stevia
  const steviaCombinations = [
    {
      image: '/pure-circle-stevia-product.jpg',
      logo: '/pure-circle-logo.png',
      partner: 'PureCircle'
    },
    {
      image: '/wisdom-stevia.jpg',
      logo: '/wisdom-logo.png',
      partner: 'Wisdom'
    }
  ];

  // Timer para Yerba Mate (4 combinaciones - 4 segundos cada una)
  useEffect(() => {
    const interval = setInterval(() => {
      setYerbaMateIndex((prevIndex) => (prevIndex + 1) % yerbaMateCombinations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [yerbaMateCombinations.length]);

  // Timer para Stevia (2 combinaciones - 3 segundos cada una)
  useEffect(() => {
    const interval = setInterval(() => {
      setSteviaIndex((prevIndex) => (prevIndex + 1) % steviaCombinations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steviaCombinations.length]);

  const products = [
    {
      name: language === 'es' ? 'Yerba Mate Soluble' : 'Soluble Yerba Mate',
      description: language === 'es' 
        ? 'Extracto de yerba mate 100% natural, soluble en frío y caliente. Ideal para bebidas energéticas y funcionales.'
        : '100% natural yerba mate extract, soluble in cold and hot water. Ideal for energy and functional beverages.',
      applications: language === 'es' ? ['Bebidas RTD', 'Energéticas', 'Funcionales', 'Té Frío'] : ['RTD Beverages', 'Energy Drinks', 'Functional', 'Iced Tea'],
      solubility: '6°C',
      collaboration: language === 'es' ? 'En colaboración con:' : 'In collaboration with:',
      combinations: yerbaMateCombinations,
      currentIndex: yerbaMateIndex
    },
    {
      name: language === 'es' ? 'Stevia Natural' : 'Natural Stevia',
      description: language === 'es' 
        ? 'Endulzante natural de stevia rebaudiana, sin amargor residual. Perfecto para aplicaciones alimentarias.'
        : 'Natural stevia rebaudiana sweetener, without residual bitterness. Perfect for food applications.',
      applications: language === 'es' ? ['Bebidas', 'Panadería', 'Lácteos', 'Confitería'] : ['Beverages', 'Bakery', 'Dairy', 'Confectionery'],
      solubility: '8°C',
      collaboration: language === 'es' ? 'En colaboración con:' : 'In collaboration with:',
      combinations: steviaCombinations,
      currentIndex: steviaIndex
    },
    {
      name: language === 'es' ? 'Té Verde Premium' : 'Premium Green Tea',
      description: language === 'es' 
        ? 'Extracto concentrado de té verde con alto contenido de antioxidantes. Solubilidad excepcional.'
        : 'Concentrated green tea extract with high antioxidant content. Exceptional solubility.',
      image: '/te-verde.jpg',
      applications: language === 'es' ? ['Cosmética', 'Suplementos', 'Bebidas', 'Aromaterapia'] : ['Cosmetics', 'Supplements', 'Beverages', 'Aromatherapy'],
      solubility: '6°C',
      collaboration: language === 'es' ? 'En colaboración con:' : 'In collaboration with:',
      partnerLogo: 'partner-logo-3.png' // Placeholder
    },
    {
      name: language === 'es' ? 'Té Negro Soluble' : 'Soluble Black Tea',
      description: language === 'es' 
        ? 'Extracto de té negro con sabor intenso y color característico. Ideal para bebidas instantáneas.'
        : 'Black tea extract with intense flavor and characteristic color. Ideal for instant beverages.',
      image: '/black-tea.jpg',
      applications: language === 'es' ? ['Té Instantáneo', 'Bebidas RTD', 'Mezclas', 'Saborizantes'] : ['Instant Tea', 'RTD Beverages', 'Blends', 'Flavorings'],
      solubility: '10°C',
      collaboration: language === 'es' ? 'En colaboración con:' : 'In collaboration with:',
      partnerLogo: 'partner-logo-4.png' // Placeholder
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Nuestros Productos' : 'Our Products'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Extractos herbales solubles de la más alta calidad, desarrollados con tecnología de vanguardia para aplicaciones industriales globales.'
              : 'Highest quality soluble herbal extracts, developed with cutting-edge technology for global industrial applications.'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: 'easeOut' }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-96">
                <div className="relative h-full flex">
                  {/* Lado izquierdo - Información del producto (30%) */}
                  <div className="w-1/3 p-6 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-3">{product.name}</CardTitle>
                      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">
                          {language === 'es' ? 'Aplicaciones:' : 'Applications:'}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs text-primary border-primary/30">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Sección de colaboración (parte inferior izquierda) */}
                    <div className="border-t pt-4">
                      <p className="text-xs text-gray-500 mb-2">{product.collaboration}</p>
                      <div className="h-8 bg-gray-100 rounded flex items-center justify-center">
                        {product.combinations ? (
                          <img 
                            src={product.combinations[product.currentIndex].logo}
                            alt={product.combinations[product.currentIndex].partner}
                            className="h-6 w-auto object-contain"
                          />
                        ) : (
                          <span className="text-xs text-gray-400">[Logo Partner]</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Lado derecho - Imagen del producto (70%) */}
                  <div className="w-2/3 relative">
                    <img 
                      src={product.combinations ? product.combinations[product.currentIndex].image : product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white text-xs">
                        {language === 'es' ? 'Soluble desde' : 'Soluble from'} {product.solubility}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Formatos Disponibles' : 'Available Formats'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧊</span>
                </div>
                <h4 className="font-semibold text-gray-900">
                  {language === 'es' ? 'Soluble en Frío' : 'Cold Soluble'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Desde 6°C' : 'From 6°C'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔥</span>
                </div>
                <h4 className="font-semibold text-gray-900">
                  {language === 'es' ? 'Soluble en Caliente' : 'Hot Soluble'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Hasta 100°C' : 'Up to 100°C'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚗️</span>
                </div>
                <h4 className="font-semibold text-gray-900">
                  {language === 'es' ? 'Blends Personalizados' : 'Custom Blends'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'A medida' : 'Tailor-made'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

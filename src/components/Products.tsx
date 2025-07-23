
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
  const [greenTeaIndex, setGreenTeaIndex] = useState(0);
  const [blackTeaIndex, setBlackTeaIndex] = useState(0);

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
    },
    {
      image: '/squadra-stevia.jpg',
      logo: '/squadra-logo.png',
      partner: 'Squadra'
    }
  ];

  // Combinaciones de Té Verde
  const greenTeaCombinations = [
    {
      image: '/tea-haelsssen.jpg',
      logo: '/healssen-logo.png',
      partner: 'Hälssen'
    },
    {
      image: '/te-verde-cuarto.jpg',
      logo: '/cuarto-creciente-logo.png',
      partner: 'Cuarto Creciente'
    }
  ];

  // Combinaciones de Té Negro
  const blackTeaCombinations = [
    {
      image: '/black-tea-haelssen.jpg',
      logo: '/healssen-logo.png',
      partner: 'Hälssen'
    },
    {
      image: '/black-tea-cuarto-creciente.jpg',
      logo: '/cuarto-creciente-logo.png',
      partner: 'Cuarto Creciente'
    }
  ];

  // Timer para Yerba Mate (4 combinaciones - 4 segundos cada una)
  useEffect(() => {
    const interval = setInterval(() => {
      setYerbaMateIndex((prevIndex) => (prevIndex + 1) % yerbaMateCombinations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [yerbaMateCombinations.length]);

  // Timer para Stevia (3 combinaciones - 3 segundos cada una)
  useEffect(() => {
    const interval = setInterval(() => {
      setSteviaIndex((prevIndex) => (prevIndex + 1) % steviaCombinations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steviaCombinations.length]);

  // Timer para Té Verde (2 combinaciones - 3.5 segundos cada una)
  useEffect(() => {
    const interval = setInterval(() => {
      setGreenTeaIndex((prevIndex) => (prevIndex + 1) % greenTeaCombinations.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [greenTeaCombinations.length]);

  // Timer para Té Negro (2 combinaciones - 3.5 segundos cada una)
  useEffect(() => {
    const interval = setInterval(() => {
      setBlackTeaIndex((prevIndex) => (prevIndex + 1) % blackTeaCombinations.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [blackTeaCombinations.length]);

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
      applications: language === 'es' ? ['Cosmética', 'Suplementos', 'Bebidas', 'Aromaterapia'] : ['Cosmetics', 'Supplements', 'Beverages', 'Aromatherapy'],
      solubility: '6°C',
      collaboration: language === 'es' ? 'En colaboración con:' : 'In collaboration with:',
      combinations: greenTeaCombinations,
      currentIndex: greenTeaIndex
    },
    {
      name: language === 'es' ? 'Té Negro Soluble' : 'Soluble Black Tea',
      description: language === 'es' 
        ? 'Extracto de té negro con sabor intenso y color característico. Ideal para bebidas instantáneas.'
        : 'Black tea extract with intense flavor and characteristic color. Ideal for instant beverages.',
      applications: language === 'es' ? ['Té Instantáneo', 'Bebidas RTD', 'Mezclas', 'Saborizantes'] : ['Instant Tea', 'RTD Beverages', 'Blends', 'Flavorings'],
      solubility: '10°C',
      collaboration: language === 'es' ? 'En colaboración con:' : 'In collaboration with:',
      combinations: blackTeaCombinations,
      currentIndex: blackTeaIndex
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
                <div className="relative h-full flex flex-col">
                  {/* Parte superior - Imagen del producto (70% altura) */}
                  <div className="h-[70%] relative">
                    <img 
                      src={product.combinations ? product.combinations[product.currentIndex].image : product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white text-xs">
                        {language === 'es' ? 'Soluble desde' : 'Soluble from'} {product.solubility}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Parte inferior - Información y colaboración (30% altura) */}
                  <div className="h-[30%] flex">
                    {/* Lado izquierdo - Información del producto (70% ancho) */}
                    <div className="w-[70%] p-4 flex flex-col justify-center">
                      <CardTitle className="text-lg text-gray-900 mb-2">{product.name}</CardTitle>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs mb-1">
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
                    
                    {/* Lado derecho - Sección de colaboración (30% ancho) */}
                    <div className="w-[30%] p-4 flex flex-col justify-center items-center border-l">
                      <p className="text-xs text-gray-500 mb-2 text-center">{product.collaboration}</p>
                      <div className="h-8 w-full bg-gray-100 rounded flex items-center justify-center">
                        {product.combinations ? (
                          <img 
                            src={product.combinations[product.currentIndex].logo}
                            alt={product.combinations[product.currentIndex].partner}
                            className="h-6 w-auto object-contain transition-all duration-500 ease-in-out"
                          />
                        ) : (
                          <span className="text-xs text-gray-400">[Logo Partner]</span>
                        )}
                      </div>
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

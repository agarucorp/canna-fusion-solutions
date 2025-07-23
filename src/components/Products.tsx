
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
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

  // Combinaciones de productos
  const yerbaMateCombinations = [
    { image: '/mate-en-polvo-colon.png', logo: '/colon-logo.png', partner: 'Colon' },
    { image: '/wisdom-yerba-product.jpg', logo: '/wisdom-logo.png', partner: 'Wisdom' },
    { image: '/mate-en-polvo-indega.jpg', logo: '/indega-logo.png', partner: 'Indega' },
    { image: '/mate-en-polvo-selecta-ok.png', logo: '/selecta-logo.png', partner: 'Selecta' }
  ];
  const steviaCombinations = [
    { image: '/pure-circle-stevia-product.jpg', logo: '/pure-circle-logo.png', partner: 'PureCircle' },
    { image: '/wisdom-stevia.jpg', logo: '/wisdom-logo.png', partner: 'Wisdom' },
    { image: '/squadra-stevia.jpg', logo: '/squadra-logo.png', partner: 'Squadra' }
  ];
  const greenTeaCombinations = [
    { image: '/tea-haelsssen.jpg', logo: '/healssen-logo.png', partner: 'Hälssen' },
    { image: '/te-verde-cuarto.jpg', logo: '/cuarto-creciente-logo.png', partner: 'Cuarto Creciente' }
  ];
  const blackTeaCombinations = [
    { image: '/black-tea-haelssen.jpg', logo: '/healssen-logo.png', partner: 'Hälssen' },
    { image: '/black-tea-cuarto-creciente.jpg', logo: '/cuarto-creciente-logo.png', partner: 'Cuarto Creciente' }
  ];

  // Timers con mayor persistencia (6 segundos)
  useEffect(() => {
    const interval = setInterval(() => setYerbaMateIndex(i => (i + 1) % yerbaMateCombinations.length), 6000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setSteviaIndex(i => (i + 1) % steviaCombinations.length), 6000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setGreenTeaIndex(i => (i + 1) % greenTeaCombinations.length), 6000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setBlackTeaIndex(i => (i + 1) % blackTeaCombinations.length), 6000);
    return () => clearInterval(interval);
  }, []);

  // Orden: Té Negro, Stevia, Té Verde, Yerba Mate
  const products = [
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
      name: language === 'es' ? 'Yerba Mate Soluble' : 'Soluble Yerba Mate',
      description: language === 'es'
        ? 'Extracto de yerba mate 100% natural, soluble en frío y caliente. Ideal para bebidas energéticas y funcionales.'
        : '100% natural yerba mate extract, soluble in cold and hot water. Ideal for energy and functional beverages.',
      applications: language === 'es' ? ['Bebidas RTD', 'Energéticas', 'Funcionales', 'Té Frío'] : ['RTD Beverages', 'Energy Drinks', 'Functional', 'Iced Tea'],
      solubility: '6°C',
      collaboration: language === 'es' ? 'En colaboración con:' : 'In collaboration with:',
      combinations: yerbaMateCombinations,
      currentIndex: yerbaMateIndex
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
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-96 flex relative">
                {/* Columna izquierda: info - ocupa toda la altura */}
                <div className="w-1/3 p-6 flex flex-col justify-center bg-white">
                  <CardTitle className="text-xl text-gray-900 mb-4">{product.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-6">{product.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-3">
                      {language === 'es' ? 'Aplicaciones:' : 'Applications:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="outline" className="text-xs text-primary border-primary/30">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Columna derecha: imagen */}
                <div className="w-2/3 relative">
                  {/* Imagen con fade - ocupa todo el espacio disponible */}
                  <div className="relative h-full overflow-hidden">
                    {/* Fondo borroso para Té Verde y Yerba Mate */}
                    {(index === 2 || index === 3) && (
                      <AnimatePresence mode='wait'>
                        <motion.img
                          key={`bg-${product.combinations[product.currentIndex].image}`}
                          src={product.combinations[product.currentIndex].image}
                          alt=""
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7 }}
                          className="absolute inset-0 w-full h-full object-cover rounded-none blur-sm scale-110"
                        />
                      </AnimatePresence>
                    )}
                    {/* Imagen principal */}
                    <AnimatePresence mode='wait'>
                      <motion.img
                        key={product.combinations[product.currentIndex].image}
                        src={product.combinations[product.currentIndex].image}
                        alt={product.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className={`w-full h-full object-cover rounded-none group-hover:scale-105 transition-all duration-700 ease-in-out ${
                          (index === 2 || index === 3) ? 'relative z-10' : ''
                        }`}
                        style={{ 
                          objectPosition: index === 0 ? 'center 30%' : // Té Negro
                                   index === 1 ? 'center 25%' : // Stevia
                                   index === 2 ? 'center' : // Té Verde - centrada para efecto completo
                                   'center' // Yerba Mate - centrada para efecto completo
                        }}
                      />
                    </AnimatePresence>
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-primary text-white text-xs">
                        {language === 'es' ? 'Soluble desde' : 'Soluble from'} {product.solubility}
                      </Badge>
                    </div>
                  </div>
                  {/* Banner horizontal inferior con fade para logo - posicionado absolutamente en la parte inferior */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gray-100 border-t border-gray-200 px-6 py-4 h-20">
                    <span className="text-sm text-gray-700 font-medium">{product.collaboration}</span>
                    <div className="h-10 w-24 bg-white rounded flex items-center justify-center p-1 shadow-sm">
                      <AnimatePresence mode='wait'>
                        <motion.img
                          key={product.combinations[product.currentIndex].logo}
                          src={product.combinations[product.currentIndex].logo}
                          alt={product.combinations[product.currentIndex].partner}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="h-8 w-auto object-contain max-w-full"
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Sección de Formatos Disponibles */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Formatos Disponibles' : 'Available Formats'}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Nuestros extractos están disponibles en múltiples formatos para adaptarse a diferentes aplicaciones industriales.'
                : 'Our extracts are available in multiple formats to adapt to different industrial applications.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Formato en Polvo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'es' ? 'Polvo Soluble' : 'Soluble Powder'}
                </h4>
                <p className="text-gray-600 mb-4">
                  {language === 'es'
                    ? 'Formato en polvo fino, ideal para mezclas secas y aplicaciones donde se requiere fácil dispersión.'
                    : 'Fine powder format, ideal for dry mixes and applications requiring easy dispersion.'
                  }
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                    {language === 'es' ? 'Solubilidad en frío desde 6°C' : 'Cold solubility from 6°C'}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-green-700 border-green-300">
                    {language === 'es' ? 'Solubilidad en caliente hasta 100°C' : 'Hot solubility up to 100°C'}
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Formato Líquido */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'es' ? 'Extracto Líquido' : 'Liquid Extract'}
                </h4>
                <p className="text-gray-600 mb-4">
                  {language === 'es'
                    ? 'Concentrado líquido de alta pureza, perfecto para aplicaciones donde se requiere máxima concentración.'
                    : 'High-purity liquid concentrate, perfect for applications requiring maximum concentration.'
                  }
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs text-blue-700 border-blue-300">
                    {language === 'es' ? 'Concentración hasta 50%' : 'Concentration up to 50%'}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-blue-700 border-blue-300">
                    {language === 'es' ? 'Estable a temperatura ambiente' : 'Stable at room temperature'}
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Formato Granulado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'es' ? 'Granulado Instantáneo' : 'Instant Granulated'}
                </h4>
                <p className="text-gray-600 mb-4">
                  {language === 'es'
                    ? 'Formato granulado de disolución instantánea, ideal para bebidas y aplicaciones de consumo directo.'
                    : 'Instant-dissolving granulated format, ideal for beverages and direct consumption applications.'
                  }
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs text-orange-700 border-orange-300">
                    {language === 'es' ? 'Disolución instantánea' : 'Instant dissolution'}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-orange-700 border-orange-300">
                    {language === 'es' ? 'Sin residuos ni sedimentos' : 'No residues or sediments'}
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

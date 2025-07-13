
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface ProductsProps {
  language: string;
}

const Products = ({ language }: ProductsProps) => {
  const products = [
    {
      name: language === 'es' ? 'Yerba Mate Soluble' : 'Soluble Yerba Mate',
      description: language === 'es' 
        ? 'Extracto de yerba mate 100% natural, soluble en frío y caliente. Ideal para bebidas energéticas y funcionales.'
        : '100% natural yerba mate extract, soluble in cold and hot water. Ideal for energy and functional beverages.',
      image: '/yerba-mate.jpg',
      applications: language === 'es' ? ['Bebidas RTD', 'Energéticas', 'Funcionales', 'Té Frío'] : ['RTD Beverages', 'Energy Drinks', 'Functional', 'Iced Tea'],
      solubility: '6°C'
    },
    {
      name: language === 'es' ? 'Stevia Natural' : 'Natural Stevia',
      description: language === 'es' 
        ? 'Endulzante natural de stevia rebaudiana, sin amargor residual. Perfecto para aplicaciones alimentarias.'
        : 'Natural stevia rebaudiana sweetener, without residual bitterness. Perfect for food applications.',
      image: '/stevia.jpg',
      applications: language === 'es' ? ['Bebidas', 'Panadería', 'Lácteos', 'Confitería'] : ['Beverages', 'Bakery', 'Dairy', 'Confectionery'],
      solubility: '8°C'
    },
    {
      name: language === 'es' ? 'Té Verde Premium' : 'Premium Green Tea',
      description: language === 'es' 
        ? 'Extracto concentrado de té verde con alto contenido de antioxidantes. Solubilidad excepcional.'
        : 'Concentrated green tea extract with high antioxidant content. Exceptional solubility.',
      image: '/te-verde.jpg',
      applications: language === 'es' ? ['Cosmética', 'Suplementos', 'Bebidas', 'Aromaterapia'] : ['Cosmetics', 'Supplements', 'Beverages', 'Aromatherapy'],
      solubility: '6°C'
    },
    {
      name: language === 'es' ? 'Té Negro Soluble' : 'Soluble Black Tea',
      description: language === 'es' 
        ? 'Extracto de té negro con sabor intenso y color característico. Ideal para bebidas instantáneas.'
        : 'Black tea extract with intense flavor and characteristic color. Ideal for instant beverages.',
      image: '/black-tea.jpg',
      applications: language === 'es' ? ['Té Instantáneo', 'Bebidas RTD', 'Mezclas', 'Saborizantes'] : ['Instant Tea', 'RTD Beverages', 'Blends', 'Flavorings'],
      solubility: '10°C'
    }
  ];

  return (
    <motion.section
      id="products"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: 'easeOut' }}
            >
              <img src={product.image} alt={product.name} className="w-28 h-28 object-cover rounded-xl mb-4 shadow" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                {product.applications.map((app) => (
                  <span key={app} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">{app}</span>
                ))}
              </div>
              <span className="text-xs text-gray-400">{language === 'es' ? 'Solubilidad:' : 'Solubility:'} {product.solubility}</span>
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
    </motion.section>
  );
};

export default Products;

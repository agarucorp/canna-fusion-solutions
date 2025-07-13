
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">
                    {language === 'es' ? 'Soluble desde' : 'Soluble from'} {product.solubility}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {language === 'es' ? 'Aplicaciones:' : 'Applications:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIndex) => (
                      <Badge key={appIndex} variant="outline" className="text-primary border-primary/30">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
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

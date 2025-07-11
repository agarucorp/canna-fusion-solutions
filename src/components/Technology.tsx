
import { Zap, Thermometer, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TechnologyProps {
  language: string;
}

const Technology = ({ language }: TechnologyProps) => {
  const technologies = [
    {
      icon: Zap,
      title: language === 'es' ? 'Spray Dry Avanzado' : 'Advanced Spray Dry',
      description: language === 'es' 
        ? 'Tecnología de secado por aspersión que preserva los compuestos activos y garantiza solubilidad excepcional.'
        : 'Spray drying technology that preserves active compounds and ensures exceptional solubility.',
      benefits: language === 'es' 
        ? ['Conserva propiedades nutricionales', 'Máxima solubilidad', 'Estabilidad prolongada']
        : ['Preserves nutritional properties', 'Maximum solubility', 'Extended stability']
    },
    {
      icon: Thermometer,
      title: language === 'es' ? 'Solubilidad 6°C' : '6°C Solubility',
      description: language === 'es' 
        ? 'Capacidad única de disolución en agua fría, ideal para bebidas RTD y aplicaciones funcionales.'
        : 'Unique cold water dissolution capability, ideal for RTD beverages and functional applications.',
      benefits: language === 'es' 
        ? ['Sin necesidad de calor', 'Bebidas RTD premium', 'Aplicación inmediata']
        : ['No heat required', 'Premium RTD beverages', 'Immediate application']
    },
    {
      icon: Clock,
      title: language === 'es' ? 'Vida Útil Extendida' : 'Extended Shelf Life',
      description: language === 'es' 
        ? 'Procesos que garantizan estabilidad microbiológica y química durante el almacenamiento prolongado.'
        : 'Processes that guarantee microbiological and chemical stability during extended storage.',
      benefits: language === 'es' 
        ? ['24 meses de vida útil', 'Estabilidad garantizada', 'Reducción de costos']
        : ['24-month shelf life', 'Guaranteed stability', 'Cost reduction']
    },
    {
      icon: Award,
      title: language === 'es' ? 'I+D Personalizado' : 'Custom R&D',
      description: language === 'es' 
        ? 'Desarrollo de formulaciones específicas según requerimientos del cliente y aplicación final.'
        : 'Development of specific formulations according to customer requirements and final application.',
      benefits: language === 'es' 
        ? ['Soluciones a medida', 'Soporte técnico', 'Innovación continua']
        : ['Tailor-made solutions', 'Technical support', 'Continuous innovation']
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Tecnología y Diferenciales' : 'Technology & Differentiators'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Nuestra tecnología canadiense de vanguardia nos permite ofrecer extractos con características únicas en el mercado global.'
              : 'Our cutting-edge Canadian technology allows us to offer extracts with unique characteristics in the global market.'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{tech.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Process Visualization */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {language === 'es' ? 'Nuestro Proceso' : 'Our Process'}
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Materia Prima' : 'Raw Material'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'es' ? 'Selección de ingredientes naturales sin agroquímicos' : 'Selection of natural ingredients without agrochemicals'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚗️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Extracción' : 'Extraction'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'es' ? 'Proceso controlado para preservar compuestos activos' : 'Controlled process to preserve active compounds'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💨</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Spray Dry' : 'Spray Dry'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'es' ? 'Secado por aspersión para máxima solubilidad' : 'Spray drying for maximum solubility'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Empaque' : 'Packaging'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'es' ? 'Envasado hermético para conservar propiedades' : 'Hermetic packaging to preserve properties'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

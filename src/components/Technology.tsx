
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
      <div className="container mx-auto px-4 space-y-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Tecnología' : 'Technology'}
          </h2>
        </div>
        {/* Bloque 1: Spray Dry */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Spray Dry Industrial' : 'Industrial Spray Dry'}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {language === 'es'
                ? 'Nuestro proceso industrial de spray dry garantiza la preservación de compuestos activos, máxima estabilidad y vida útil extendida en todos nuestros extractos. La tecnología de secado por aspersión permite obtener polvos solubles, estables y de alta pureza, ideales para aplicaciones industriales exigentes.'
                : 'Our industrial spray dry process ensures the preservation of active compounds, maximum stability, and extended shelf life in all our extracts. Spray drying technology produces soluble, stable, and high-purity powders, ideal for demanding industrial applications.'}
            </p>
            <ul className="space-y-2 mt-6">
              <li className="flex items-center text-base text-gray-700"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>{language === 'es' ? 'Preservación de propiedades nutricionales y funcionales' : 'Preservation of nutritional and functional properties'}</li>
              <li className="flex items-center text-base text-gray-700"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>{language === 'es' ? 'Alta estabilidad y vida útil prolongada' : 'High stability and extended shelf life'}</li>
              <li className="flex items-center text-base text-gray-700"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>{language === 'es' ? 'Polvos solubles y de alta pureza' : 'Soluble and high-purity powders'}</li>
              <li className="flex items-center text-base text-gray-700"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>{language === 'es' ? 'Procesos certificados y controlados' : 'Certified and controlled processes'}</li>
            </ul>
          </div>
          <div className="flex justify-start">
            <img src="/process.jpg" alt="Spray Dry Industrial" className="rounded-2xl shadow-2xl max-w-md w-full object-cover" />
          </div>
        </div>
        {/* Bloque 2: I+D */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-start md:pl-0 pl-0 order-1 md:order-none">
            <img src="/spray-dry.jpg" alt="I+D y Formulación" className="rounded-2xl shadow-2xl max-w-md w-full object-cover" />
          </div>
          <div className="text-left order-2 md:order-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'I+D y Formulación Personalizada' : 'R&D and Custom Formulation'}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {language === 'es'
                ? 'Contamos con un equipo de I+D dedicado al desarrollo de soluciones a medida para cada cliente y aplicación. Innovamos constantemente en formulaciones, blends y procesos para responder a las tendencias y necesidades del mercado global.'
                : 'We have an R&D team dedicated to developing tailor-made solutions for each client and application. We constantly innovate in formulations, blends, and processes to meet global market trends and needs.'}
            </p>
            <ul className="space-y-2 mt-6">
              <li className="flex items-center text-base text-gray-700"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>{language === 'es' ? 'Desarrollo de productos exclusivos y soporte técnico' : 'Development of exclusive products and technical support'}</li>
              <li className="flex items-center text-base text-gray-700"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>{language === 'es' ? 'Innovación continua en I+D' : 'Continuous innovation in R&D'}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Certificaciones alimenticias */}
      <div className="mt-16">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* ISO 22000 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">📄</span>
            <span className="text-sm mt-2">ISO 22000</span>
          </div>
          {/* HACCP */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🛡️</span>
            <span className="text-sm mt-2">HACCP</span>
          </div>
          {/* FSSC 22000 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🌐</span>
            <span className="text-sm mt-2">FSSC 22000</span>
          </div>
          {/* BRCGS */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🇬🇧</span>
            <span className="text-sm mt-2">BRCGS</span>
          </div>
          {/* IFS */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🏷️</span>
            <span className="text-sm mt-2">IFS</span>
          </div>
          {/* Kosher */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">✡️</span>
            <span className="text-sm mt-2">Kosher</span>
          </div>
          {/* Halal */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🕌</span>
            <span className="text-sm mt-2">Halal</span>
          </div>
          {/* Orgánico */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">��</span>
            <span className="text-sm mt-2">Orgánico</span>
          </div>
          {/* Non-GMO */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🚫🌽</span>
            <span className="text-sm mt-2">Non-GMO</span>
          </div>
          {/* Gluten Free */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">🚫🌾</span>
            <span className="text-sm mt-2">Gluten Free</span>
          </div>
          {/* ISO 9001 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl">📋</span>
            <span className="text-sm mt-2">ISO 9001</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

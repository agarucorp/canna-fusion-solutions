
import { Zap, Thermometer, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

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
    <section
      id="technology"
      className="py-20 bg-gray-50"
    >
      <div className="mx-auto px-4 space-y-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Tecnología' : 'Technology'}
          </h2>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            {language === 'es'
              ? 'Nuestra planta y procesos integran tecnología canadiense de última generación, asegurando calidad, seguridad y trazabilidad en cada lote. La transferencia tecnológica y el know-how de Canadá nos posicionan como referentes en extractos herbales premium.'
              : 'Our facility and processes incorporate cutting-edge Canadian technology, ensuring quality, safety, and traceability in every batch. Technology transfer and Canadian know-how make us leaders in premium herbal extracts.'}
          </p>
        </div>
        {/* Bloque 1: Spray Dry */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 items-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-left md:pl-24">
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
          <div className="flex">
            <motion.img
              src="/process.jpg"
              alt="Spray Dry Industrial"
              className="rounded-2xl shadow-2xl max-w-lg w-full object-cover md:ml-48"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
        {/* Bloque 2: I+D */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 items-start"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex justify-center md:pl-0 md:pr-24 pl-0 order-1 md:order-none">
            <img src="/spray-dry.jpg" alt="I+D y Formulación" className="rounded-2xl shadow-2xl max-w-md w-full object-cover" />
          </div>
          <div className="text-left md:pl-0 md:pr-24 order-2 md:order-none">
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
        </motion.div>
      </div>
      {/* Certificaciones alimenticias */}
      <div className="text-center mb-6 mt-20">
        <span className="uppercase tracking-widest text-2xl text-green-700 font-bold block mb-2">
          {language === 'es' ? 'Certificaciones' : 'Certifications'}
        </span>
        <span className="text-lg text-gray-600">
          {language === 'es'
            ? 'Contamos con múltiples certificados de confianza para nuestros productos.'
            : 'We hold multiple trusted certifications for our products.'}
        </span>
      </div>
      <div className="mt-20">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* ISO 22000 */}
          <img src="/certificaciones/iso22000.png" alt="ISO 22000" className="h-10 w-auto hidden" />
          {/* HACCP */}
          <img src="/certificaciones/haccp.png" alt="HACCP" className="h-10 w-auto hidden" />
          {/* FSSC 22000 */}
          <img src="/certificaciones/fssc22000.png" alt="FSSC 22000" className="h-10 w-auto hidden" />
          {/* BRCGS */}
          <img src="/certificaciones/brcgs.png" alt="BRCGS" className="h-10 w-auto hidden" />
          {/* IFS */}
          <img src="/certificaciones/ifs.png" alt="IFS" className="h-10 w-auto hidden" />
          {/* Kosher */}
          <img src="/certificaciones/kosher.png" alt="Kosher" className="h-10 w-auto" />
          {/* USDA Organic */}
          <img src="/certificaciones/organico.png" alt="USDA Organic" className="h-10 w-auto" />
          {/* Non-GMO */}
          <img src="/certificaciones/nongmo.png" alt="Non-GMO" className="h-10 w-auto" />
          {/* FDA */}
          <img src="/certificaciones/fda.png" alt="FDA" className="h-10 w-auto" />
          {/* GMP */}
          <img src="/certificaciones/gmp-logo.png" alt="GMP" className="h-10 w-auto" />
          {/* Halal */}
          <img src="/certificaciones/halal-logo.png" alt="Halal" className="h-10 w-auto" />
          {/* Gluten Free */}
          <img src="/certificaciones/glutenfree.png" alt="Gluten Free" className="h-10 w-auto hidden" />
          {/* ISO 9001 */}
          <img src="/certificaciones/iso9001.png" alt="ISO 9001" className="h-10 w-auto hidden" />
        </div>
      </div>
    </section>
  );
};

export default Technology;

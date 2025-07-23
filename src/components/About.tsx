
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface AboutProps {
  language: string;
}

const About = ({ language }: AboutProps) => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Quiénes Somos' : 'About Us'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Una empresa binacional que combina la innovación canadiense con la riqueza natural de Paraguay para crear extractos herbales de clase mundial.'
              : 'A binational company that combines Canadian innovation with Paraguay\'s natural wealth to create world-class herbal extracts.'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'es' 
                ? 'Cannlabs S.A. nace de la visión de fusionar la tecnología de procesamiento canadiense con las materias primas autóctonas de Paraguay. Ubicados estratégicamente en Ypacaraí, cerca de los principales puertos internacionales, exportamos al mundo la esencia de la naturaleza paraguaya transformada con la más alta tecnología.'
                : 'Cannlabs S.A. was born from the vision of fusing Canadian processing technology with Paraguay\'s native raw materials. Strategically located in Ypacaraí, near major international ports, we export to the world the essence of Paraguayan nature transformed with the highest technology.'
              }
            </p>
            <p className="text-gray-600 mb-6">
              {language === 'es' 
                ? 'Nuestro enfoque en la sostenibilidad y la calidad nos ha posicionado como líderes regionales en la producción de extractos solubles para mercados globales exigentes. Desarrollamos productos para USA, Irlanda, Alemania, Paraguay, Argentina y multinacionales con presencia global.'
                : 'Our focus on sustainability and quality has positioned us as regional leaders in the production of soluble extracts for demanding global markets. We develop products for USA, Ireland, Germany, Paraguay, Argentina and multinational companies with global presence.'
              }
            </p>
            <p className="text-gray-600 mb-6">
              {language === 'es' 
                ? 'Utilizamos tecnología spray-dry de vanguardia y procesos avanzados para garantizar estándares internacionales de calidad. Nuestros productos son 100% naturales, sin agroquímicos, solo naturaleza pura transformada con la más alta tecnología canadiense.'
                : 'We use cutting-edge spray-dry technology and advanced processes to ensure international quality standards. Our products are 100% natural, without agrochemicals, only pure nature transformed with the highest Canadian technology.'
              }
            </p>
          </div>
          
          <div className="relative">
            <motion.img
              src="/about-history.jpg"
              alt="Natural Processing Facility"
              className="rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

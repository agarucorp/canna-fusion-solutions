
import { Leaf, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface SustainabilityProps {
  language: string;
}

const Sustainability = ({ language }: SustainabilityProps) => {
  const principles = [
    {
      icon: Globe,
      title: language === 'es' ? 'Cero Emisiones Netas' : 'Net Zero Emissions',
      description: language === 'es' 
        ? 'Nuestro compromiso es reducir las emisiones de CO2 en nuestros procesos de spray-dry en un 50% para 2030 y alcanzar cero emisiones netas para 2040.'
        : 'Our commitment is to reduce CO2 emissions in our spray-dry processes by 50% by 2030 and achieve net zero emissions by 2040.',
      color: 'bg-green-600',
      borderColor: 'border-green-600'
    },
    {
      icon: Leaf,
      title: language === 'es' ? 'Suministro Sostenible' : 'Sustainable Supply',
      description: language === 'es' 
        ? 'Garantizamos el abastecimiento ético y sostenible de yerba mate, stevia y té de Paraguay, promoviendo prácticas agrícolas responsables.'
        : 'We ensure ethical and sustainable sourcing of yerba mate, stevia and tea from Paraguay, promoting responsible agricultural practices.',
      color: 'bg-orange-500',
      borderColor: 'border-orange-500'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Nuestra Gente' : 'Our People',
      description: language === 'es' 
        ? 'Valoramos y tratamos justamente a nuestro equipo paraguayo, fomentando el crecimiento profesional y el desarrollo de talento local.'
        : 'We value and treat our Paraguayan team fairly, fostering professional growth and local talent development.',
      color: 'bg-pink-500',
      borderColor: 'border-pink-500'
    }
  ];

  return (
    <section
      id="sustainability"
      className="py-20 bg-white"
    >
      <div className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Sostenibilidad' : 'Sustainability'}
          </h2>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            {language === 'es'
              ? 'En CannLabs, la sostenibilidad es el corazón de nuestro negocio. Integramos prácticas responsables en cada aspecto de nuestra operación, desde el abastecimiento hasta la producción.'
              : 'At CannLabs, sustainability is at the heart of our business. We integrate responsible practices in every aspect of our operation, from sourcing to production.'}
          </p>
        </div>

        {/* Principios de Sostenibilidad */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className={`${principle.color} text-white text-center pb-4`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center ${principle.borderColor} border-2`}>
                      <principle.icon className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold uppercase tracking-wide">
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-center leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sección con imagen */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Gestión de Afluentes' : 'Effluent Management'}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {language === 'es'
                ? 'Implementamos sistemas avanzados de tratamiento de afluentes que garantizan que el agua utilizada en nuestros procesos sea devuelta al medio ambiente en condiciones óptimas, cumpliendo con los más altos estándares ambientales.'
                : 'We implement advanced effluent treatment systems that ensure water used in our processes is returned to the environment in optimal conditions, meeting the highest environmental standards.'}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-base text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                {language === 'es' ? 'Tratamiento biológico avanzado' : 'Advanced biological treatment'}
              </li>
              <li className="flex items-center text-base text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                {language === 'es' ? 'Cumplimiento de normativas ambientales' : 'Environmental regulation compliance'}
              </li>
              <li className="flex items-center text-base text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                {language === 'es' ? 'Monitoreo continuo de calidad' : 'Continuous quality monitoring'}
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <img
                src="/afluentes.jpg"
                alt={language === 'es' ? 'Gestión de Afluentes' : 'Effluent Management'}
                className="rounded-2xl shadow-2xl max-w-lg w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;

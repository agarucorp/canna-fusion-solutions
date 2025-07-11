
import { Leaf, Droplets, Recycle, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SustainabilityProps {
  language: string;
}

const Sustainability = ({ language }: SustainabilityProps) => {
  const commitments = [
    {
      icon: Leaf,
      title: language === 'es' ? 'Agricultura Sin Agroquímicos' : 'Agrochemical-Free Agriculture',
      description: language === 'es' 
        ? 'Trabajamos exclusivamente con productores que practican agricultura orgánica y sostenible, garantizando materias primas libres de pesticidas y químicos.'
        : 'We work exclusively with producers who practice organic and sustainable agriculture, guaranteeing raw materials free from pesticides and chemicals.',
      impact: language === 'es' ? '100% libre de agroquímicos' : '100% agrochemical-free'
    },
    {
      icon: Droplets,
      title: language === 'es' ? 'Gestión Responsable del Agua' : 'Responsible Water Management',
      description: language === 'es' 
        ? 'Implementamos sistemas de reciclaje y tratamiento de agua en nuestros procesos industriales, minimizando el impacto ambiental.'
        : 'We implement water recycling and treatment systems in our industrial processes, minimizing environmental impact.',
      impact: language === 'es' ? '70% reducción consumo' : '70% consumption reduction'
    },
    {
      icon: Recycle,
      title: language === 'es' ? 'Economía Circular' : 'Circular Economy',
      description: language === 'es' 
        ? 'Aprovechamos los subproductos de nuestros procesos para crear valor agregado, reduciendo desperdicios y maximizando la eficiencia.'
        : 'We leverage by-products from our processes to create added value, reducing waste and maximizing efficiency.',
      impact: language === 'es' ? '95% aprovechamiento' : '95% utilization'
    },
    {
      icon: Heart,
      title: language === 'es' ? 'Compromiso Social' : 'Social Commitment',
      description: language === 'es' 
        ? 'Apoyamos a las comunidades locales generando empleo digno y promoviendo el desarrollo sostenible de la región.'
        : 'We support local communities by generating decent employment and promoting sustainable development in the region.',
      impact: language === 'es' ? '200+ empleos locales' : '200+ local jobs'
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Sustentabilidad' : 'Sustainability'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Nuestro compromiso con el medio ambiente y las comunidades locales es fundamental en cada etapa de nuestros procesos.'
              : 'Our commitment to the environment and local communities is fundamental at every stage of our processes.'
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <commitment.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{commitment.title}</CardTitle>
                    <p className="text-sm text-green-600 font-semibold">{commitment.impact}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{commitment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Environmental Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {language === 'es' ? 'Nuestro Impacto Ambiental' : 'Our Environmental Impact'}
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h4 className="text-2xl font-bold text-green-600 mb-2">0</h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Agroquímicos utilizados' : 'Agrochemicals used'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💧</span>
              </div>
              <h4 className="text-2xl font-bold text-blue-600 mb-2">70%</h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Reducción uso de agua' : 'Water usage reduction'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♻️</span>
              </div>
              <h4 className="text-2xl font-bold text-purple-600 mb-2">95%</h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Aprovechamiento residuos' : 'Waste utilization'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-2xl font-bold text-orange-600 mb-2">200+</h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Empleos locales' : 'Local jobs'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {language === 'es' ? 'Certificaciones y Compromisos' : 'Certifications & Commitments'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-green-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {language === 'es' ? 'Orgánico Certificado' : 'Certified Organic'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Materias primas 100% orgánicas' : '100% organic raw materials'}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {language === 'es' ? 'ISO 14001' : 'ISO 14001'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Gestión ambiental certificada' : 'Certified environmental management'}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {language === 'es' ? 'Comercio Justo' : 'Fair Trade'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Prácticas comerciales éticas' : 'Ethical business practices'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

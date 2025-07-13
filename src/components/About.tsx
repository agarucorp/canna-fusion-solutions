import { Globe, Leaf, Award, Factory } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  language: string;
}

const About = ({ language }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                ? 'Nuestro enfoque en la sostenibilidad y la calidad nos ha posicionado como líderes regionales en la producción de extractos solubles para mercados globales exigentes.'
                : 'Our focus on sustainability and quality has positioned us as regional leaders in the production of soluble extracts for demanding global markets.'
              }
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Yerba Mate and Tea Leaves"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {language === 'es' ? 'Alcance Global' : 'Global Reach'}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Exportamos a América del Norte, Europa y Asia' : 'We export to North America, Europe and Asia'}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {language === 'es' ? '100% Natural' : '100% Natural'}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Sin agroquímicos, solo naturaleza pura' : 'No agrochemicals, only pure nature'}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {language === 'es' ? 'Calidad Premium' : 'Premium Quality'}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Estándares internacionales de calidad' : 'International quality standards'}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {language === 'es' ? 'Tecnología Avanzada' : 'Advanced Technology'}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Spray-dry y procesos de vanguardia' : 'Spray-dry and cutting-edge processes'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Globe, MapPin, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface InternationalProps {
  language: string;
}

const International = ({ language }: InternationalProps) => {
  const markets = [
    {
      region: language === 'es' ? 'América del Norte' : 'North America',
      countries: ['Estados Unidos', 'Canadá', 'México'],
      growth: '+25%',
      color: 'bg-blue-500'
    },
    {
      region: language === 'es' ? 'Europa' : 'Europe',
      countries: ['Alemania', 'Francia', 'Reino Unido', 'Países Bajos'],
      growth: '+18%',
      color: 'bg-green-500'
    },
    {
      region: language === 'es' ? 'Asia Pacífico' : 'Asia Pacific',
      countries: ['Japón', 'Corea del Sur', 'Australia', 'Singapur'],
      growth: '+32%',
      color: 'bg-purple-500'
    },
    {
      region: language === 'es' ? 'América Latina' : 'Latin America',
      countries: ['Brasil', 'Argentina', 'Chile', 'Colombia'],
      growth: '+15%',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Alcance Internacional' : 'International Reach'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Desde Paraguay hacia el mundo, exportamos nuestros extractos a más de 15 países en 4 continentes.'
              : 'From Paraguay to the world, we export our extracts to more than 15 countries across 4 continents.'
            }
          </p>
        </div>
        
        {/* World Map Representation */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Global Network"
                className="w-full h-64 object-cover rounded-xl opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-20 w-20 text-green-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                  <p className="text-gray-600">
                    {language === 'es' ? 'Países de Destino' : 'Destination Countries'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {markets.map((market, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-4 h-4 rounded-full ${market.color}`}></div>
                  <span className="text-green-600 font-semibold">{market.growth}</span>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-3">{market.region}</h4>
                
                <ul className="space-y-1">
                  {market.countries.map((country, countryIndex) => (
                    <li key={countryIndex} className="text-sm text-gray-600 flex items-center">
                      <MapPin className="h-3 w-3 mr-2 text-gray-400" />
                      {country}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">23%</h3>
              <p className="text-gray-600">
                {language === 'es' ? 'Crecimiento Anual Promedio' : 'Average Annual Growth'}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">
                {language === 'es' ? 'Clientes Internacionales' : 'International Clients'}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">
                {language === 'es' ? 'Productos Exportados' : 'Products Exported'}
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Strategic Location */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Ubicación Estratégica' : 'Strategic Location'}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Cannlabs S.A. está ubicada en Ypacaraí, Paraguay, con acceso directo a los principales puertos internacionales del Río de la Plata, facilitando la exportación eficiente a mercados globales.'
                : 'Cannlabs S.A. is located in Ypacaraí, Paraguay, with direct access to the main international ports of the Río de la Plata, facilitating efficient export to global markets.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;

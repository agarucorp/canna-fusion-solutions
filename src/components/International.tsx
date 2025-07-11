
import { Globe, MapPin, Factory, Anchor } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface InternationalProps {
  language: string;
}

const International = ({ language }: InternationalProps) => {
  const markets = [
    {
      region: language === 'es' ? 'América del Norte' : 'North America',
      countries: ['Estados Unidos', 'Canadá', 'México'],
      color: 'bg-blue-500'
    },
    {
      region: language === 'es' ? 'Europa' : 'Europe',
      countries: ['Alemania', 'Francia', 'Reino Unido', 'Países Bajos'],
      color: 'bg-green-500'
    },
    {
      region: language === 'es' ? 'Asia Pacífico' : 'Asia Pacific',
      countries: ['Japón', 'Corea del Sur', 'Australia', 'Singapur'],
      color: 'bg-purple-500'
    },
    {
      region: language === 'es' ? 'América Latina' : 'Latin America',
      countries: ['Brasil', 'Argentina', 'Chile', 'Colombia'],
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
              ? 'Desde Paraguay hacia el mundo, exportamos nuestros extractos a mercados selectos en 4 continentes.'
              : 'From Paraguay to the world, we export our extracts to select markets across 4 continents.'
            }
          </p>
        </div>
        
        {/* World Map with Distribution Points */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Global Distribution Network"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8">
                  <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'es' ? 'Distribución Global' : 'Global Distribution'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'es' ? 'Presencia en mercados selectos de 4 continentes' : 'Presence in select markets across 4 continents'}
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">🇺🇸 USA</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">🇩🇪 Europe</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">🇯🇵 Asia</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">🇧🇷 LATAM</span>
                  </div>
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
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full ${market.color} mr-3`}></div>
                  <h4 className="font-bold text-gray-900">{market.region}</h4>
                </div>
                
                <ul className="space-y-2">
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
        
        {/* Strategic Location Emphasis */}
        <div className="bg-green-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'es' ? 'Ubicación Estratégica' : 'Strategic Location'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'es' 
                  ? 'Cannlabs S.A. está ubicada en Ypacaraí, Paraguay, con acceso directo a los principales puertos internacionales del Río de la Plata. Esta posición privilegiada nos permite exportar eficientemente a mercados globales con costos competitivos.'
                  : 'Cannlabs S.A. is located in Ypacaraí, Paraguay, with direct access to the main international ports of the Río de la Plata. This privileged position allows us to export efficiently to global markets with competitive costs.'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Anchor className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    {language === 'es' ? 'Acceso portuario' : 'Port access'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Factory className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    {language === 'es' ? 'Hub logístico' : 'Logistics hub'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Paraguay Strategic Location"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;

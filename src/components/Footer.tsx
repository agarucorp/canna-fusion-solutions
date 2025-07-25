
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8">
            <img src="/logo-cannlabs.png" alt="CannLabs Logo" className="h-14 w-auto object-contain opacity-80" />
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'es' ? 'Productos' : 'Products'}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{language === 'es' ? 'Yerba Mate Soluble' : 'Soluble Yerba Mate'}</li>
              <li>{language === 'es' ? 'Extractos de Té' : 'Tea Extracts'}</li>
              <li>{language === 'es' ? 'Stevia Natural' : 'Natural Stevia'}</li>
              <li>{language === 'es' ? 'Blends Personalizados' : 'Custom Blends'}</li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'es' ? 'Empresa' : 'Company'}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{language === 'es' ? 'Quiénes Somos' : 'About Us'}</li>
              <li>{language === 'es' ? 'Tecnología' : 'Technology'}</li>
              <li>{language === 'es' ? 'Sustentabilidad' : 'Sustainability'}</li>
              <li>{language === 'es' ? 'Certificaciones' : 'Certifications'}</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@cannlabs.com.py</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+595 984 299188</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ypacaraí, Paraguay</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>{language === 'es' ? 'Exportamos globalmente' : 'Global exports'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Cannlabs S.A. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {language === 'es' ? 'Términos de Uso' : 'Terms of Use'}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {language === 'es' ? 'Cookies' : 'Cookies'}
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6">
          <a
            href="https://www.agarucorp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-sm text-center no-underline hover:text-white transition-colors cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            © Powered by AgaruCorp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe, Whatsapp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface ContactProps {
  language: string;
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'es' ? 'Mensaje enviado exitosamente. Te contactaremos pronto.' : 'Message sent successfully. We will contact you soon.');
    setFormData({ name: '', company: '', phone: '', interest: '', message: '' });
  };

  const interests = language === 'es' 
    ? ['Yerba Mate Soluble', 'Extractos de Té', 'Stevia Natural', 'Blends Personalizados', 'Otros']
    : ['Soluble Yerba Mate', 'Tea Extracts', 'Natural Stevia', 'Custom Blends', 'Others'];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Contacto Comercial' : 'Commercial Contact'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Conecta con nuestro equipo comercial para explorar cómo nuestros extractos pueden potenciar tus productos.'
              : 'Connect with our commercial team to explore how our extracts can enhance your products.'
            }
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 h-full">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg w-full max-w-xl mx-auto h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                {language === 'es' ? 'Solicitar Información' : 'Request Information'}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Nombre *' : 'Name *'}
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Empresa *' : 'Company *'}
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder={language === 'es' ? 'Nombre de tu empresa' : 'Your company name'}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Teléfono *' : 'Phone *'}
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder={language === 'es' ? 'Tu número de teléfono' : 'Your phone number'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Interés *' : 'Interest *'}
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, interest: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'es' ? 'Selecciona un producto' : 'Select a product'} />
                      </SelectTrigger>
                      <SelectContent>
                        {interests.map((interest, index) => (
                          <SelectItem key={index} value={interest}>
                            {interest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' ? 'Mensaje' : 'Message'}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={language === 'es' 
                      ? 'Cuéntanos sobre tu proyecto y requerimientos específicos...'
                      : 'Tell us about your project and specific requirements...'
                    }
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  <Send className="mr-2 h-4 w-4" />
                  {language === 'es' ? 'Enviar Solicitud' : 'Send Request'}
                </Button>
                
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6 h-full">
            <Card className="border-0 shadow-lg w-full max-w-xl mx-auto h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-green-600" />
                  {language === 'es' ? 'Contacto Directo' : 'Direct Contact'}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                {/* WhatsApp Contact */}
                <div className="flex items-center space-x-3">
                  <Whatsapp className="h-5 w-5 text-green-600" />
                  <a
                    href="https://wa.me/595984299188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-green-700 hover:underline"
                  >
                    {language === 'es' ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp'}
                  </a>
                </div>
                {/* Existing contact methods */}
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">comercial@cannlabs.com</p>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Equipo comercial' : 'Commercial team'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">+595 21 XXX-XXXX</p>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Lunes a viernes, 8:00 - 17:00' : 'Monday to Friday, 8:00 - 17:00'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Ypacaraí, Paraguay</p>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Acceso a puertos internacionales' : 'Access to international ports'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

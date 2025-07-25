
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from 'framer-motion';
import * as emailjs from '@emailjs/browser';

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

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    company: false,
    phone: false,
    interest: false,
    message: false
  });

  const validate = (field: string, value: string) => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : (language === 'es' ? 'El nombre es obligatorio.' : 'Name is required.');
      case 'company':
        return value.trim() ? '' : (language === 'es' ? 'La empresa es obligatoria.' : 'Company is required.');
      case 'phone':
        if (!value.trim()) return language === 'es' ? 'El teléfono es obligatorio.' : 'Phone is required.';
        if (value.length < 8) return language === 'es' ? 'El teléfono debe tener al menos 8 números.' : 'Phone must be at least 8 digits.';
        if (value.length > 13) return language === 'es' ? 'El teléfono no puede tener más de 13 números.' : 'Phone cannot be more than 13 digits.';
        return '';
      case 'interest':
        return value.trim() ? '' : (language === 'es' ? 'El interés es obligatorio.' : 'Interest is required.');
      case 'message':
        return value.trim() ? '' : (language === 'es' ? 'El mensaje es obligatorio.' : 'Message is required.');
      default:
        return '';
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: validate(field, value) }));
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validate(field, formData[field as keyof typeof formData]) }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.company.trim() &&
      formData.phone.trim() &&
      formData.interest.trim() &&
      formData.message.trim() &&
      Object.values(errors).every(e => !e)
    );
  };

  // Al enviar, marcar todos como tocados para mostrar errores si los hay
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, company: true, phone: true, interest: true, message: true });
    // Validar todos los campos antes de enviar
    const newErrors: any = {};
    Object.keys(formData).forEach(field => {
      newErrors[field] = validate(field, (formData as any)[field]);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).some(e => e)) return;
    setLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const templateParams = { ...formData };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success(language === 'es' ? 'Mensaje enviado exitosamente. Te contactaremos pronto.' : 'Message sent successfully. We will contact you soon.');
      setFormData({ name: '', company: '', phone: '', interest: '', message: '' });
      setErrors({ name: '', company: '', phone: '', interest: '', message: '' });
    } catch (error) {
      toast.error(language === 'es' ? 'Hubo un error al enviar el mensaje. Intenta nuevamente.' : 'There was an error sending the message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const interests = language === 'es' 
    ? ['Yerba Mate Soluble', 'Extractos de Té', 'Stevia Natural', 'Blends Personalizados', 'Otros']
    : ['Soluble Yerba Mate', 'Tea Extracts', 'Natural Stevia', 'Custom Blends', 'Others'];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
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
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                    />
                    {(touched.name || Object.values(touched).some(Boolean)) && errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Empresa *' : 'Company *'}
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                      placeholder={language === 'es' ? 'Nombre de tu empresa' : 'Your company name'}
                    />
                    {(touched.company || Object.values(touched).some(Boolean)) && errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Teléfono *' : 'Phone *'}
                    </label>
                    <Input
                      required
                      type="number"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      placeholder={language === 'es' ? 'Tu número de teléfono' : 'Your phone number'}
                      style={{ MozAppearance: 'textfield' }}
                      className="[appearance:textfield]"
                      onWheel={e => (e.target as HTMLInputElement).blur()} // Evita scroll accidental
                    />
                    {(touched.phone || Object.values(touched).some(Boolean)) && errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'es' ? 'Interés *' : 'Interest *'}
                    </label>
                    <Select onValueChange={(value) => {
                      handleChange('interest', value);
                      setTouched(prev => ({ ...prev, interest: true }));
                    }}>
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
                    {(touched.interest || Object.values(touched).some(Boolean)) && errors.interest && <p className="text-red-600 text-xs mt-1">{errors.interest}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'es' ? 'Mensaje' : 'Message'}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder={language === 'es' 
                      ? 'Cuéntanos sobre tu proyecto y requerimientos específicos...'
                      : 'Tell us about your project and specific requirements...'
                    }
                    rows={4}
                  />
                  {(touched.message || Object.values(touched).some(Boolean)) && errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3" disabled={loading || !isFormValid()}>
                  <Send className="mr-2 h-4 w-4" />
                  {loading
                    ? (language === 'es' ? 'Enviando...' : 'Sending...')
                    : (language === 'es' ? 'Enviar Solicitud' : 'Send Request')}
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
              <CardContent className="flex flex-col gap-3">
                {/* WhatsApp Contact */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#25D366"/>
                    </svg>
                  </div>
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
                    <p className="font-medium text-gray-900">info@cannlabs.com.py</p>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Equipo comercial' : 'Commercial team'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">+595 984 299188</p>
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
                {/* Google Maps */}
                <motion.div
                  className="w-full mt-4 rounded-xl overflow-hidden"
                  style={{height: '180px'}}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.073964479836!2d-57.5891496!3d-25.2757206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da6198536dc43%3A0xa98b59c3f2cddc74!2sLas%20Lomas%2C%20Asunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses-419!2spy!4v1689273600000!5m2!1ses-419!2spy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación en Google Maps"
                  ></iframe>
                </motion.div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

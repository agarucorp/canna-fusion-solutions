
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-white" />
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('es')}
        className="text-xs"
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;

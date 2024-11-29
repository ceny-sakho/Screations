import Navigation from '../components/Navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { AlertCircle, Truck, ThermometerSnowflake, FileText } from 'lucide-react';

const Aide = () => {
  const sections = [
    { 
      title: 'Allergènes', 
      href: '/aide/allergenes',
      icon: <AlertCircle className="h-8 w-8 text-accent" />,
      description: 'Informations sur les allergènes présents dans nos créations'
    },
    { 
      title: 'Transport', 
      href: '/aide/transport',
      icon: <Truck className="h-8 w-8 text-accent" />,
      description: 'Conditions et conseils pour le transport de vos gâteaux'
    },
    { 
      title: 'Conservation', 
      href: '/aide/conservation',
      icon: <ThermometerSnowflake className="h-8 w-8 text-accent" />,
      description: 'Comment conserver vos pâtisseries dans les meilleures conditions'
    },
    { 
      title: 'Devis sur mesure', 
      href: '/aide/devis',
      icon: <FileText className="h-8 w-8 text-accent" />,
      description: 'Demandez un devis personnalisé pour votre projet'
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Comment pouvons-nous vous aider ?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sections.map((section) => (
            <Link key={section.title} to={section.href}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {section.icon}
                    <h2 className="text-2xl font-playfair font-semibold">
                      {section.title}
                    </h2>
                    <p className="text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aide;
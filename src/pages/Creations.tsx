import Navigation from '../components/Navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Creations = () => {
  const categories = [
    { title: 'Layer Cakes', href: '/creations/layer-cakes', image: '/lovable-uploads/b4c4f8d7-66da-492c-9e78-0ce71e5db02d.png' },
    { title: 'Number Cakes', href: '/creations/number-cakes', image: '/lovable-uploads/89ec154e-c499-44ca-b303-3cd65c4f7a46.png' },
    { title: 'Cupcakes', href: '/creations/cupcakes', image: '/lovable-uploads/677afdb1-eda2-4ec0-865f-e10dee321b53.png' },
    { title: 'Sablés', href: '/creations/sables', image: '/lovable-uploads/c79cb987-9e87-455e-aea5-b5fc329c494f.png' },
    { title: 'Cookies', href: '/creations/cookies', image: '/lovable-uploads/963216bf-fe89-4b1e-a388-eb7f3d232f7b.png' },
    { title: 'Pop Cakes', href: '/creations/pop-cakes', image: '/lovable-uploads/acb54346-f410-41b7-bc1d-fd9392300b6a.png' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Nos Créations
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.title} to={category.href}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-playfair font-semibold text-center">
                    {category.title}
                  </h2>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creations;
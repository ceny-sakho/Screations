import Navigation from '../components/Navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Creations = () => {
  const categories = [
    { title: 'Layer Cakes', href: '/creations/layer-cakes', image: '/lovable-uploads/e6cdec3e-6139-4db5-88da-ed8e2d9a6275.png' },
    { title: 'Number Cakes', href: '/creations/number-cakes', image: '/lovable-uploads/89ec154e-c499-44ca-b303-3cd65c4f7a46.png' },
    { title: 'Cupcakes', href: '/creations/cupcakes', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e' },
    { title: 'Sablés', href: '/creations/sables', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9' },
    { title: 'Cookies', href: '/creations/cookies', image: '/lovable-uploads/941dd3a8-dd72-4764-8750-14dfe2edffe0.png' },
    { title: 'Pop Cakes', href: '/creations/pop-cakes', image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce' },
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
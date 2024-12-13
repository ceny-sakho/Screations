import Navigation from '../../components/Navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Commander = () => {
  const categories = [
    {
      title: 'Layer Cakes',
      price: 'À partir de 65€',
      image: '/lovable-uploads/4b2226e4-3693-42c3-af72-7c356dbefa50.png',
      href: '/creations/layer-cakes'
    },
    {
      title: 'Number Cakes',
      price: 'À partir de 55€',
      image: '/lovable-uploads/89ec154e-c499-44ca-b303-3cd65c4f7a46.png',
      href: '/creations/number-cakes'
    },
    {
      title: 'Cupcakes',
      price: '4€ pièce',
      image: '/lovable-uploads/677afdb1-eda2-4ec0-865f-e10dee321b53.png',
      href: '/creations/cupcakes'
    },
    {
      title: 'Sablés',
      price: '3€ pièce',
      image: '/lovable-uploads/c79cb987-9e87-455e-aea5-b5fc329c494f.png',
      href: '/creations/sables'
    },
    {
      title: 'Cookies',
      price: '2.50€ pièce',
      image: '/lovable-uploads/963216bf-fe89-4b1e-a388-eb7f3d232f7b.png',
      href: '/creations/cookies'
    },
    {
      title: 'Pop Cakes',
      price: '2€ pièce',
      image: '/lovable-uploads/acb54346-f410-41b7-bc1d-fd9392300b6a.png',
      href: '/creations/pop-cakes'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Commander en ligne
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-semibold text-center mb-2">
                  {category.title}
                </h2>
                <p className="text-accent text-center font-semibold mb-4">
                  {category.price}
                </p>
                <div className="flex justify-center">
                  <Link to="/aide/devis">
                    <Button>
                      Commander
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commander;
import { useState } from 'react';
import { Cake, Cookie, IceCream } from 'lucide-react';

const creations = [
  {
    title: "Layer Cakes",
    icon: <Cake className="text-accent" size={24} />,
    description: "Gâteaux à étages personnalisés pour vos événements",
    image: "/lovable-uploads/5ed06c49-5d72-4552-ba68-d1db54d39764.png"
  },
  {
    title: "Cookies & Sablés",
    icon: <Cookie className="text-accent" size={24} />,
    description: "Biscuits décorés avec finesse",
    image: "/lovable-uploads/e7aa273a-2f93-4936-9b01-0a34cc91539e.png"
  },
  {
    title: "Cupcakes",
    icon: <IceCream className="text-accent" size={24} />,
    description: "Petites douceurs personnalisées",
    image: "/lovable-uploads/677afdb1-eda2-4ec0-865f-e10dee321b53.png"
  }
];

const CreationsGallery = () => {
  return (
    <section id="creations" className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
          Nos Créations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creations.map((creation, index) => (
            <div
              key={creation.title}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                       transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={creation.image}
                  alt={creation.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {creation.icon}
                  <h3 className="text-xl font-playfair font-semibold">{creation.title}</h3>
                </div>
                <p className="text-gray-600">{creation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreationsGallery;
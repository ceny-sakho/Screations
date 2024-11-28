import { useState } from 'react';
import { Cake, Cookie, IceCream } from 'lucide-react';

const creations = [
  {
    title: "Layer Cakes",
    icon: <Cake className="text-accent" size={24} />,
    description: "Gâteaux à étages personnalisés pour vos événements",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Cookies & Sablés",
    icon: <Cookie className="text-accent" size={24} />,
    description: "Biscuits décorés avec finesse",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Cupcakes",
    icon: <IceCream className="text-accent" size={24} />,
    description: "Petites douceurs personnalisées",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
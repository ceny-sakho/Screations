import Navigation from '../../components/Navigation';

const Sables = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Sablés
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e" 
              alt="Sablé Example" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-2">Sablés Décorés</h2>
              <p className="text-gray-600 mb-4">Sablés artisanaux décorés à la main.</p>
              <p className="text-accent font-semibold">À partir de 3€ pièce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sables;
import Navigation from '../../components/Navigation';

const NumberCakes = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Number Cakes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587" 
              alt="Number Cake Example" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-2">Number Cake Fruits Rouges</h2>
              <p className="text-gray-600 mb-4">Gâteau en forme de chiffre garni de fruits rouges frais.</p>
              <p className="text-accent font-semibold">À partir de 55€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCakes;
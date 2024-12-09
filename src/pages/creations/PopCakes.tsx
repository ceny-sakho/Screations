import Navigation from '../../components/Navigation';

const PopCakes = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Pop Cakes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/7088e823-03bd-4d76-b85f-bcaa08a51221.png" 
              alt="Pop Cake Example" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-2">Pop Cakes Festifs</h2>
              <p className="text-gray-600 mb-4">Délicieuses bouchées de gâteau sur bâtonnet.</p>
              <p className="text-accent font-semibold">2€ pièce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopCakes;
import Navigation from '../../components/Navigation';

const LayerCakes = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Layer Cakes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder content - to be replaced with actual layer cakes */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1535141192574-5d4897c12636" 
              alt="Layer Cake Example" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-2">Gâteau Élégant</h2>
              <p className="text-gray-600 mb-4">Un délicieux layer cake à trois étages parfait pour vos événements spéciaux.</p>
              <p className="text-accent font-semibold">À partir de 65€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerCakes;
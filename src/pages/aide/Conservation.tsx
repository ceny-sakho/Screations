import Navigation from '../../components/Navigation';

const Conservation = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Conservation
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-playfair font-semibold mb-4">
              Conseils de Conservation
            </h2>
            <p className="text-gray-600 mb-4">
              Pour préserver la fraîcheur de nos créations :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Conserver au réfrigérateur entre 4°C et 6°C</li>
              <li>Consommer dans les 72h pour une qualité optimale</li>
              <li>Éviter l'exposition directe au soleil</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conservation;
import Navigation from '../../components/Navigation';

const Transport = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Transport
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-playfair font-semibold mb-4">
              Conditions de Transport
            </h2>
            <p className="text-gray-600 mb-4">
              Pour garantir la qualité optimale de nos créations, nous vous recommandons :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>De transporter le gâteau à plat dans le coffre ou au pied du siège passager</li>
              <li>D'éviter les freinages brusques et de prendre les virages avec beaucoup de précaution</li>
              <li>De maintenir une température fraîche (éviter le soleil direct)</li>
              <li>De ne pas empiler d'autres objets sur la boîte</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
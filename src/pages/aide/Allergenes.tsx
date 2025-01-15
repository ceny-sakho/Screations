import Navigation from '../../components/Navigation';

const Allergenes = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Allergènes
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="py-4 text-left">Produit</th>
                <th className="py-4 text-left">Allergènes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4">Layer Cakes</td>
                <td className="py-4">Œufs, Lait, Gluten</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4">Number Cake</td>
                <td className="py-4">Œufs, Lait, Gluten</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4">Cupcakes</td>
                <td className="py-4">Œufs, Lait, Gluten</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4">Sablés</td>
                <td className="py-4">Œufs, Gluten</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4">Popcakes</td>
                <td className="py-4">Œufs, Gluten, Lait</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allergenes;
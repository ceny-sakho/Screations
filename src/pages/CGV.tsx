import Navigation from '../components/Navigation';

const CGV = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Conditions Générales de Vente
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-playfair font-semibold mb-4">
              Conditions de commande
            </h2>
            <p className="text-gray-600">
              Toute commande doit être passée au minimum 2 semaines à l'avance. Un acompte de 30% est demandé à la confirmation de la commande.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-playfair font-semibold mb-4">
              Modalités de paiement
            </h2>
            <p className="text-gray-600">
              Nous acceptons les paiements par carte bancaire, virement bancaire et espèces. Le solde doit être réglé au plus tard lors du retrait de la commande.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-playfair font-semibold mb-4">
              Mentions légales
            </h2>
            <p className="text-gray-600">
              SCréations - Entreprise individuelle<br />
              SIRET : XX XXX XXX XXX XXX<br />
              Adresse : XX rue XXXXX, XXXXX Ville
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CGV;
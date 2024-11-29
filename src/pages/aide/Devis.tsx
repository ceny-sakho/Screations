import Navigation from '../../components/Navigation';
import ContactForm from '../../components/ContactForm';

const Devis = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Demande de Devis
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Devis;
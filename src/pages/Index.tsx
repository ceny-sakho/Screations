import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CreationsGallery from '../components/CreationsGallery';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CreationsGallery />
      <ContactForm />
    </div>
  );
};

export default Index;
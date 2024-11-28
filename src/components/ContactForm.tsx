import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', event: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-primary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
          Demander un devis
        </h2>
        
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent/20 
                         focus:border-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent/20 
                         focus:border-accent outline-none transition-colors"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type d'événement
            </label>
            <input
              type="text"
              value={formData.event}
              onChange={(e) => setFormData({ ...formData, event: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent/20 
                       focus:border-accent outline-none transition-colors"
              placeholder="Mariage, Anniversaire, etc."
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Votre message
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent/20 
                       focus:border-accent outline-none transition-colors"
              placeholder="Décrivez votre projet..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-accent text-white px-6 py-3 rounded-md font-medium flex items-center 
                     justify-center gap-2 hover:bg-accent/90 transition-colors"
          >
            <Send size={20} />
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
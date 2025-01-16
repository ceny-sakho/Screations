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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://nwihftegillpqrhxlatl.supabase.co/functions/v1/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53aWhmdGVnaWxscHFyaHhsYXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMTk1NTMsImV4cCI6MjA1MjU5NTU1M30.fxukJq7eJ0US_oYxFuoYOappxUNs47WEC5GkZGuNRRQ'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du devis');
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setFormData({ name: '', email: '', event: '', message: '' });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-accent text-white px-6 py-3 rounded-md font-medium flex items-center 
                     justify-center gap-2 hover:bg-accent/90 transition-colors disabled:opacity-50 
                     disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            <Send size={20} />
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
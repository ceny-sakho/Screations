const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-primary/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 text-center relative animate-fade-up">
        <img 
          src="/lovable-uploads/37bbcd03-06f1-4b76-8d73-515940011b16.png" 
          alt="S'Créations Logo" 
          className="mx-auto mb-8 w-24 h-24 mix-blend-multiply"
        />
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
          L'émotion se déguste
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Des gâteaux sur mesure qui capturent vos plus beaux moments
        </p>
        <a
          href="#contact"
          className="inline-block bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium 
                   hover:bg-secondary/90 transition-colors duration-300"
        >
          Demander un devis
        </a>
      </div>
    </div>
  );
};

export default Hero;
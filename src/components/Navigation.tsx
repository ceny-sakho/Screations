import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Créations', href: '#creations' },
    { label: 'Aide', href: '#aide' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-cream/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <img src="/logo.png" alt="SCréations Logo" className="h-12 w-12" />
            <span className="text-2xl font-playfair font-bold text-gray-800">SCréations</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover-link text-gray-800"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-cream/95 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
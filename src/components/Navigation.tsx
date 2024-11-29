import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    { 
      label: 'Accueil', 
      href: '/' 
    },
    {
      label: 'Créations',
      href: '/creations',
      submenu: [
        { label: 'Layer Cakes', href: '/creations/layer-cakes' },
        { label: 'Number Cakes', href: '/creations/number-cakes' },
        { label: 'Cupcakes', href: '/creations/cupcakes' },
        { label: 'Sablés', href: '/creations/sables' },
        { label: 'Cookies', href: '/creations/cookies' },
        { label: 'Pop Cakes', href: '/creations/pop-cakes' },
      ]
    },
    {
      label: 'Aide',
      href: '/aide',
      submenu: [
        { label: 'Allergènes', href: '/aide/allergenes' },
        { label: 'Transport', href: '/aide/transport' },
        { label: 'Conservation', href: '/aide/conservation' },
        { label: 'Devis sur mesure', href: '/aide/devis' },
      ]
    },
    { 
      label: 'CGV', 
      href: '/cgv' 
    },
  ];

  const toggleSubmenu = (label: string) => {
    if (activeSubmenu === label) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(label);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-cream/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-playfair font-bold text-gray-800">SCréations</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <div className="flex items-center space-x-1">
                  <Link
                    to={item.href}
                    className="hover-link text-gray-800"
                    onClick={() => item.submenu && toggleSubmenu(item.label)}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="inline ml-1 h-4 w-4" />
                    )}
                  </Link>
                </div>
                
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-gray-900"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
                <div key={item.label}>
                  <div
                    className="flex items-center justify-between py-2"
                    onClick={() => item.submenu && toggleSubmenu(item.label)}
                  >
                    <Link
                      to={item.href}
                      className="text-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                  
                  {item.submenu && activeSubmenu === item.label && (
                    <div className="pl-4 py-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block py-2 text-sm text-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
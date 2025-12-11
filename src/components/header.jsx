import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white">
              <span className="text-primary">Data</span> x <span className="text-primary">Code</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Accueil
              </a>
              <a href="#about" className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                À Propos
              </a>
              <a href="#skills" className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Compétences
              </a>
              <a href="#projects" className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Projets
              </a>
              <a href="#education" className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Formation
              </a>
              <a href="#contact" className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-700">
              <a
                href="#home"
                className="text-white hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a
                href="#about"
                className="text-white hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                À Propos
              </a>
              <a
                href="#skills"
                className="text-white hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Compétences
              </a>
              <a
                href="#projects"
                className="text-white hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Projets
              </a>
              <a
                href="#education"
                className="text-white hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Formation
              </a>
              <a
                href="#contact"
                className="text-white hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

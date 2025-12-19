
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Maurice-06', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/maurice-birame-diouf-a967a6354/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:mauricebiramed@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">

              <span className="text-2xl font-bold">
                Maurice Birame Diouf<span className="text-blue-400"></span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Data Analyst & Développeur Full Stack passionné par la transformation de données
              en insights actionnables. Spécialisé en analyse de données et développement web.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center text-xl transition-colors duration-300 hover:text-blue-400"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm">Email</p>
                  <a href="mailto:mauricebiramed@gmail.com" className="hover:text-white">
                    mauricebiramed@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm">Téléphone</p>
                  <a href="tel:+221778656961" className="hover:text-white">
                    +221 77 865 69 61
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Maurice Birame DIOUF. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-center md:text-right flex items-center gap-1">
              Développé avec passion<passion className="text-red-500 animate-pulse" /> en utilisant React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
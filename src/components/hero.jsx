
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';


const Hero = () => {

  const handleDownloadCV = () => {
    // Ouvrir le CV dans une nouvelle fenêtre
    window.open('/ cv/CV Maurice Birame DIOUF.pdf', '_blank');
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Maurice-06', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/maurice-birame-diouf-a967a6354/', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://x.com/bir868', label: 'Twitter' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Section Photo et Infos */}
          <div className="lg:w-2/5 order-2 lg:order-1">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto overflow-hidden border-8 border-white shadow-2xl">
                {/* Remplacez ceci par votre photo */}
                <img
                  src="/images/Profil.png"
                  alt="Maurice Birame DIOUF"
                  className="w-full h-full object-cover"
                />
              </div>


              {/* Badges d'info flottants */}




            </div>

            {/* Section Réseaux Sociaux sous la photo */}
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-4">Suivez-moi sur les réseaux</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center text-2xl text-blue-400 hover:from-blue-800 hover:to-blue-700 hover:text-blue-300 hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Section Présentation */}
          <div className="lg:w-3/5 order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Data x Code
              </span>
              <br />
              <span className="text-3xl md:text-4xl">Maurice Birame DIOUF</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              Data Analyst | Full-Stack Developer
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Passionné par la fusion des données et du code, je transforme des insights analytiques en solutions technologiques robustes.
              En quête d'un poste junior où je pourrai appliquer mon expertise double en analyse de données et développement full-stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={handleDownloadCV}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FaDownload />
                Voir CV
              </button>

              <a
                href="#contact"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Me Contacter
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>Malika, Dakar</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span>+221 77 865 69 61</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
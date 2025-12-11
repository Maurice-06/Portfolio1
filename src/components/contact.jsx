import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      href: 'https://github.com/Maurice-06',
      label: 'GitHub',
      username: 'Maurice-06',
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-900 hover:to-black'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: 'https://linkedin.com/in/ton-username',
      label: 'LinkedIn',
      username: 'Maurice Birame DIOUF',
      color: 'from-blue-700 to-blue-800',
      hoverColor: 'hover:from-blue-800 hover:to-blue-900'
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      href: 'https://x.com/bir868',
      label: 'Twitter',
      username: 'bir868',
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      href: 'mailto:mauricebiramed@gmail.com',
      label: 'Email',
      username: 'mauricebiramed@gmail.com',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer l'email
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Contactez-moi</h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Discutons de vos projets et collaborons pour créer quelque chose d'extraordinaire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Restons connectés</h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href="mailto:mauricebiramed@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    mauricebiramed@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Téléphone</h4>
                  <a href="tel:+221778656961" className="text-gray-300 hover:text-white transition-colors">
                    +221 77 865 69 61
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Localisation</h4>
                  <p className="text-gray-300">Malika, Dakar, Sénégal</p>
                </div>
              </div>
            </div>

            {/* Section Réseaux Sociaux */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Suivez-moi sur les réseaux</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl p-4 transition-all duration-300 transform hover:-translate-y-1 group`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-bold">{social.label}</p>
                        <p className="text-sm text-gray-300 group-hover:text-white">{social.username}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">Envoyez-moi un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
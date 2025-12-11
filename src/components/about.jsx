import { FaUser, FaGraduationCap, FaHeart, FaLanguage } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-900 to-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">À Propos de Moi</h2>
          <p className="section-subtitle">
            <span className="text-primary font-bold">Data x Code</span> : Fusionnant analyse de données et développement pour créer des solutions innovantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Profil */}
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-900/20 rounded-2xl flex items-center justify-center">
                <FaUser className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Profil Professionnel</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Étudiant motivé en 3ème année de Licence Sciences des Données à BEM TECH, spécialisé en analyse de données.
              Engagé dans des projets techniques et à la Pastorale des Enfants, alliant compétences analytiques et sens du service.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Formation</p>
                  <p className="text-gray-600">Licence 3 Sciences des Données - BEM TECH</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaHeart className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">Engagements</p>
                  <p className="text-gray-600">Responsable liturgique & Pastorale des enfants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Langues */}
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-purple-900/20 rounded-2xl flex items-center justify-center">
                <FaLanguage className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Langues</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Français</span>
                  <span className="text-blue-600 font-semibold">Natif</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Wolof</span>
                  <span className="text-blue-400 font-semibold">Natif</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Anglais</span>
                  <span className="text-blue-400 font-semibold">Intermédiaire</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[70%]"></div>
                </div>
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Centres d'intérêt</h4>
              <div className="flex flex-wrap gap-3">
                {['Sport', 'Bénévolat', 'Responsable liturgique', 'Pastorale des enfants'].map((interest, index) => (
                  <span key={index} className="skill-badge">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
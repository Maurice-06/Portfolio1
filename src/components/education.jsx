import { FaGraduationCap, FaCertificate, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      year: "En cours",
      title: "Licence 3 en Informatique et Sciences des Données",
      institution: "BEM TECH | School of Technology",
      icon: <FaUniversity className="text-2xl" />,
      description: "Spécialisation en analyse de données et machine learning"
    },
    {
      year: "2024",
      title: "Licence 2 en Informatique et Sciences des Données",
      institution: "BEM TECH | School of Technology",
      icon: <FaGraduationCap className="text-2xl" />,
      description: "Approfondissement des bases de données et statistiques"
    },
    {
      year: "2023",
      title: "Licence 1 en Informatique et Sciences des Données",
      institution: "BEM TECH | School of Technology",
      icon: <FaGraduationCap className="text-2xl" />,
      description: "Fondamentaux en programmation et mathématiques"
    },
    {
      year: "2022",
      title: "Baccalauréat L2 en Sciences Sociales et Humaines",
      institution: "Institution Immaculée Conception de Dakar",
      icon: <FaGraduationCap className="text-2xl" />,
      description: "Mention Bien"
    },
    {
      year: "2023",
      title: "Certification C50 Harvard / Python",
      institution: "Harvard University (CS50)",
      icon: <FaCertificate className="text-2xl" />,
      description: "Introduction à l'informatique et programmation Python"
    }
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-gray-900 to-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Parcours Académique</h2>
          <p className="section-subtitle">
            Une formation solide alliant théorie et pratique dans le domaine des données
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 hidden md:block"></div>

            {education.map((item, index) => (
              <div key={index} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                <div className="md:w-1/2">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto 
                                w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full 
                                border-4 border-white shadow-lg flex items-center justify-center z-10">
                    {item.icon}
                  </div>

                  <div className={`bg-white rounded-2xl shadow-lg p-6 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    <div className="inline-block mb-3">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{item.institution}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
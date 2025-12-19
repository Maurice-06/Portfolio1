
import { FaGithub } from 'react-icons/fa';
import { SiDjango, SiPython, SiReact, SiNodedotjs } from 'react-icons/si';

const Projects = () => {
  const projects = [


    {
      title: "Système de Gestion des Ventes (SGVS) - Étude de Cas Détaillée",
      date: "Décembre 2025",
      description: "Étude de cas complète : Développement full-stack d'un SGVS moderne. Backend robuste en Django/Python avec API REST, base de données MySQL optimisée. Module d'analyse de données avancé utilisant Pandas pour le traitement et Matplotlib pour les visualisations interactives. Dashboard analytique permettant le suivi en temps réel des KPIs de vente, prévisions de stock, et identification des tendances saisonnières. Architecture scalable supportant la croissance des données.",
      technologies: ["Django", "Python", "Pandas", "Matplotlib", "MySQL", "REST API"],
      icon: <SiDjango className="text-3xl text-primary" />,
      githubLink: 'https://github.com/Maurice-06'
    },


    {
      title: "Modélisation Prédictive et Analyse Statistique Avancée",
      date: "Juillet 2025",
      description: "Réalisation d'analyses statistiques avancées et de modélisation prédictive en utilisant Excel, Stata et R pour éclairer des décisions stratégiques.",
      technologies: ["Excel", "Stata", "R", "Power BI"],
      icon: <SiPython className="text-3xl text-blue-500" />,
      githubLink: 'https://github.com/Maurice-06'
    },


    {
      title: "Audit de Performance Web et Optimisation",
      date: "Juin 2025",
      description: "Audit de performance complet de pages web (via Google Lighthouse), identification et recommandation d'améliorations ciblées pour optimiser la vitesse de chargement et les Core Web Vitals.",
      technologies: ["JavaScript", "React", "Lighthouse", "Performance"],
      icon: <SiReact className="text-3xl text-blue-400" />,
      githubLink: 'https://github.com/Maurice-06'
    },


    {
      title: "Visualisation de Données & Tableaux de Bord",
      date: "Mai 2025",
      description: "Création de tableaux de bord interactifs sur Power BI et Excel, transformant des données brutes en insights actionnables pour le suivi de performance.",
      technologies: ["Power BI", "Excel", "DAX", "Data Visualization"],
      icon: <SiPython className="text-3xl text-yellow-500" />,
      githubLink: 'https://github.com/Maurice-06'
    },


    {
      title: "Gestion de Base de Données pour Site E-commerce",
      date: "Mars 2025",
      description: "Conception de schémas de BDD relationnelles et administration d'une base de données MySQL, optimisant les requêtes pour une expérience utilisateur fluide et garantissant l'intégrité des données.",
      technologies: ["MySQL", "SQL", "Database Design", "Optimization"],
      icon: <SiNodedotjs className="text-3xl text-green-500" />,
      githubLink: 'https://github.com/Maurice-06'
    },


    {
      title: "Application de Gestion des Stocks",
      date: "Janvier 2025",
      description: "Développement d'une application de gestion des stocks (backend) avec Node.js et MySQL, implémentant les fonctions CRUD pour optimiser la gestion interne.",
      technologies: ["Node.js", "MySQL", "Express", "REST API"],
      icon: <SiNodedotjs className="text-3xl text-green-500" />,
      githubLink: 'https://github.com/Maurice-06'
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-900 to-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Mes Projets & Réalisations</h2>
          <p className="section-subtitle">
            Des solutions concrètes mettant en œuvre mes compétences en analyse de données et développement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:transform hover:-translate-y-3 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                    {project.icon}
                  </div>
                  <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge">
                      {tech}
                    </span>
                  ))}

                </div>


                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
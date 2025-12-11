import { FaPython, FaDatabase, FaReact, FaChartBar, FaCode, FaFileExcel, FaHtml5, FaCss3, FaFileWord, FaFilePowerpoint } from 'react-icons/fa';
import { SiPowerbi, SiMongodb, SiFirebase, SiSupabase, SiFlutter, SiJavascript, SiNodedotjs, SiDjango, SiMysql, SiR } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      icon: <FaChartBar className="text-3xl" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Excel (TCD, formules avancées)", level: 85 },
        { name: "Stata", level: 80 },
        { name: "R", level: 75 },
        { name: "Python Data Analysis", level: 85 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      title: "Développement Web",
      icon: <FaCode className="text-3xl" />,
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Django", level: 80 },
        { name: "API REST", level: 75 },
      ]
    },
    {
      title: "Bases de Données",
      icon: <FaDatabase className="text-3xl" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Supabase", level: 70 },
        { name: "Firebase", level: 70 },
        { name: "SQL Server", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ]
    },
    {
      title: "Outils & Technologies",
      icon: <FaPython className="text-3xl" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Flutter", level: 65 },
        { name: "Word", level: 90 },
        { name: "PowerPoint", level: 85 },
        { name: "Git", level: 80 },
        { name: "Linux", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-gray-900 to-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">
            Expertise double en <span className="text-primary font-bold">Data Analysis</span> et <span className="text-primary font-bold">Full-Stack Development</span> - Python, Node.js, React
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-black">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badges de technologies - Version simplifiée sans Pandas/NumPy */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-10">Technologies Maîtrisées</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Data Analysis & Visualization */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiPowerbi className="text-4xl text-[#F2C811]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Power BI</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaFileExcel className="text-4xl text-[#217346]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Excel</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiR className="text-4xl text-[#276DC3]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">R</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaChartBar className="text-4xl text-[#4CC0A1]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Stata</span>
            </div>

            {/* Développement Web */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaReact className="text-4xl text-[#61DAFB]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">React</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiJavascript className="text-4xl text-[#F7DF1E]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiNodedotjs className="text-4xl text-[#339933]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Node.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaHtml5 className="text-4xl text-[#E34F26]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">HTML</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaCss3 className="text-4xl text-[#1572B6]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">CSS</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiDjango className="text-4xl text-[#092E20]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Django</span>
            </div>

            {/* Bases de Données */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaDatabase className="text-4xl text-[#336791]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">SQL</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiMongodb className="text-4xl text-[#47A248]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">MongoDB</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiSupabase className="text-4xl text-[#3ECF8E]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Supabase</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiFirebase className="text-4xl text-[#FFCA28]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Firebase</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiMysql className="text-4xl text-[#4479A1]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">MySQL</span>
            </div>

            {/* Outils & Technologies */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaPython className="text-4xl text-[#3776AB]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Python</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <SiFlutter className="text-4xl text-[#02569B]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Flutter</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaFileWord className="text-4xl text-[#2B579A]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">Word</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaFilePowerpoint className="text-4xl text-[#D24726]" />
              </div>
              <span className="font-semibold text-white group-hover:text-primary transition-colors">PowerPoint</span>
            </div>
          </div>

          {/* Section Python enrichie */}
          <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaPython className="text-5xl text-[#3776AB]" />
              <div>
                <h4 className="text-2xl font-bold text-white">Expertise Python Complète</h4>
                <p className="text-gray-300">Développement backend, analyse de données, et automatisation</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl p-4">
                <h5 className="font-bold text-primary mb-2">📊 Data Science</h5>
                <p className="text-gray-300 text-sm">Analyse de données, visualisation, statistiques</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <h5 className="font-bold text-primary mb-2">🌐 Web Development</h5>
                <p className="text-gray-300 text-sm">Django, API REST, applications web</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <h5 className="font-bold text-primary mb-2">🤖 Automatisation</h5>
                <p className="text-gray-300 text-sm">Scripting, traitement de données, workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
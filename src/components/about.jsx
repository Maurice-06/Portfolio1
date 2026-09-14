import { FaChartLine, FaCode, FaHandsHelping } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { interests, languages, profile } from '../data/profile';

const pillars = [
  {
    icon: <FaChartLine />,
    title: 'Analyse rigoureuse',
    text: 'Nettoyage, exploration et modélisation : je pars des données réelles, avec leurs défauts, pour produire des indicateurs fiables.',
  },
  {
    icon: <FaCode />,
    title: 'Culture produit',
    text: "Je livre des outils utilisables : dashboards, APIs et pipelines automatisés plutôt que des analyses qui restent dans un notebook.",
  },
  {
    icon: <FaHandsHelping />,
    title: 'Sens du service',
    text: 'Engagé à la Pastorale des enfants et comme responsable liturgique : écoute, organisation et travail en équipe.',
  },
];

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div ref={ref} className="container-x reveal">
        <span className="eyebrow">À propos</span>
        <h2 className="section-title">Data Analyst junior, entre données et code</h2>
        <p className="section-lead">{profile.pitch}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-lg text-accent">{p.icon}</div>
              <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Langues</h3>
            <ul className="mt-5 space-y-4">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white">{l.name}</span>
                    <span className="text-slate-400">{l.level}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${l.percent}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Centres d'intérêt</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span key={i} className="tag">
                  {i}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Titulaire du permis B. Basé à {profile.location}, ouvert aux opportunités à Dakar et en télétravail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

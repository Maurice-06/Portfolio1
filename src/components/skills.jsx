import useReveal from '../hooks/useReveal';
import { skillGroups } from '../data/profile';

const Skills = () => {
  const ref = useReveal();

  return (
    <section id="skills" className="section">
      <div ref={ref} className="container-x reveal">
        <span className="eyebrow">Compétences</span>
        <h2 className="section-title">Une stack complète, de la donnée à l'interface</h2>
        <p className="section-lead">
          Les outils que j'utilise réellement en projet, regroupés par usage plutôt que par niveau.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <article key={group.title} className="card p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag hover:border-accent/50 hover:text-white">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

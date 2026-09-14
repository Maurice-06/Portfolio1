import { FaArrowRight, FaGithub } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { profile, projects } from '../data/profile';

const ProjectCard = ({ project }) => (
  <article
    className={`card group flex flex-col p-6 transition-transform duration-300 hover:-translate-y-1 ${
      project.featured ? 'lg:col-span-2 md:p-8' : ''
    }`}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</span>
      <span className="text-xs text-slate-500">{project.date}</span>
    </div>

    <h3 className={`mt-4 font-bold text-white ${project.featured ? 'text-2xl' : 'text-lg'}`}>{project.title}</h3>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

    <div className="mt-5 flex flex-wrap gap-2">
      {project.technologies.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors group-hover:text-accent"
    >
      <FaGithub /> Voir le code
      <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
    </a>
  </article>
);

const Projects = () => {
  const ref = useReveal(0.05);

  return (
    <section id="projects" className="section bg-ink-900/40">
      <div ref={ref} className="container-x reveal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Projets</span>
            <h2 className="section-title">Réalisations sélectionnées</h2>
            <p className="section-lead">
              Des projets académiques et personnels qui couvrent tout le cycle : collecte, modélisation, visualisation et mise à disposition.
            </p>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FaGithub /> Tous mes dépôts
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { FaBriefcase, FaCheck } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { experience } from '../data/profile';

const Experience = () => {
  const ref = useReveal();

  return (
    <section id="experience" className="section bg-ink-900/40">
      <div ref={ref} className="container-x reveal">
        <span className="eyebrow">Expérience</span>
        <h2 className="section-title">Ce que j'ai construit en entreprise</h2>

        <div className="mt-12 space-y-8">
          {experience.map((job) => (
            <article key={job.company} className="card grid gap-8 p-6 md:grid-cols-[260px_1fr] md:p-8">
              <div>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <FaBriefcase />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-widest text-accent">{job.period}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{job.role}</h3>
                <p className="mt-1 font-medium text-slate-200">{job.company}</p>
                <p className="text-sm text-slate-400">
                  {job.companyFull} · {job.location}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-base leading-relaxed text-slate-300">{job.summary}</p>
                <ul className="mt-6 space-y-4">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <FaCheck className="mt-1 flex-shrink-0 text-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { FaCertificate, FaGraduationCap } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { certifications, education } from '../data/profile';

const Education = () => {
  const ref = useReveal();

  return (
    <section id="education" className="section">
      <div ref={ref} className="container-x reveal">
        <span className="eyebrow">Formation</span>
        <h2 className="section-title">Parcours académique & certifications</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ol className="relative space-y-8 border-l border-white/10 pl-8">
            {education.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full border border-accent/50 bg-ink-950">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                  <FaGraduationCap className="text-slate-500" /> {item.institution}
                </p>
                {item.description && <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>}
              </li>
            ))}
          </ol>

          <div className="card h-fit p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Certifications</h3>
            <ul className="mt-5 divide-y divide-white/[0.06]">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                    <FaCertificate />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white">{c.title}</p>
                    <p className="text-sm text-slate-400">{c.issuer}</p>
                  </div>
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

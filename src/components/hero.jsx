import { FaArrowRight, FaFileAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import profilImage from '../assets/Profil.jpg';
import { profile, stats } from '../data/profile';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* Fond : grille + halo */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x relative grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.firstName}
            <br />
            <span className="text-accent">{profile.lastName}</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200 md:text-2xl">
            {profile.title} · {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">{profile.pitch}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Voir mes projets <FaArrowRight className="text-xs" />
            </a>
            <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FaFileAlt /> Consulter mon CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <FaGithub className="text-lg" /> {profile.githubHandle}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-800 shadow-card">
            <img
              src={profilImage}
              alt={`Portrait de ${profile.fullName}`}
              className="aspect-[4/5] w-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">Dernière mission</p>
              <p className="mt-1 text-sm font-medium text-white">Pipeline IoT & dashboards énergétiques — CER2E</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-x relative pb-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900 px-6 py-5">
              <dt className="order-2 text-xs text-slate-400">{s.label}</dt>
              <dd className="text-2xl font-bold text-white md:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;

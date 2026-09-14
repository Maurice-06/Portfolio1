import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { navLinks, profile } from '../data/profile';

const socials = [
  { icon: <FaGithub />, href: profile.github, label: 'GitHub' },
  { icon: <FaLinkedin />, href: profile.linkedin, label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: `mailto:${profile.email}`, label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-semibold text-white">{profile.fullName}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {profile.title} · {profile.location}
          </p>
          <div className="mt-4 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent/50 hover:text-accent"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Navigation du pied de page">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-slate-400 transition-colors hover:text-white">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {year} {profile.fullName}. Tous droits réservés.</p>
          <p>Conçu avec React, Vite et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, profile } from '../data/profile';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-white" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-ink-950">
            MD
          </span>
          <span className="hidden sm:inline">{profile.fullName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2">
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {open && (
        <div className="container-x border-t border-white/[0.06] pb-4 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base text-slate-200 hover:bg-white/[0.04]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
            Télécharger mon CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { profile } from '../data/profile';

const channels = [
  { icon: <FaEnvelope />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FaPhone />, label: 'Téléphone', value: profile.phone, href: profile.phoneHref },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: profile.fullName, href: profile.linkedin, external: true },
  { icon: <FaGithub />, label: 'GitHub', value: profile.githubHandle, href: profile.github, external: true },
];

const inputClass =
  'w-full rounded-lg border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent';

const Contact = () => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Sans backend : on ouvre le client mail avec le message pré-rempli.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section bg-ink-900/40">
      <div ref={ref} className="container-x reveal">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p className="section-lead">
          Un poste junior, une alternance ou une mission data ? Je réponds généralement sous 24 heures.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="card flex items-center gap-4 p-4"
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  {c.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-slate-500">{c.label}</span>
                  <span className="block truncate text-sm font-medium text-white">{c.value}</span>
                </span>
              </a>
            ))}
            <p className="flex items-center gap-2 px-1 pt-2 text-sm text-slate-400">
              <FaMapMarkerAlt className="text-accent" /> {profile.location}
            </p>
          </div>

          <form onSubmit={onSubmit} className="card p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Nom</span>
                <input name="name" value={form.name} onChange={onChange} required className={inputClass} placeholder="Votre nom" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className={inputClass}
                  placeholder="vous@exemple.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium text-slate-400">Sujet</span>
              <input name="subject" value={form.subject} onChange={onChange} className={inputClass} placeholder="Opportunité, mission, question…" />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium text-slate-400">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                className={`${inputClass} resize-y`}
                placeholder="Décrivez votre besoin en quelques lignes."
              />
            </label>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              <FaPaperPlane /> Envoyer le message
            </button>
            <p className="mt-3 text-xs text-slate-500">Le formulaire ouvre votre messagerie avec le message pré-rempli.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

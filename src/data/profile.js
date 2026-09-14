// Source unique de vérité pour le contenu du portfolio (synchronisé avec le CV).

export const profile = {
  firstName: 'Maurice Birame',
  lastName: 'Diouf',
  fullName: 'Maurice Birame Diouf',
  title: 'Data Analyst Junior',
  tagline: 'Je transforme des données brutes en décisions claires.',
  pitch:
    "Diplômé en Licence Sciences des Données (BEM TECH). Cinq mois chez CER2E à concevoir un pipeline cloud de collecte IoT et des modules d'analyse pour une plateforme de gestion énergétique. À l'aise du SQL au React, je cherche un premier poste de Data Analyst où rigueur analytique et sens du produit font la différence.",
  location: 'Malika, Dakar, Sénégal',
  phone: '+221 77 865 69 61',
  phoneHref: 'tel:+221778656961',
  email: 'mauricebiramed@gmail.com',
  github: 'https://github.com/Maurice-06',
  githubHandle: 'Maurice-06',
  linkedin: 'https://www.linkedin.com/in/maurice-birame-diouf-a967a6354/',
  siteUrl: 'https://portfolio-maurice-dev.netlify.app/',
  cvPath: 'cv/CV-Maurice-Birame-Diouf.pdf',
  availability: 'Disponible pour un poste junior ou une alternance',
};

export const stats = [
  { value: '5 mois', label: 'de stage Data / IoT' },
  { value: '80+', label: 'capteurs interrogés en continu' },
  { value: 'Millions', label: 'de mesures fiabilisées' },
  { value: '8', label: 'projets data & web' },
];

export const experience = [
  {
    role: 'Stagiaire Data Analyst / Développeur IoT',
    company: 'CER2E',
    companyFull: "Conseil et Expertise des Réseaux d'Énergie Électrique",
    location: 'Dakar',
    period: 'Mars — Juillet 2026',
    summary:
      "Efficacité énergétique : de la collecte des mesures terrain jusqu'aux tableaux de bord décisionnels de la plateforme SIMEE.",
    bullets: [
      "Conception et déploiement d'un pipeline cloud autonome de collecte IoT (Supabase, Edge Functions TypeScript/Deno, pg_cron) interrogeant en continu plus de 80 capteurs Shelly Cloud.",
      'Fiabilisation de plusieurs millions de mesures : filtrage des valeurs aberrantes et détection des resets de compteurs.',
      "Développement d'un module de visualisation et d'analyse IoT (React, TypeScript, Recharts) : dashboard temps réel, détection d'anomalies, courbes de charge, export de rapports.",
      "Refonte du module de traitement des fichiers d'audit énergétique (Python, FastAPI) : architecture unifiée à base de registre de capteurs couvrant 6 types d'instruments (analyseurs réseau, stations qualité d'air, onduleurs photovoltaïques).",
    ],
    stack: ['Supabase', 'TypeScript', 'Deno', 'pg_cron', 'React', 'Recharts', 'Python', 'FastAPI'],
  },
];

export const skillGroups = [
  {
    title: 'Analyse & Data Science',
    description: 'Exploration, modélisation et restitution.',
    skills: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Statsmodels', 'SQL', 'R', 'Stata', 'Jupyter'],
  },
  {
    title: 'Visualisation & BI',
    description: 'Des données aux décisions.',
    skills: ['Power BI', 'Tableau', 'Excel (TCD, formules avancées)', 'Recharts', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Développement',
    description: 'Livrer des outils utilisables.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'FastAPI', 'Django', 'Flutter'],
  },
  {
    title: 'Données & Cloud',
    description: 'Stocker, automatiser, fiabiliser.',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase', 'Edge Functions', 'Git'],
  },
];

export const projects = [
  {
    title: "Analyse de sentiment d'une marque",
    date: 'Décembre 2025',
    category: 'NLP',
    featured: true,
    description:
      "Outil mesurant automatiquement le « pouls » de l'opinion publique autour d'une marque (cas Tesla). Collecte des publications, nettoyage et vectorisation du texte, classification des sentiments (positif / neutre / négatif) puis suivi de l'évolution dans le temps pour repérer les pics d'attention et les crises d'image.",
    technologies: ['Python', 'NLP', 'scikit-learn', 'Pandas'],
    github: 'https://github.com/Maurice-06',
  },
  {
    title: 'Système de Gestion des Ventes (SGVS)',
    date: 'Décembre 2025',
    category: 'Full-stack & Data',
    description:
      "Application full-stack (Django, API REST, MySQL) avec un module analytique Pandas / Matplotlib : suivi des KPIs de vente en temps réel, prévisions de stock et détection des tendances saisonnières.",
    technologies: ['Django', 'Python', 'Pandas', 'MySQL', 'REST API'],
    github: 'https://github.com/Maurice-06',
  },
  {
    title: 'Modélisation prédictive & analyse statistique',
    date: 'Juillet 2025',
    category: 'Statistiques',
    description:
      'Analyses statistiques avancées et modèles prédictifs avec Excel, Stata et R pour éclairer des décisions stratégiques.',
    technologies: ['R', 'Stata', 'Excel'],
    github: 'https://github.com/Maurice-06',
  },
  {
    title: 'Audit de performance web',
    date: 'Juin 2025',
    category: 'Performance',
    description:
      'Audit complet de pages web avec Google Lighthouse : diagnostic et recommandations pour la vitesse de chargement et les Core Web Vitals.',
    technologies: ['Lighthouse', 'JavaScript', 'React'],
    github: 'https://github.com/Maurice-06',
  },
  {
    title: 'Tableaux de bord interactifs',
    date: 'Mai 2025',
    category: 'Business Intelligence',
    description:
      'Dashboards Power BI et Excel transformant des données brutes en indicateurs actionnables pour le suivi de performance.',
    technologies: ['Power BI', 'DAX', 'Excel'],
    github: 'https://github.com/Maurice-06',
  },
  {
    title: 'Base de données e-commerce',
    date: 'Mars 2025',
    category: 'Base de données',
    description:
      "Conception d'un schéma relationnel et administration d'une base MySQL : optimisation des requêtes et intégrité des données.",
    technologies: ['MySQL', 'SQL', 'Modélisation'],
    github: 'https://github.com/Maurice-06',
  },
  {
    title: 'Dashboard de sentiment étudiant',
    date: 'Janvier 2025',
    category: 'Machine Learning',
    description:
      "Suivi des performances et modèles prédictifs sur les retours des étudiants d'une école : préprocessing, entraînement et métriques d'évaluation.",
    technologies: ['Python', 'scikit-learn', 'Statsmodels', 'Seaborn'],
    github: 'https://github.com/Maurice-06',
  },
  {
    title: 'Application de gestion des stocks',
    date: 'Janvier 2025',
    category: 'Backend',
    description:
      'API Node.js / Express avec MySQL implémentant les opérations CRUD pour la gestion interne des stocks.',
    technologies: ['Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/Maurice-06',
  },
];

export const education = [
  {
    period: '2023 — 2026',
    title: 'Licence en Informatique et Sciences des Données',
    institution: 'BEM TECH | School of Technology, Dakar',
    description:
      'Spécialisation en analyse de données : statistiques, bases de données, machine learning et développement.',
  },
  {
    period: '2022 — 2023',
    title: 'Baccalauréat L2 — Sciences Sociales et Humaines',
    institution: 'Institution Immaculée Conception de Dakar',
    description: '',
  },
];

export const certifications = [
  {
    title: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    status: 'En cours',
  },
];

export const languages = [
  { name: 'Français', level: 'Courant', percent: 100 },
  { name: 'Wolof', level: 'Langue maternelle', percent: 100 },
  { name: 'Anglais', level: 'Intermédiaire', percent: 65 },
];

export const interests = ['Sport', 'Bénévolat', 'Responsable liturgique', 'Pastorale des enfants'];

export const navLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Formation', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

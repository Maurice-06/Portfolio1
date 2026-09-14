# Portfolio — Maurice Birame Diouf

Portfolio personnel (Data Analyst junior) construit avec React 18, Vite 7 et Tailwind CSS 3.

En ligne : https://portfolio-maurice-dev.netlify.app/

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
# push sur main → déploiement automatique Netlify
```

## Mettre à jour le contenu

Tout le contenu (profil, expérience, compétences, projets, formation, liens) est centralisé dans
`src/data/profile.js`. Les composants de `src/components/` ne font que l'afficher.

Le CV téléchargeable se trouve dans `public/cv/CV-Maurice-Birame-Diouf.pdf` : remplacer le fichier
en gardant le même nom suffit.

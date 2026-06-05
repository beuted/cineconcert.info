# Cineconcert

Reproduction statique du site [cineconcert.info](https://www.cineconcert.info) en React + Vite.

## Pages

- `/` — Accueil (slider, flip boxes, musiciennes)
- `/paris-qui-dort` — Paris qui dort
- `/sept-ans-de-malheur` — Sept ans de malheur
- `/qui-sommes-nous` — Qui sommes-nous ?
- `/contact` — Contact (email)

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

Le site est déployé automatiquement sur GitHub Pages à chaque push sur `main`.

**URL :** https://beuted.github.io/cineconcert.info/

### Configuration initiale (une seule fois sur GitHub)

1. Allez dans **Settings → Pages**
2. Sous **Build and deployment**, choisissez **Source : GitHub Actions**
3. Poussez les changements sur `main` - le workflow `.github/workflows/deploy.yml` build et déploie le site

### Domaine personnalisé (optionnel)

Pour servir le site sur `cineconcert.info` au lieu de `beuted.github.io/cineconcert.info`:

1. **Settings → Pages → Custom domain** : entrez `cineconcert.info`
2. Chez votre registrar DNS, ajoutez les enregistrements indiqués par GitHub (généralement `A` vers les IP GitHub Pages et/ou `CNAME` vers `beuted.github.io`)
3. Si le site est à la racine du domaine, changez `base` dans `vite.config.js` de `/cineconcert.info/` vers `/`

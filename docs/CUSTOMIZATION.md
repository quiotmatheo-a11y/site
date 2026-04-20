# Guide de Customisation

Conseils pratiques pour modifier et améliorer le site.

## 📸 Remplacer la photo

1. Télécharge ta photo au format JPG (recommandé) ou PNG
2. Dimensions: **450 x 600px** (ratio 3:4) ou plus grand
3. Compresse l'image si possible (< 200KB)
4. Place le fichier à: `assets/images/photo.jpg`
5. Le site le charge automatiquement (fallback SVG si absent)

**Astuce:** Utilise un service de compression comme:
- TinyJPG (https://tinyjpg.com)
- Compressor.io (https://compressor.io)

## 📚 Ajouter des ressources pédagogiques

### Créer l'arborescence
```
assets/documents/
└── semaine1/
    ├── 01-fondamentaux-maths.pdf
    ├── 02-litterature.pdf
    └── 03-methodologie.pdf
```

### Mettre à jour les liens
Dans `education.html`, remplace:
```html
<a href="#" class="resource-link placeholder">À venir</a>
```

Par:
```html
<a href="assets/documents/semaine1/01-fondamentaux-maths.pdf" class="resource-link" download>Télécharger</a>
```

Supprime la classe `placeholder` pour enlever le style "À venir".

## 🎨 Modifier les couleurs

Ouvre `styles/base.css` et modifie la section `:root`:

```css
:root {
  /* Palette principale - À modifier ici */
  --bleu-primaire: #3b5bdb;      /* Bleu dominant */
  --violet-primaire: #7c3aed;    /* Violet d'accent */
  --indigo: #6366f1;             /* Teinte intermédiaire */
  
  /* Reste des variables... */
}
```

Les changements s'appliquent automatiquement à tout le site.

**Outil recommandé:** Color picker - https://htmlcolorcodes.com

## ✏️ Modifier le texte/contenu

### Page d'accueil (index.html)
- Tagline: Cherche `<div class="hero-subtitle">`
- Description: Cherche `<div class="hero-description">`
- Activités actuelles: Section `.section-highlight`

### Page Parcours (parcours.html)
- Chaque item est un `<div class="trajectory-item">`
- Données: Modifier directement le HTML ou utiliser `data/data.json`

### Page Ressources (education.html)
- Chaque semaine: `<div class="week-card">`
- Facile à dupliquer pour ajouter plus de semaines

### Page Explorations (explorations.html)
- Cartes thématiques: `<div class="exploration-card">`
- Contenu dans `.exploration-details`

## 🔤 Changer les polices

Dans `styles/base.css`:
```css
:root {
  --font-display: 'Georgia', serif;  /* Titres */
  --font-sans: -apple-system, BlinkMacSystemFont, ...;  /* Corps */
  --font-mono: 'Monaco', monospace;  /* Code */
}
```

**Intégrer une police Google:**
1. Va sur https://fonts.google.com
2. Sélectionne une police
3. Copie le code `<link>` dans le `<head>` HTML
4. Mets à jour `--font-display` ou `--font-sans`

## 🎭 Activer/Désactiver le mode sombre

Le thème se bascule automatiquement. Pour **forcer le clair**:
```javascript
// Dans scripts/app.js, commente l'init du ThemeManager:
// new ThemeManager(); 
```

Ou force le mode dark au chargement:
```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

## 🔗 Ajouter de nouvelles pages

1. Crée un fichier HTML (ex: `blog.html`)
2. Copie la structure de navigation depuis une page existante
3. Ajoute le lien dans `<nav>`:
   ```html
   <li><a href="blog.html">Blog</a></li>
   ```
4. Crée un CSS pour cette page: `styles/blog.css`
5. Importe-le dans le `<head>`

## 📱 Adapter le responsive

Breakpoints actuels dans `styles/base.css`:
```css
/* Tablette: 768px */
@media (max-width: 768px) { ... }

/* Mobile: 640px */
@media (max-width: 640px) { ... }
```

Ajoute un breakpoint si besoin:
```css
@media (max-width: 1400px) {
  /* Styles pour écrans larges */
}
```

## ⚡ Optimisations

### Images
- Redimensionne la photo à max 600px de large
- Compresse avec TinyJPG (50-70% de réduction)
- Utilise JPG pour photos, PNG pour graphiques

### CSS/JS
- En production, utilise des versions minifiées
- Outils: https://cssnano.co, https://www.terser.org

### Performance
- Utilise DevTools Chrome (F12) → Lighthouse
- Vise score > 90 pour Performance, Accessibility

## 🐛 Troubleshooting

### La photo ne s'affiche pas
- Vérifie le chemin: `assets/images/photo.jpg`
- Essaie une autre extension: `.png`
- Vérifie la taille du fichier

### Le thème ne change pas
- Vide le cache navigateur (Ctrl+Shift+Delete)
- Vérifie que `scripts/app.js` est bien chargé
- Ouvre la console (F12) pour erreurs

### Les liens ne fonctionnent pas
- Vérifie la casse du nom de fichier
- Pour les PDFs, assure toi que `assets/documents/` existe

### Layout cassé sur mobile
- Vérifiez la meta viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Utilise DevTools pour tester responsive

## 🚀 Déployer le site

### Option 1: GitHub Pages (gratuit)
1. Crée un repo GitHub
2. Uploader tous les fichiers
3. Active Pages dans Settings → GitHub Pages → Branch: main
4. Accès: `https://tonusername.github.io/repo-name`

### Option 2: Netlify (gratuit + intégrations)
1. Connecte ton repo GitHub
2. Déploiement automatique à chaque push
3. Custom domain possible

### Option 3: Hébergeur classique
- Upload par FTP/SFTP
- Assure toi que l'index.html est à la racine

## 📊 Suivi et analytics

Pour ajouter Google Analytics:
```html
<!-- Ajoute dans <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>
```

Remplace `G-XXXXXX` par ton ID Google.

---

**Questions fréquentes?**
Vérifie que tu modifies le bon fichier et que les chemins sont corrects. La majorité des bugs viennent de chemins mal orthographiés.

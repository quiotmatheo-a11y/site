# Site Personnel - Mathéo Quiot

Un site personnel **ambitieux, sophistiqué et visuellement marquant** mettant en scène un parcours en mouvement entre HEC Paris, Buenos Aires, l'enseignement et l'écriture.

## 🎨 Direction artistique

- **Palette:** Bleu (#3b5bdb), Violet (#7c3aed), Indigo
- **Thème:** Sombre élégant avec alternatives clair/sombre
- **Style:** Design sophistiqué desktop-first, profond et immersif
- **Ambiance:** Trajectoires, bifurcations, constellation biographique

## 📂 Structure du projet

```
site_vitrine_matheo_v5/
├── index.html                 # Page d'accueil (héro, activités actuelles)
├── parcours.html              # Trajectoire visuelle avec données CV
├── education.html             # Ressources pédagogiques par semaine
├── explorations.html          # Thèmes et intérêts (page créative)
├── contact.html               # Contacts et moyens de communication
│
├── styles/
│   ├── base.css               # Design system global (couleurs, typo, animations)
│   ├── home.css               # Styles page d'accueil
│   ├── parcours.css           # Styles trajectoire interactive
│   ├── education.css          # Styles ressources (accordéons)
│   └── contact.css            # Styles page contact
│
├── scripts/
│   └── app.js                 # JavaScript principal (thème, interactions, accordéons)
│
├── assets/
│   ├── images/
│   │   └── photo.jpg          # ⭐ REMPLACER PAR TA PHOTO (recommandé: 450x600px)
│   └── documents/
│       ├── semaine1/          # À créer: ressources semaine 1
│       ├── semaine2/          # À créer: ressources semaine 2
│       └── ...                # (structure à adapter)
│
├── data/
│   └── data.json              # Données centralisées (profil, trajectoire, compétences)
│
├── README.md                  # Ce fichier
└── LICENSE                    # (optionnel)
```

## ⚡ Fonctionnalités

### Page d'accueil
- Hero section avec photo intégrée élégamment
- Statistiques (3 continents, +8 expériences, 2 langues)
- Section "Activités actuelles" (HEC, Buenos Aires, Écriture, Enseignement)
- Grille d'explorations (Géographies, Vin, Écriture, Bifurcations)

### Page Parcours
- **Trajectoire visuelle interactive** avec ligne centrale gradient
- Alternance gauche/droite des items
- Nodes animés, hover effects subtils
- Items **expandibles au clic** pour voir les détails
- Grid de compétences (Académique, Langue, Transversale, Géographies)

### Page Ressources
- 8 semaines organisées en **accordéons collapsibles**
- Structure simple et claire pour futures mises à jour
- Placeholders pour PDFs (remplacer par liens réels)
- Note sur comment ajouter les documents

### Page Explorations
- 5 cartes thématiques (Géographies, Vin, Écriture, Bifurcations, Courants)
- Détails révélés au clic
- Design et interactions cohérentes

### Page Contact
- 3 cartes avec emails, LinkedIn
- Animations au hover
- Note de temps de réponse

### Interactions transversales
- **Thème clair/sombre** avec toggle persistant (localStorage)
- **Navigation mobile** avec hamburger menu
- **Active link highlighting** automatique
- **Scroll animations** fluides

## 🖼️ Intégration de ta photo

### Placement
La photo s'intègre automatiquement en page d'accueil. Fichier: `assets/images/photo.jpg`

### Dimensions recommandées
- **Ratio:** 3:4 (portrait)
- **Dimensions:** 450 x 600 px (ou plus grand)
- **Format:** JPG, PNG
- **Qualité:** Haute (compressée)

### Fallback
Si la photo ne charge pas, un placeholder SVG gracieux s'affiche automatiquement.

## 📄 Ressources pédagogiques

### Structure des dossiers
```
assets/documents/
├── semaine1/
│   ├── 01-fondamentaux-maths.pdf
│   ├── 02-littérature-classique.pdf
│   └── ...
├── semaine2/
│   ├── article-analyse.pdf
│   └── ...
└── ...
```

### Mise à jour des liens
Dans `education.html`, remplacer les `href="#"` par les vrais chemins:

```html
<!-- De ceci: -->
<a href="#" class="resource-link placeholder">À venir</a>

<!-- À ceci: -->
<a href="assets/documents/semaine1/01-fondamentaux-maths.pdf" class="resource-link" download>Télécharger</a>
```

## 🎯 Personnalisation future

### Données centralisées
Toutes les infos sont dans `data/data.json`. Mettre à jour ce fichier pour modifier:
- Profil
- Parcours/trajectoire
- Compétences
- Ressources

### Couleurs
Modifier dans `styles/base.css` (`:root`):
```css
--bleu-primaire: #3b5bdb;
--violet-primaire: #7c3aed;
--indigo: #6366f1;
```

### Typographie
Polices dans `styles/base.css`:
```css
--font-display: 'Georgia', 'Garamond', serif;
--font-sans: -apple-system, BlinkMacSystemFont, ...;
```

## 🚀 Déploiement

### Simple (HTML/CSS/JS statique)
1. Uploader tous les fichiers sur un serveur (GitHub Pages, Netlify, etc.)
2. Assurer que `assets/images/photo.jpg` est présente
3. Tester tous les liens et ressources

### Optimisations recommandées
- Compresser les images (`photo.jpg` < 200KB)
- Minifier CSS/JS en production
- Activer le cache navigateur

## 📱 Responsive

- **Desktop** (1200px+): Compositions riches, 2-3 colonnes
- **Tablette** (768px-1199px): Adaptation flexible
- **Mobile** (< 768px): Single column, navigation adaptée

## ♿ Accessibilité

- Navigation claire et sémantique
- Contraste de couleurs respecté
- Labels ARIA pour boutons
- Fallback pour images

## 🔧 Technologies

- **HTML5** sémantique
- **CSS3** avec variables et animations
- **JavaScript vanilla** (pas de dépendances)
- Responsive design mobile-first → desktop-optimisé

## 💡 Conseils de maintenance

1. **Garder data.json à jour** pour modifications futures
2. **Tester le mode sombre** régulièrement
3. **Vérifier les liens** vers ressources externes
4. **Mettre à jour photo** si besoin
5. **Ajouter progressivement** ressources pédagogiques

## 📞 Support

Structure complètement modifiable. Chaque section est commentée pour faciliter les edits.

---

**Version:** 1.0  
**Date:** Avril 2026  
**Auteur:** Design et développement personnalisés

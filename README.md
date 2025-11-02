# 📊 Smart Dashboard

Un tableau de bord moderne et interactif construit avec React, Vite, et Tailwind CSS. Cette application présente des statistiques en temps réel avec des graphiques animés et une interface utilisateur élégante.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=flat-square&logo=tailwind-css)
![Chart.js](https://img.shields.io/badge/Chart.js-4.5.1-FF6384?style=flat-square&logo=chart.js)

## ✨ Fonctionnalités

- 📈 **Graphiques interactifs** avec Chart.js
- 🎨 **Design moderne** avec Tailwind CSS v4
- ⚡ **Performance optimale** grâce à Vite
- 🎭 **Animations fluides** avec Framer Motion
- 📱 **Interface responsive** pour tous les écrans
- 🧭 **Navigation intuitive** avec sidebar et navbar
- 📊 **Visualisation des données** en temps réel
- 📋 **Tableau des transactions** dynamique

## 🚀 Technologies utilisées

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7 avec plugin React SWC
- **Styling**: Tailwind CSS 4.1.16
- **Charts**: Chart.js 4.5.1 + React-ChartJS-2 5.3.0
- **Animations**: Framer Motion 12.23.24
- **Linting**: ESLint 9.36.0

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. **Cloner le repository**

   ```bash
   git clone https://github.com/votre-username/smart-dashboard.git
   cd smart-dashboard
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir le navigateur**

   Naviguer vers `http://localhost:5173` (ou le port indiqué dans le terminal)

## 📦 Scripts disponibles

```bash
# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview

# Lancer le linter
npm run lint
```

## 📁 Structure du projet

```
smart-dashboard/
├── public/              # Fichiers statiques
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Composants React
│   │   ├── Card.jsx
│   │   ├── ChartCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TransactionTable.jsx
│   │   └── pages/
│   │       └── Dashboard.jsx
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html          # Template HTML
├── vite.config.js      # Configuration Vite
├── eslint.config.js    # Configuration ESLint
└── package.json        # Dépendances du projet
```

## 🎨 Composants principaux

- **Dashboard**: Page principale avec vue d'ensemble des statistiques
- **Sidebar**: Navigation latérale
- **Navbar**: Barre de navigation supérieure
- **Card**: Composant de carte réutilisable
- **ChartCard**: Carte avec graphique intégré
- **TransactionTable**: Tableau des transactions

## 🚀 Déploiement

### Netlify

```bash
npm run build
# Déployer le dossier dist/
```

### Vercel

```bash
npm run build
vercel --prod
```

### GitHub Pages

```bash
npm run build
# Déployer le contenu du dossier dist/
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request



## 👤 Auteur

Votre Nom - VanMich_dev

## 🙏 Remerciements

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [Framer Motion](https://www.framer.com/motion/)

---

⭐ N'oubliez pas de donner une étoile si ce projet vous a aidé !

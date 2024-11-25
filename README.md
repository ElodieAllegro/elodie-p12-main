# SportSee

## Dashboard d'Analyse Sportive
Ce projet est une application de suivi et d'analyse d'activités sportives, conçue avec React.js et la bibliothèque Recharts pour les graphiques. 
Il permet aux utilisateurs de visualiser leurs données d'entraînement, telles que l'activité quotidienne, la durée moyenne des sessions, les performances, et les scores.

### Fonctionnalités
1. Activité quotidienne : Affichage des calories brûlées et du poids sous forme de graphique à barres.
2. Durée moyenne des sessions : Représentation des sessions hebdomadaires sous forme de courbe.
3. Performances : Diagramme en toile d'araignée pour visualiser les performances.
4. Score personnel : Indicateur du score global de l'utilisateur.
5. Suivi des calories et macronutriments : Affichage des données clés (calories, protéines, glucides, lipides).

### Technologies utilisées
1. Frontend : React.js, Recharts
2. Outil de build : Vite.js
3. CSS : Mise en page responsive et personnalisée
4. Backend (Mock API) : Données simulées pour les utilisateurs et leurs activités

### Installation et lancement du frontend :
1. Prérequis
Assurez-vous que Node.js et npm (ou yarn) sont installés sur votre machine.
2. Installation des dépendances
npm install
3. Lancer le projet en mode développement
npm run dev
Le projet sera accessible via http://localhost:5173
4. Build pour la production
Pour créer une version optimisée du projet :
npm run build

### Installation et lancement du backend:
1. Cloner le repo du back-end : git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
2. En se plaçant dans ce repo du back-end SportSee, installer ses dépendances :
 npm install
3. Lancer le back-end sur le port 3000 (port par défaut) :
 npm start

 
### Données mockées
Les données utilisateur sont simulées via un fichier JSON pour le développement.

### Personnalisation
Les graphiques sont configurés avec Recharts. Consultez la documentation Recharts pour des personnalisations avancées.

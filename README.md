tp_wiki-dps-tp01

Premier TP dans le module DevOps

Pierre DEJEAN

Bienvenue dans ce fichier "tp_wiki-dps-tp01".

Dans ce fichier, vous découvrirez comment utiliser TypeScript en DevOps.

Pour cela, vous allez commencer par télécharger Visual Studio Code, qui est un éditeur de code pour développer notre projet. Ensuite, il vous faudra télécharger TypeScript, qui va nous permettre de profiter de l’écosystème JavaScript, car c'est le langage que nous allons utiliser sur Visual Studio Code.

Pour Visual Studio Code, voici le lien du site officiel : https://code.visualstudio.com/Download

Pour télécharger TypeScript, voici les étapes :

cd my_project
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev

Après avoir ajouté vos parties de code dans le fichier index.ts, vous allez pouvoir lancer votre projet :

npx tsc
node index.js
À cette étape, vous avez votre serveur lancé.

Pour vérifier si tout fonctionne, ouvrez votre navigateur et accédez aux adresses suivantes :

localhost:3000 → Cela doit afficher une erreur 404.
localhost:3000/ping → Cela doit retourner, au format JSON, les headers de la requête


À la fin de ce projet, vous aurez un serveur sur lequel vous pourrez effectuer un /ping, qui vous renverra, au format JSON, les headers de la requête. De plus, vous n'aurez installé que les dépendances nécessaires à ce projet, ce qui en fait un projet compact et léger.

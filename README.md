# TheOne

# Guide d'utilisation de l'application 

L'application est codée en Angular, NodeJS et MongoDb. 
Pour démarrer l'application :

	- Il faut installer node.js et npm install. 
	- Pour démarrer le backend, utiliser la commande nodemon start
	- Pour démarrer le frontend, utiliser la commande npm start


Il faut ensuite adapter la configuration du backend. Il faut  modifier le fichier config.js qui se trouve dans les dossier TheOne/backend.

Il faut que l'host soit sur localhost, définir l'user et le mot de passe du logiciel (par défaut c'est root).
Ensuite, il faut se placer dans les dossiers backend afin d'installer les dépendances avec la commande npm install, puis nodemon start pour démarrer le backend. Celui-ci démarre sur le port 3000.

Ensuite, il faut se placer dans le dossier du frontend souhaité(utilisateur, annonceur ou administrateur) afin de faire la commande npm install pour installer les dépendances puis npm start pour démarrer le frontend à l'adresse: https://localhost:4200.

# Utilisation de l'application

### Utilisateur 
L'utilisateur peut rechercher des vidéos dans l'accueil, il peut ouvrir la vidéo dans l'application ou sur la plateforme Youtube. 
Il peut s'inscrire et se connecter pour avoir accès à plus de fonctionnalités. 
Un utilisateur connecté peut ajouter des vidéos à la playlist, consulter sa playlist et la gérer. 

### Annonceur 
L'annonceur se connecte avec un email et un mot de passe pour avoir accès aux fonctionnalités de l'application. Il peut ajouter des annonces et les consulter dans la page d'accueil. Pour que l'annonce soit affichée chez les utilisateurs, l'administrateur doit l'accepter. 

### Administrateur 

L'administrateur se connecte avec un email et mot de passe pour avoir accès aux fonctionnalités. Un tableau qui résume les différentes annonces avec leurs informations. En cliquant sur une annonce, il peut accepter ou refuser l'annonce. 





	


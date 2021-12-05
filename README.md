# TheOne

# Guide d'utilisation de l'application 

L'application est codée en Angular, NodeJS et MongoDb. 
Pour démarrer l'application :

	-Il faut installer node.js et npm install. 
	-Il est nécéssaire aussi d'avoir la commande docker-compose pour exécuter l'application sur docker.

# Utilisation sans docker 

Il faut ensuite adapter la configuration du backend. Il faut  modifier le fichier config.js qui se trouve dans les dossier TheOne/backend.

Il faut que l'host soit sur localhost, définir l'user et le mot de passe du logiciel (par défaut c'est root).
Ensuite, il faut se placer dans les dossiers backend et backend-admin afin d'installer les dépendances avec la commande npm install, puis npm start pour démarrer le backend. Celui-ci démarre sur le port 3000.

Ensuite, il faut se placer dans le dossier Frontent afin de faire la commande npm install pour installer les dépendances puis npm start pour démarrer le frontend à l'adresse: https://localhost:4200.

# Utilisation de docker

Avec docker, l'utilisation de l'application est plus simple. Il suffit de se placer à la racine du projet, donc à la racine de The One.
Il faut exécuter la commande: docker-compose up pour réaliser la création des containers.

Il est maintenant possible de relancer le container du backend depuis l'application docker ou encore en annulant et recommançant la commande: docker-compose up.
L'application est maintenant totalement utilisable à l'adresse: https://localhost:4200.

# Utilisation de l'application

L'utilisateur peut rechercher des vidéos dans l'accueil, il peut ouvrir la vidéo dans l'application ou sur la plateforme Youtube. 
##### C'est pas fiiniiiiiiiiiiii 
	


# Mediateque

Ce projet a été créer sous [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2 et est un petit projet d'évaluation du modula Angular de ma formation.

Il reprend l'idée d'un site web possédant une page d'acceuil, une page présentant les différents produits d'une catalogue et une page détaillant un produit en particulier. Si un url  autre que `home`, `product` et `detail` est renseigné sur le `http://localhost:4200/`, il renvoie sur une page d'erreur.

Les données sont contenus dans un fichier json, prenant la place d'une base de données et sont récupérées par des services.


# Avant utilisation

## Installation

Avant toute chose, une fois que vous avez cloner le projet, il faut effectuer plusieurs installations dans le terminal de commande:

- `npm i` ou `npm install` pour installer les nodes modules nécessaires
- `npm i @angular/material` pour installer les éléments nécessaires à l'affichage
- `npm i json-server` pour les données nécessaires à l'utilisations de services

## Déploiement des serveurs
Pour pouvoir récupérer les données contenues dans le db.json, il faut déployer le serveur json : `npm run start:db`


Afin de lancer le visuel du programme en mode developpement, il faut faire dans un terminal de commande :
 `ng serve -o`, qui ouvre une page web sur l'url : `http://localhost:4200/`.
 
  Le `-o` permet de ne pas avoir à recharger manuellement la page, elle le fait d'elle-même. Pour fermer le serveur, il suffit d'effectuer un `CTRL+C` dans l'invite de commande.
#


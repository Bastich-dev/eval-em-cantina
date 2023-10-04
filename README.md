# Projet : Star Wars Cantina - Eval-Final-EM-Aout-2021---Cantina

## Url de visualisation : https://cantina-starwars.vercel.app/

-   #### 01. [Description](#01)
-   #### 02. [Stack utilisée](#02)
    -   ##### [Stack](#02-1)
-   #### 03. [Parcours utilisateur / Features](#03)
    -   ##### [Accès à l'application](#03-1)
    -   ##### [Pages](#03-2)

<a name='01'></a>

## 01. Description

À l’aide du framework JavaScript React.js, vous devez réaliser une application de gestion de recettes de cuisine geek.

Votre application devra communiquer avec un serveur web REST et être en mesure de :

-   afficher une liste complète des recettes disponibles sur une page
-   consulter une recette en détails
-   ajouter une nouvelle recette via un formulaire
-   modifier une recette existante via un formulaire
-   supprimer une recette existante

<a name='02'></a>

## 02. Stack utilisée

<a name='02-1'></a>

##### Stack

| Utilisation              | Nom                       |
| ------------------------ | ------------------------- |
| Front-end                | Javascript / React.js     |
| Back-end                 | Express.js                |
| Design                   | AntDesign + Custom styles |
| Bundler                  | Webpack                   |
| Déploiement & Production | Vercel                    |

<a name='03'></a>

## 03. Parcours utilisateur / Features

<a name='03-1'></a>

### Accès à l'application :

Aucuns identifiants n'est nécessaire pour utiliser l'application;

<a name='03-2'></a>

### Pages :

<a name='03-2-1'></a>

#### - Page d'accueil

_Sur cette page, l'utilisateur peux gérer chercher une recette grâce aux champs de recherche.._

-   Animation d'appartition fade / Pure css
-   Animation d'apparition du texte / Pure css
-   Animation au Hover du bouton "Créer ma recette" |
-   Animation de l'ail / Pure css
-   Un champ pour filtrer la recherche si le texte rentré est présent dans le titre ou la description / Text Input
-   Un champ de filtrage pour choisir le temps de préparation / Select Input
-   Un champ de filtrage pour choisir le niveau de la recette / Select Input
-   Un champ de filtrage pour choisir pour combien de personnes est la recette / Number Input |
-   Affichage des recettes en fonction des filtres
-   Animation d'apparition fade des card en chaine par rapport à l'index

#### - Page de visualisation d'une recette

_Sur cette page, l'utilisateur peux voir toutes les informations d'une recette en fonction de l'id dans l'url._

-   Animation d'appartition fade / Pure css
-   Bouton pour modifier la recette

#### - Page de modification d'une recette

_Sur cette page, l'utilisateur peux voir touts les champs pour modifier une recette._

-   Plusieurs type de composants AntD :
<ul style='margin:20px'>
    <li>Input text avec un style modifié</li>
    <li>Input textarea</li>    
    <li>TimePicker</li>
</ul>

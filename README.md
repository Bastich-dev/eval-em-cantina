# Projet : Eval-Final-EM-Aout-2021---Cantina // Cook & Retry

-   #### 01. [Description](#01)
-   #### 02. [Stack utilisée](#02)
    -   ##### [Stack](#02-1)
    -   ##### [Liste des API's REST](#02-1)
-   #### 03. [Liste des librairies](#03)
    -   ##### [Utilitaires](#03-1)
    -   ##### [Configuration](#03-2)
-   #### 04. [Parcours utilisateur / Features](#04)

<!-- "
    -   ##### [Accès à l'application](#04-1)
    -   ##### [Pages](#04-2)
        -   ##### [Application principale](#04-2-1)
-   #### 05. [Détails techniques](#05)
    -   ##### [Design](#05-1)
    -   ##### [Contextes](#05-2)
    -   ##### [Objets](#05-3)
-   #### 06. [Documentation API](#06)
" -->

<a name='01'></a>

## 01. Description

<!-- L'application Lexbase - Front se concentre sur la manipulation et de la visualisation de l'alogrithme d'intelligence artificielle déployé pour la société LEXBASE. -->

<a name='02'></a>

## 02. Stack utilisée

<a name='02-1'></a>

##### Stack

<!-- | Utilisation              | Nom                         |
| ------------------------ | --------------------------- |
| Front-end                | Javascript / React.js       |
| Design                   | Material-Ui + Custom styles |
| Bundler                  | Webpack                     |
| Déploiement & Production | Interne                     |
| Repo                     | Gitlab                      | -->

<a name='02-1'></a>

##### Liste des API's REST

<!-- | Nom         | Language        | Documentation                                                                |
| ----------- | --------------- | ---------------------------------------------------------------------------- |
| API Lexbase | Python / Django | https://git2.magic-lemp.com/bchantrel/lexbase-front/-/blob/master/README.md/ | -->

<a name='03'></a>

## 03. Liste des librairies

<a name='03-1'></a>

##### Utilitaires

<!-- | Nom                                                          | Utilisation                               |
| ------------------------------------------------------------ | ----------------------------------------- |
| react: 16.13.1 /react-dom: 16.13.1 / react-router-dom: 5.2.0 | Basique et router                         |
| react-scripts: 3.4.3                                         | Create-react-app                          |
| @material-ui/core: ^4.11.2                                   | Designs & fonctionalitées principales     |
| @material-ui/lab: ^4.0.0-alpha.57                            | Designs & fonctionalitées                 |
| @material-ui/icons: ^4.11.2                                  | Icones material ui                        |
| axios: ^0.20.0                                               | Fonctionalitées pour appeler le backend   |
| dotenv: ^10.0.0                                              | Utilisation des variables d'environnement | -->

<a name='03-2'></a>

##### Configuration

<!-- Toutes les librairies ci-dessous sont utilisés pour la config :

    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "@babel/preset-react": "^7.10.4",
    "babel-loader": "^8.1.0",
    "clsx": "^1.1.1",
    "css-loader": "^4.3.0",
    "html-loader": "^1.3.1",
    "html-webpack-plugin": "^4.5.0",
    "image-webpack-loader": "^7.0.1",
    "raw-loader": "^4.0.1",
    "style-loader": "^1.2.1",
    "webpack": "4.42.0",
    "webpack-cli": "^3.3.12",
    "webpack-git-hash": "^1.0.2"

<a name='04'></a> -->

## 04. Parcours utilisateur / Features

<a name='04-1'></a>

### Accès à l'application :

<a name='04-2'></a>

### Pages :

<a name='04-2-1'></a>

#### - Home

<!-- _Sur cette page, l'utilisateur peux gérer tous les documents généres dans la tâche séléctionée._

<details><summary style='cursor:pointer'>Obtenir, sauvegarder, vérifier et rafraîchir le token d'authentification</summary>
<ul>
<b>Obtenir :</b>
<li>=> L'access tokent et le refresh token sont obtenus après la connexion </li>
<b>Sauvegarder :</b>
<li>=> L'access token et le refresh token sont stockés dans le localStorage lors de la connexion / l'access token est sauvegardé lors du rachraichissement du token </li>
<b>Vérifier :</b>
<li>=> L'access token est vérifié lors du chargement de la page, l'utilisateur est directment connecté si ses tokens sont valides / L'access tokene est vérifié à chaque call sur l'API, si il n'est pas valide, un rafraichissement est tenté.</li>
<b>Rafraîchir :</b>
<li>=> Si la vérification de l'access token n'a pas réussie, un rafraichissement de l'access token est tenté grâche au refresh_token, le nouvel access token est ensuite sauvegardé dans le localStorage.</li>
</ul>
</details> -->

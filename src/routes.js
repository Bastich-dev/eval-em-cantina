import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

export default [
    {
        path: "/",
        name: "Liste des recettes",
        component: Home,
        exact: true,
    },
    {
        path: "/recettes",
        name: "Liste des recettes",
        component: Home,
        exact: true,
    },
    {
        path: "/recette/new",
        name: "Nouvelle recette",
        component: Recipe,
        exact: true,
    },
    {
        path: "/recette/edit",
        name: "Modifier recette",
        component: Recipe,
        exact: false,
    },
];

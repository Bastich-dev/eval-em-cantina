import Home from "./pages/Home";
import EditRecipe from "./pages/EditRecipe";
import ViewRecipe from "./pages/ViewRecipe";

export default [
    {
        path: "/",
        name: "Liste des recettes",
        component: Home,
        exact: true,
    },
    {
        path: "/recette/",
        name: "Voir une recette",
        component: ViewRecipe,
        exact: false,
    },
    {
        path: "/new",
        name: "Nouvelle recette",
        component: EditRecipe,
        exact: true,
    },
    {
        path: "/edit",
        name: "Modifier une recette",
        component: EditRecipe,
        exact: false,
    },
];

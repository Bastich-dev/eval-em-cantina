import EditRecipe from "./pages/EditRecipe";
import Home from "./pages/Home";
import ViewRecipe from "./pages/ViewRecipe";

const routes = [
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

export default routes;

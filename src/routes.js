import EditPage from "pages/edit/page";
import HomePage from "pages/home/page";
import ViewPage from "pages/view/page";

const routes = [
    {
        path: "/",
        name: "Liste des recettes",
        component: HomePage,
        exact: true,
    },
    {
        path: "/new",
        name: "Nouvelle recette",
        component: EditPage,
        exact: true,
    },
    {
        path: "/recette/:id",
        name: "Voir une recette",
        component: ViewPage,
        exact: false,
    },
    {
        path: "/edit/:id",
        name: "Modifier une recette",
        component: EditPage,
        exact: false,
    },
];

export default routes;

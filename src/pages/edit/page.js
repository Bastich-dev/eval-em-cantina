import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "styles/recipe.css";
import FormRecipe from "./FormRecipe";

export default function EditPage() {
    const id = window.location.href.split("/")[3] === "new" ? null : window.location.href.split("/")[4];

    return (
        <>
            <h1 style={styles.title} className={"fadeIn"}>
                {id ? "Modifier" : "Ajouter"} une recette
            </h1>
            <Button href={"/"} size="large" icon={<ArrowLeftOutlined />}>
                Retour
            </Button>
            <FormRecipe id={id} />
        </>
    );
}

const styles = {
    row: {
        display: "flex",
        alignItems: "center",
        marginTop: 50,
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    title: {
        textAlign: "center",
        fontSize: "calc(2vh + 2vw)",
        marginBottom: "50px",
        color: "var(--primary-color)",
        fontWeight: "bold",
        // textDecoration: "underline",
    },
};

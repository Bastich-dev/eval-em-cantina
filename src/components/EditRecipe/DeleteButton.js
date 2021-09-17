import React from "react";

import { Button, Form, Input } from "antd";
import { deleteRecipe } from "../../utils/API_Cantina";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

export default function SubmitButton({ id }) {
    const [loading, setloading] = React.useState(false);
    const history = useHistory();

    const deleteRecipe = () => {
        setloading(true);
        if (window.confirm("Voulez vous vraiment supprimer cette recette ?\nCette action est irréversible. ")) {
            deleteRecipe({ id })
                .then(() => {
                    setloading(false);
                    toast.success("La recette a été supprimé avec succès");
                    history.push("/");
                })
                .catch(() => {
                    setloading(false);
                    toast.error("Une erreur est survenue durant la suppression de la recette");
                });
        }
    };

    return (
        <Button style={styles.button} type="primary" danger size="large" loading={loading} onClick={deleteRecipe}>
            Supprimer
        </Button>
    );
}

const styles = {
    button: {
        width: "100%",
        height: 60,
        borderRadius: 10,
    },
};

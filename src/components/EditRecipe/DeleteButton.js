import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { deleteRecipe } from "../../utils/API_Cantina";
export default function SubmitButton({ id }) {
    const [loading, setloading] = React.useState(false);
    const history = useHistory();

    const deleteAction = () => {
        if (window.confirm("Voulez vous vraiment supprimer cette recette ?\nCette action est irréversible. ")) {
            setloading(true);
            deleteRecipe({ id })
                .then(() => {
                    setloading(false);
                    toast.success("La recette a été supprimée avec succès");
                    history.push("/");
                })
                .catch(() => {
                    setloading(false);
                    toast.error("Une erreur est survenue durant la suppression de la recette");
                });
        }
    };

    return (
        <Button style={styles.button} type="primary" danger size="large" loading={loading} onClick={deleteAction}>
            Supprimer recette
        </Button>
    );
}

const styles = {
    button: {
        width: "100%",
        height: 60,
        borderRadius: 10,
        fontSize: 20,
    },
};

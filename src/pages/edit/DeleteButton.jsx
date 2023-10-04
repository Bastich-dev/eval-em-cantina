import { deleteRecipe } from "API_Cantina";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function SubmitButton({ id }) {
    const [loading, setloading] = React.useState(false);
    const navigate = useNavigate();

    const deleteAction = () => {
        if (window.confirm("Voulez vous vraiment supprimer cette recette ?\nCette action est irréversible. ")) {
            setloading(true);
            deleteRecipe({ id })
                .then(() => {
                    setloading(false);
                    toast.success("La recette a été supprimée avec succès");
                    navigate("/");
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
        height: 80,
        borderRadius: 10,
        fontSize: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

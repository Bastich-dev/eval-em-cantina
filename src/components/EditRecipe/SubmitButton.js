import { Button } from "antd";
import React from "react";

export default function SubmitButton({ id, loading }) {
    return (
        <Button style={styles.button} type="primary" size="large" loading={loading} htmlType="submit">
            {id ? "Sauvegarder modifications" : "Ajouter recette"}
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

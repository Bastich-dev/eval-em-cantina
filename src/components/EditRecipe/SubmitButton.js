import React from "react";

import { Button, Form, Input } from "antd";
export default function SubmitButton({ id, data }) {
    const [loading, setloading] = React.useState(false);

    return (
        <Button style={styles.button} type="primary" size="large" loading={loading} onClick={save} htmlType="submit">
            {id ? "Sauvegarder modifications" : "Ajouter recette"}
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

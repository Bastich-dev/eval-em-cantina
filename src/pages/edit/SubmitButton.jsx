import { Button } from "antd";

export default function SubmitButton({ isEditInstance, loading }) {
    return (
        <Button style={styles.button} size="large" loading={loading} htmlType="submit">
            {isEditInstance ? "Sauvegarder modifications" : "Enregistrer recette"}
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

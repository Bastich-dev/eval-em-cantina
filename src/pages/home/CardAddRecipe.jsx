import { PlusCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

export default function CardAddRecipe() {
    const navigate = useNavigate();

    return (
        <Card hoverable className="cardRecipe" id="addRecipe" style={styles.card} onClick={() => navigate("/new")}>
            <div style={styles.container}>
                <h3 style={styles.title}>Ajouter ma recette</h3>
                <PlusCircleOutlined style={styles.icon} />
            </div>
        </Card>
    );
}

const styles = {
    card: {
        width: "100%",
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.23)",
        borderRadius: 10,
        marginBottom: 45,
        cursor: "pointer",
        transition: "0.3s",
        border: "1px solid var(--primary-color)",
    },
    container: {
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        color: "white",
        margin: 20,
        textAlign: "center",
    },
    icon: {
        fontSize: 46,
        color: "white",
    },
};

import React from "react";
import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function CardAddRecipe() {
    return (
        <Card className="cardRecipe" style={styles.card}>
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
        backgroundColor: "var(--primary-bg-color)",
    },
    container: {
        minHeight: 290,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        color: "white",
        margin: 20,
    },
    icon: {
        fontSize: 46,
        color: "white",
    },
};

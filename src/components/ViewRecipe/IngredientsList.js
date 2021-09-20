import { Card, Divider } from "antd";
import React from "react";

export default function IngredientsList({ ingredients }) {
    return (
        <Card>
            <Divider orientation="left" style={styles.header}>
                Liste des ingrédients
            </Divider>
            <ul style={styles.list}>
                {ingredients.map((ingredient, key) => (
                    <li key={key}> {`${ingredient[0]}  ${ingredient[1]}`} </li>
                ))}
            </ul>
        </Card>
    );
}

const styles = {
    header: {
        fontSize: 18,
    },
    list: {
        listStyleType: "none",
        margin: 10,
        fontSize: 18,
    },
};

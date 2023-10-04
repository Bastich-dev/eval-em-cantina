import { Card } from "antd";

export default function IngredientsList({ ingredients }) {
    return (
        <Card>
            <h2 style={styles.header}>Liste des ingrédients</h2>
            <hr />
            <br />
            <ul style={styles.list}>
                {ingredients.map((ingredient, key) => (
                    <li key={key}> {`- ${ingredient.quantity}  ${ingredient.title}`} </li>
                ))}
            </ul>
        </Card>
    );
}

const styles = {
    header: {
        fontSize: 36,
        fontWeight: "bold",
    },
    list: {
        margin: 10,
        fontSize: 18,
    },
};

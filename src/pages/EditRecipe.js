import { Col, Row } from "antd";
import React from "react";
import FormRecipe from "../components/EditRecipe/FormRecipe";
import ReturnPage from "../components/_common/ReturnPage";
import "../css/recipe.css";

export default function AddRecipe() {
    const isEditInstance = window.location.href.split("/")[3] === "new" ? false : true;
    const id = isEditInstance ? window.location.href.split("/")[4] : null;
    const [fadeHandler, setFadeHandler] = React.useState(false);

    return (
        <Row>
            <Col
                lg={{
                    span: 18,
                    offset: 2,
                }}
                md={{
                    span: 16,
                    offset: 2,
                }}
                xs={24}
                style={styles.row}>
                <ReturnPage id={id} setFadeHandler={setFadeHandler} />
                <h1 style={styles.title} className={fadeHandler ? "fadeLeftOut" : "fadeIn"}>
                    {id ? "Modifier" : "Ajouter"} une recette
                </h1>
            </Col>
            <Col span={16} offset={4} className={fadeHandler ? "fadeLeftOut" : "fadeIn"}>
                <FormRecipe isEditInstance={isEditInstance} id={id} />
            </Col>
        </Row>
    );
}

const styles = {
    row: {
        display: "flex",
        alignItems: "center",
        marginTop: 50,
    },
    title: {
        margin: 0,
        padding: 0,
        flex: 1,
        textAlign: "center",
        fontSize: 42,
        color: "var(--primary-bg-color)",
        fontWeight: "bold",
    },
};

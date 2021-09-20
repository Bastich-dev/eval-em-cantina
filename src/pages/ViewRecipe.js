import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import ReturnPage from "../components/_common/ReturnPage";
import "../css/recipe.css";
import CardRecipe from "../components/ViewRecipe/CardRecipe";

import { getRecipeFromId } from "../utils/API_Cantina";

export default function AddRecipe() {
    const id = window.location.href.split("/")[4];

    const [recipeData, setrecipeData] = useState();
    useEffect(() => {
        getRecipeFromId({ id }).then(data => setrecipeData(data));
    }, [id]);

    const [fadeHandler, setFadeHandler] = useState(false);

    return (
        <Row align="top" id="viewRecipe">
            <Col
                lg={{
                    span: 2,
                    offset: 2,
                }}
                md={20}
                xs={24}
                style={styles.row}>
                <ReturnPage setFadeHandler={setFadeHandler} />
            </Col>
            <Col
                lg={{
                    span: 16,
                    offset: 2,
                }}
                md={20}
                xs={{
                    span: 22,
                    offset: 1,
                }}
                style={styles.row}
                className={fadeHandler ? "fadeLeftOut" : ""}>
                {recipeData && <CardRecipe recipe={recipeData} id={id} />}
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
        color: "white",
        fontWeight: "bold",
    },
};

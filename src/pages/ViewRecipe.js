import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CardRecipe from "../components/ViewRecipe/CardRecipe";
import ReturnPage from "../components/_common/ReturnPage";
import "../css/recipe.css";
import { getRecipeFromId } from "../utils/API_Cantina";

export default function AddRecipe() {
    const id = window.location.href.split("/")[4];

    const [recipeData, setrecipeData] = useState();
    useEffect(() => {
        getRecipeFromId({ id }).then(data => setrecipeData(data));
    }, [id]);

    const [fadeHandler, setFadeHandler] = useState(false);
    const history = useHistory();

    const goToRecipe = () => {
        history.push("/edit/" + id);
    };

    return (
        <Row align="top" id="viewRecipe" justify="center">
            <Col
                lg={{
                    span: 20,
                }}
                md={20}
                xs={24}
                style={styles.row}>
                <ReturnPage setFadeHandler={setFadeHandler} />

                <Button style={styles.editIcon} size="large" type="primary" icon={<EditOutlined />} onClick={goToRecipe}>
                    Modifier recette
                </Button>
            </Col>
            <Col
                lg={{
                    span: 20,
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
        justifyContent: "space-between",
        marginTop: 50,
        flexWrap: "wrap",
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
    editIcon: {
        color: "white",
        height: 65,
        width: 300,
        fontSize: 24,
        fontWeight: "bold",
        borderRadius: 7,
    },
};

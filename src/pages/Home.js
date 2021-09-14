import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Title from "../components/Home/Title";
import CardRecipe from "../components/Home/CardRecipe";
import CardAddRecipe from "../components/Home/CardAddRecipe";

import { getListRecipesFromSearch } from "../utils/API_Cantina";
import FormSearch from "../components/Home/FormSearch";

export default function Home() {
    const [listRecipes, setlistRecipes] = useState();

    useEffect(() => {
        getListRecipesFromSearch().then(recipes => {
            setlistRecipes(recipes);
            console.log(recipes);
        });
    }, []);

    return (
        <Row style={styles.row} justify="center">
            <Col md={9} sm={24} style={styles.col}>
                <Title />
            </Col>
            <Col md={9} sm={24} style={styles.col}>
                {/* <Animation /> */}
                <p style={styles.description}>Je souhaite cuisiner :</p>
                <FormSearch />
            </Col>
            <Col span={18}>
                <Row gutter={[36, 36]}>
                    {listRecipes &&
                        listRecipes.map((el, key) => (
                            <Col span={6} key={key}>
                                <CardRecipe data={el} />
                            </Col>
                        ))}
                    <Col span={6}>
                        <CardAddRecipe />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

const styles = {
    row: {
        height: "67vh",
    },
    col: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        fontSize: "36px",
        color: "var(--secondary-font-color)",
    },
    description: {
        textAlign: "center",
    },
    backToTop: {
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

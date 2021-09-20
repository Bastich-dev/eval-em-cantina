import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Animation from "../components/Home/Animation";
import CardAddRecipe from "../components/Home/CardAddRecipe";
import CardRecipe from "../components/Home/CardRecipe";
import { compareIngredients, compareLevel, comparePersons, compareSearch, compareTime } from "../components/Home/compareFunctions";
import FormSearch from "../components/Home/FormSearch";
import Title from "../components/Home/Title";
import Loading from "../components/_common/Loading";
import "../css/home.css";
import { getListAllRecipes } from "../utils/API_Cantina";

export default function Home() {
    /////////// RECIPE LIST
    const [listRecipesInit, setListRecipesInit] = useState();
    const [listRecipes, setListRecipes] = useState();

    useEffect(() => {
        getListAllRecipes().then(recipes => {
            setListRecipesInit(recipes);
            setListRecipes(recipes);
        });
    }, []);

    /////////// FILTER
    const [searchInput, setSearchInput] = useState(
        sessionStorage.getItem("search_input")
            ? JSON.parse(sessionStorage.getItem("search-filters"))
            : {
                  search: "",
                  time: null,
                  level: null,
                  persons: null,
                  ingredients: [],
              }
    );

    useEffect(() => {
        setListRecipes();
        setTimeout(() => {
            setListRecipes(
                listRecipesInit?.filter(
                    e =>
                        compareSearch(e, searchInput) &&
                        comparePersons(e, searchInput) &&
                        compareTime(e, searchInput) &&
                        compareIngredients(e, searchInput) &&
                        compareLevel(e, searchInput)
                )
            );
        }, 1250);
    }, [searchInput, listRecipesInit]);

    return (
        <Row style={styles.row} justify="center">
            <Col lg={9} md={18} xs={20} style={styles.col}>
                <Title />
            </Col>
            <Col
                lg={{
                    span: 8,
                    offset: 1,
                }}
                md={18}
                xs={20}
                style={styles.col}
                className="fadeIn">
                <Animation />
                <div style={styles.containForm}>
                    <p style={styles.description}>Je souhaiterai cuisiner :</p>
                    <FormSearch searchInput={searchInput} setSearchInput={setSearchInput} />
                </div>
            </Col>
            <Col span={18}>
                <Row gutter={[36, 36]}>
                    {listRecipes ? (
                        <>
                            {listRecipes &&
                                listRecipes.map((el, key) => (
                                    <Col lg={6} md={12} sm={20} key={key}>
                                        <CardRecipe data={el} index={key} />
                                    </Col>
                                ))}
                            <Col lg={6} md={12} sm={20}>
                                <CardAddRecipe />
                            </Col>
                        </>
                    ) : (
                        <Col span={24}>
                            <Loading />
                        </Col>
                    )}
                </Row>
            </Col>
        </Row>
    );
}

const styles = {
    row: {
        height: "65vh",
    },
    col: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 40,
    },
    containForm: {
        backgroundColor: "white",
        zIndex: 999,
        border: "3px solid var(--primary-bg-color)",
        borderRadius: 10,
        padding: 20,
    },
    title: {
        fontSize: "36px",
        color: "var(--secondary-font-color)",
    },
    description: {
        textAlign: "center",
        fontSize: 20,
        color: "var(--primary-bg-color)",
        fontWeigth: "bold",
    },
    backToTop: {
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

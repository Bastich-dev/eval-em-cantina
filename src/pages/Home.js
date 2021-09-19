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
            setTimeout(() => {
                setListRecipesInit(recipes);
                setListRecipes(recipes);
                console.log(recipes);
            }, 2800);
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
            <Col md={9} sm={24} style={styles.col}>
                <Title />
            </Col>
            <Col offset={1} md={8} sm={24} style={styles.col}>
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
                                    <Col span={6} key={key}>
                                        <CardRecipe data={el} />
                                    </Col>
                                ))}
                            <Col span={6}>
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

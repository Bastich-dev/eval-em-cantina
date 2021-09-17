import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Title from "../components/Home/Title";
import CardRecipe from "../components/Home/CardRecipe";
import CardAddRecipe from "../components/Home/CardAddRecipe";
import Animation from "../components/Home/Animation";
import { getListAllRecipes } from "../utils/API_Cantina";
import FormSearch from "../components/Home/FormSearch";
import Loading from "../components/_common/Loading";
import "../css/home.css";

export default function Home() {
    //// ANIMATIONS

    //////// STATES

    const [listRecipesInit, setListRecipesInit] = useState();
    const [listRecipes, setListRecipes] = useState();
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

    //////// FUNCTIONS COMPARE

    function compareTime({ tempsPreparation }) {
        const isEmpty = !searchInput.time;
        if (isEmpty) return true;
        else if (searchInput.time <= 60 && tempsPreparation <= searchInput.time) return true;
        else if (searchInput.time > 60 && tempsPreparation > searchInput.time) return true;
        else {
            return false;
        }
    }

    function compareIngredients({ ingredients }) {
        // const isEmpty = !searchInput.ingredients.length === 0;
        // let commonIngredient = false;
        // searchInput.ingredients.forEach(e => {
        //     if (ingredients.includes(e)) {
        //         commonIngredient = true;
        //     }
        // });
        // if (isEmpty || commonIngredient) return true;
        // else {
        //     return false;
        // }
        return true;
    }

    function compareSearch({ titre, description }) {
        const isEmpty = !searchInput.search;
        const isInTitle = titre.toLowerCase().indexOf(searchInput.search) > -1;
        const isInDescription = description.toLowerCase().indexOf(searchInput.search) > -1;
        if (isEmpty || isInTitle || isInDescription) return true;
        else return false;
    }

    function compareLevel({ niveau }) {
        const isEmpty = !searchInput.level;
        if (isEmpty || searchInput.level === niveau) return true;
        else return false;
    }

    function comparePersons({ personnes }) {
        const isEmpty = !searchInput.persons;
        if (isEmpty) return true;
        else if (searchInput.persons < 6 && personnes === searchInput.persons) return true;
        else if (searchInput.persons === 6 && personnes > searchInput.persons) return true;
        else return false;
    }

    //////// LIFECYCLE

    useEffect(() => {
        getListAllRecipes().then(recipes => {
            setTimeout(() => {
                setListRecipesInit(recipes);
                setListRecipes(recipes);
                console.log(recipes);
            }, 2800);
        });
    }, []);

    useEffect(() => {
        setListRecipes();
        setTimeout(() => {
            setListRecipes(
                listRecipesInit?.filter(e => compareSearch(e) && comparePersons(e) && compareTime(e) && compareIngredients(e) && compareLevel(e))
            );
        }, 1000);
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

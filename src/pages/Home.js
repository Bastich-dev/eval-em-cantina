import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Title from "../components/Home/Title";
import CardRecipe from "../components/Home/CardRecipe";
import CardAddRecipe from "../components/Home/CardAddRecipe";

import { getListRecipesFromSearch } from "../utils/API_Cantina";
import FormSearch from "../components/Home/FormSearch";

export default function Home() {
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
        getListRecipesFromSearch().then(recipes => {
            setListRecipesInit(recipes);
            setListRecipes(recipes);
            console.log(recipes);
        });
    }, []);

    useEffect(() => {
        setListRecipes(
            listRecipesInit?.filter(e => compareSearch(e) && comparePersons(e) && compareTime(e) && compareIngredients(e) && compareLevel(e))
        );
    }, [searchInput]);

    return (
        <Row style={styles.row} justify="center">
            <Col md={9} sm={24} style={styles.col}>
                <Title />
            </Col>
            <Col offset={1} md={8} sm={24} style={styles.col}>
                {/* <Animation /> */}
                <p style={styles.description}>Je souhaite cuisiner :</p>
                <FormSearch searchInput={searchInput} setSearchInput={setSearchInput} />
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

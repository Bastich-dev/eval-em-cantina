import { useQuery } from "@tanstack/react-query";
import { getListAllRecipes } from "API_Cantina";
import { Col, Row } from "antd";
import Loading from "components/Loading";
import { useState } from "react";
import Animation from "./Animation";
import CardAddRecipe from "./CardAddRecipe";
import CardRecipe from "./CardRecipe";
import FormSearch from "./FormSearch";
import Title from "./Title";
import { compareIngredients, compareLevel, comparePersons, compareSearch, compareTime } from "./compareFunctions";
import "./page.css";

export default function HomePage() {
    const { data, isLoading } = useQuery({
        queryKey: ["recipes"],
        queryFn: getListAllRecipes,
    });

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

    const listRecipes =
        data?.filter(
            (e) =>
                compareSearch(e, searchInput) &&
                comparePersons(e, searchInput) &&
                compareTime(e, searchInput) &&
                compareIngredients(e, searchInput) &&
                compareLevel(e, searchInput)
        ) || false;

    return (
        <Row
            gutter={{
                md: 128,
                lg: 128,
                xl: 128,
            }}
            style={styles.row}
            justify="center">
            <Col lg={12} md={24} xs={24} style={styles.col}>
                <Title />
            </Col>
            <Col lg={12} md={24} xs={24} style={styles.col} className="fadeIn">
                <Animation />
                <div style={styles.containForm}>
                    <p style={styles.description}>Je souhaiterai cuisiner :</p>
                    <FormSearch searchInput={searchInput} setSearchInput={setSearchInput} />
                </div>
            </Col>
            <Col span={24}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <Row id="recipes" gutter={[24, 24]}>
                        {listRecipes?.map((el, key) => (
                            <Col lg={6} md={12} sm={20} key={key} style={{ width: "-webkit-fill-available" }}>
                                <CardRecipe data={el} index={key} />
                            </Col>
                        ))}
                        <Col xl={6} lg={6} md={12} sm={20}>
                            <CardAddRecipe />
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    );
}

const styles = {
    row: {
        marginTop: "10vh",
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
        backgroundColor: "var(--bg-color)",
        zIndex: 999,
        border: "3px solid var(--primary-color)",
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
        color: "var(--primary-color)",
        fontWeigth: "bold",
    },
    backToTop: {
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

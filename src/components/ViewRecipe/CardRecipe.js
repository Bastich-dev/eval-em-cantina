import { Row, Col, Button } from "antd";
import React from "react";
import ClockImage from "../../media/img/clock.png";
import moment from "moment";
import StepsList from "./StepsList";
import IngredientsList from "./IngredientsList";
import { EditOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
export default function CardRecipe({ recipe, id }) {
    const getLevelLabel = () => {
        switch (recipe.niveau) {
            case "padawan":
                return "Padawan";
            case "jedi":
                return "Jedi";
            case "maitre":
                return "Maître";

            default:
                return "";
        }
    };

    const history = useHistory();

    const goToRecipe = () => {
        history.push("/edit/" + id);
    };

    return (
        <section hoverable="true" style={styles.card} className="fadeIn">
            <img src={recipe.photo} alt={recipe.titre} style={styles.image} />
            <div style={styles.layer}>
                <h2 style={styles.title}>{recipe.titre}</h2>

                <Button style={styles.editIcon} size="large" type="primary" icon={<EditOutlined />} onClick={goToRecipe}>
                    Modifier recette
                </Button>

                <div style={styles.bottomLayer}>
                    <div>
                        <div style={styles.center}>
                            <img src={ClockImage} alt="clock" style={styles.clock} />
                            <span style={styles.clockText}>
                                {moment.utc().startOf("day").add({ minutes: recipe.tempsPreparation }).format("HH:mm")}
                            </span>
                        </div>
                        <div style={styles.center}>
                            <span style={styles.clockText}>{`${recipe.personnes} personne${recipe.personnes > 1 ? "s" : ""}`}</span>
                        </div>
                    </div>
                    <div>
                        <div style={styles.center}>
                            <span style={styles.clockText}>Niveau : {getLevelLabel()}</span>
                        </div>
                        <div style={styles.center}>
                            <span style={styles.clockText}>{`${recipe.etapes.length} étape${recipe.etapes.length > 1 ? "s" : ""}`}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Row gutter={[24, 24]} style={styles.row} justify="center">
                <Col lg={10} md={20}>
                    <IngredientsList ingredients={recipe.ingredients} />
                </Col>
                <Col lg={14} md={20}>
                    <StepsList steps={recipe.etapes} />
                </Col>
            </Row>
        </section>
    );
}

const heightLayer = 500;
const styles = {
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: "100%",
        minHeight: 1000,
        padding: 0,
        border: "1px solid grey",
        borderRadius: 10,
        boxShadow: "0px 0px 50px 5px rgba(0,0,0,0.2)",
        marginBottom: 80,
        paddingBottom: 50,
    },
    image: {
        width: "100%",
        height: heightLayer,
        objectFit: "cover",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    layer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: "relative",
        top: -heightLayer,
        height: heightLayer,
        marginBottom: -heightLayer,
        width: "100%",
        boxShadow: "inset 0px 0px 48px 58px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        filter: "drop-shadow(0 0 0.75rem grey)",
        textShadow: "3px 3px 2px black",
    },
    title: {
        width: "100%",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 52,
    },
    clock: {
        width: 60,
        height: 60,
        objectFit: "contain",
    },
    clockText: {
        color: "white",
        fontSize: 30,
        marginLeft: 10,
        fontWeight: "bold",
    },
    bottomLayer: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
    },

    editIcon: {
        // backgroundColor: "var(--primary-bg-color)",
        position: "absolute",
        color: "white",
        height: 50,
        width: 200,
        margin: 30,
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 7,
    },
    row: {
        padding: 15,
    },
};

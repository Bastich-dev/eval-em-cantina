import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "antd";
import Title from "./Inputs/Title";
import Photo from "./Inputs/Photo";
import Description from "./Inputs/Description";
import Steps from "./Inputs/Steps";
import Ingredients from "./Inputs/Ingredients";
import Level from "./Inputs/Level";
import Persons from "./Inputs/Persons";
import Time from "./Inputs/Time";
import SubmitButton from "./SubmitButton";
import { getRecipeFromId, updateRecipe } from "../../utils/API_Cantina";
import Loading from "../_common/Loading";
import DeleteButton from "./DeleteButton";
import { createRecipe } from "../../utils/API_Cantina";
import { toast } from "react-toastify";

export default function FormRecipe({ id, isEditInstance }) {
    const [recipeData, setrecipeData] = useState();

    useEffect(() => {
        if (isEditInstance) {
            getRecipeFromId({ id }).then(data => setrecipeData(data));
        } else {
            setrecipeData({
                description: "",
                etapes: ["", ""],
                ingredients: [
                    ["", ""],
                    ["", ""],
                ],
                niveau: "padawan",
                personnes: 1,
                photo: "",
                tempsPreparation: null,
                titre: "",
            });
        }
    }, []);

    const onFinish = value => {
        // ///// Format data
        let formatedValues = { ...value };
        formatedValues.ingredients = formatedValues.ingredient.map(el => [el.quantity, el.title]);
        delete formatedValues.ingredient;
        if (formatedValues?.tempsPreparations?._d) {
            formatedValues.tempsPreparation =
                new Date(formatedValues.tempsPreparations._d).getHours() * 60 + new Date(formatedValues.tempsPreparations._d).getMinutes();
        } else delete formatedValues.tempsPreparation;

        if (id) {
            updateRecipe({ id, data: formatedValues })
                .then(() => {
                    toast.success("La recette a été modifié avec succès");
                })
                .catch(() => {
                    toast.error("Erreur survenue à la modification de la recette");
                });
        } else {
            createRecipe({ data: formatedValues })
                .then(() => {
                    toast.success("La recette a été ajoutée avec succès");
                })
                .catch(() => {
                    toast.error("Erreur survenue à l'ajout de la recette");
                });
        }
    };
    return recipeData ? (
        <Form
            onFinish={onFinish}
            initialValues={{
                ...recipeData,
                ingredient: recipeData.ingredients ? recipeData.ingredients.map(el => ({ title: el[1], quantity: el[0] })) : [],
                remember: true,
            }}
            autoComplete="off">
            <Row className="formRecipe" gutter={[24, 24]} justify="center">
                {!recipeData && (
                    <Col span={20} offset={2} style={{ height: "80vh" }}>
                        <Loading />
                    </Col>
                )}
                {recipeData && (
                    <>
                        <Col span={14} className="formInputs">
                            <Title />
                            <Description />
                            <Time initValue={recipeData.tempsPreparation} />
                            <Level initValue={recipeData.niveau} />
                        </Col>
                        <Col span={10} className="aside">
                            <Photo initValue={recipeData.photo} />
                            <Persons initValue={recipeData.personnes} />
                        </Col>
                        <Col span={14} className="formInputs">
                            <Steps />
                        </Col>
                        <Col span={10} className="aside">
                            <Ingredients initValue={recipeData.ingredients} />
                        </Col>
                        {id ? (
                            <>
                                <Col lg={6} md={12} sm={24}>
                                    <SubmitButton id={id} />
                                </Col>
                                <Col lg={6} md={12} sm={24}>
                                    <DeleteButton id={id} />
                                </Col>
                            </>
                        ) : (
                            <Col lg={12} md={12} sm={24}>
                                <SubmitButton id={id} />
                            </Col>
                        )}
                    </>
                )}
            </Row>
        </Form>
    ) : (
        <div style={{ width: "100%", height: "50vh" }}>
            <Loading />
        </div>
    );
}

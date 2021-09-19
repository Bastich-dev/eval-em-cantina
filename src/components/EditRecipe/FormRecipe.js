import { Col, Form, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { createRecipe, getRecipeFromId, updateRecipe } from "../../utils/API_Cantina";
import Loading from "../_common/Loading";
import DeleteButton from "./DeleteButton";
import Description from "./Inputs/Description";
import Ingredients from "./Inputs/Ingredients";
import Level from "./Inputs/Level";
import Persons from "./Inputs/Persons";
import Photo from "./Inputs/Photo";
import Steps from "./Inputs/Steps";
import Time from "./Inputs/Time";
import Title from "./Inputs/Title";
import SubmitButton from "./SubmitButton";

export default function FormRecipe({ id, isEditInstance }) {
    ////////////////////////   RECIPE DATA
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
    }, [isEditInstance, id]);

    ////////////////////////   FORM SUBMIT
    const [loadingButtons, setLoadingButtons] = useState(false);
    const history = useHistory();
    const onFinish = value => {
        setLoadingButtons(true);

        // Format data
        let formatedValues = { ...value };
        formatedValues.ingredients = formatedValues.ingredient.map(el => [el.quantity, el.title]);
        delete formatedValues.ingredient;
        if (formatedValues?.tempsPreparations?._d) {
            formatedValues.tempsPreparation =
                new Date(formatedValues.tempsPreparations._d).getHours() * 60 + new Date(formatedValues.tempsPreparations._d).getMinutes();
        } else delete formatedValues.tempsPreparation;

        // Send data
        if (id) {
            updateRecipe({ id, data: formatedValues })
                .then(() => toast.success("La recette a été modifié avec succès"))
                .catch(() => toast.error("Erreur survenue à la modification de la recette"))
                .finally(() => setLoadingButtons(false));
        } else {
            createRecipe({ data: formatedValues })
                .then(({ id }) => {
                    history.push("/edit/" + id);
                    toast.success("La recette a été ajoutée avec succès");
                })
                .catch(() => toast.error("Erreur survenue à l'ajout de la recette"))
                .finally(() => setLoadingButtons(false));
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
                                    <SubmitButton id={id} loading={loadingButtons} />
                                </Col>
                                <Col lg={6} md={12} sm={24}>
                                    <DeleteButton id={id} loading={loadingButtons} />
                                </Col>
                            </>
                        ) : (
                            <Col lg={12} md={12} sm={24}>
                                <SubmitButton id={id} loading={loadingButtons} />
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

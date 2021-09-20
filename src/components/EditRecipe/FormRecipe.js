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
import moment from "moment";
export default function FormRecipe({ id, isEditInstance }) {
    ////////////////////////   RECIPE DATA
    const [recipeData, setrecipeData] = useState();
    useEffect(() => {
        if (isEditInstance) {
            getRecipeFromId({ id }).then(data =>
                setrecipeData({
                    ...data,
                    tempsPreparation: moment(moment.utc().startOf("day").add({ minutes: data.tempsPreparation }).format("HH:mm:ss"), "HH:mm:ss"),
                })
            );
        } else {
            setrecipeData({
                description: "",
                etapes: [""],
                ingredients: [["", ""]],
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
        if (formatedValues?.tempsPreparation?._d) {
            formatedValues.tempsPreparation =
                new Date(formatedValues.tempsPreparation._d).getHours() * 60 + new Date(formatedValues.tempsPreparation._d).getMinutes();
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

    const onFinishFailed = () => {
        toast.error("Il reste des champs requis");
    };

    return recipeData ? (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
                ...recipeData,
                ingredient: recipeData.ingredients ? recipeData.ingredients.map(el => ({ title: el[1], quantity: el[0] })) : [],
                remember: true,
            }}
            autoComplete="off">
            <Row className="formRecipe" justify="center" gutter={[24, 24]}>
                {!recipeData && (
                    <Col span={20} style={{ height: "80vh" }}>
                        <Loading />
                    </Col>
                )}
                {recipeData && (
                    <>
                        <Col lg={14} md={24} className="formInputs">
                            <Title />
                            <Description />
                            <Time />
                            <Level initValue={recipeData.niveau} />
                        </Col>
                        <Col lg={10} md={24} className="aside">
                            <Photo initValue={recipeData.photo} />
                            <Persons initValue={recipeData.personnes} />
                        </Col>
                        <Col lg={14} md={24} className="formInputs">
                            <Steps />
                        </Col>
                        <Col lg={10} md={24} className="aside">
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

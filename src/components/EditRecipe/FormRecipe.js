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

export default function FormRecipe() {
    const [recipeData, setrecipeData] = useState();
    const isEditInstance = window.location.href.split("/")[3] === "new" ? false : true;
    const id = isEditInstance ? window.location.href.split("/")[4] : null;

    useEffect(() => {
        if (isEditInstance) {
            getRecipeFromId({ id }).then(recipeData => setrecipeData(recipeData));
        }
    }, []);

    const onFinish = (value, allValues) => {
        let initObject = {
            description: "",
            etapes: [],
            ingredients: [],
            niveau: "",
            personnes: 1,
            photo: "",
            tempsPreparation: 0,
            titre: "",
        };
        // ///// Format data
        // if (initObject.niveau === undefined) initObject.niveau = "padawan";
        // initObject.ingredients = initObject.ingredients.map(el => [el[0], el[1]]);
        // if (id) {
        //     updateRecipe({ id, data: allValues }).then(res => {
        //         console.log(res);
        //     });
        // } else {
        //     // createRecipe({data : allValues})
        // }
        // console.log(value);
    };
    console.log(recipeData);
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
                            <Photo />
                            <Persons initValue={recipeData.personnes} />
                        </Col>
                        <Col span={14} className="formInputs">
                            <Steps />
                        </Col>
                        <Col span={10} className="aside">
                            <Ingredients initValue={recipeData.ingredients} />
                        </Col>
                        <Col lg={6} md={12} sm={24}>
                            <SubmitButton id={id} data={recipeData} />
                        </Col>
                        <Col lg={6} md={12} sm={24}>
                            {id && <DeleteButton id={id} />}
                        </Col>
                    </>
                )}
            </Row>
        </Form>
    ) : (
        <></>
    );
}

// description: "Moelleux au chocolat, coeur coulant et piment d'Espelette";
// etapes: (3)[
//     ("Commencez par préparer les moules à gâteau. Précha…210°C (th. 7).Beurrez les moules et réservez-les.",
//     "Faites fondre le chocolat et le beurre au bain-mar…rre-chocolat, le piment d'Espelette et la farine.",
//     "Enfournez 8 minutes. Servez chaud.")
// ];
// id: 9;
// ingredients: (7)[(Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2))];
// niveau: "padawan";
// personnes: 4;
// photo: "http://localhost:9000/images/chocolate-lava-cake.jpg";
// tempsPreparation: 10;
// titre: "Chocolate lava cake";

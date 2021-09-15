import React from "react";
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

export default function FormRecipe() {
    const isEditInstance = window.location.href.split("/")[4] === "new" ? false : true;
    const id = isEditInstance ? window.location.href.split("/")[5] : null;

    console.log(isEditInstance);
    console.log(id);

    React.useEffect(() => {
        if (isEditInstance) {
        }
    }, []);

    return (
        <Form className="formRecipe">
            {/* <Row>
                <Col span={12} className="formInputs">
                    <Title />
                    <Description />
                    <Steps />
                    <Ingredients />
                    <Time />
                </Col>
                <Col span={12} className="aside">
                    <Photo />
                    <Persons />
                    <Level />
                </Col>
                <Col span={24}>
                    <SubmitButton />
                </Col>
            </Row> */}
        </Form>
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

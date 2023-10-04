import { useQuery } from "@tanstack/react-query";
import { createRecipe, getRecipeFromId, updateRecipe } from "API_Cantina";
import { Col, Form, Row } from "antd";
import Loading from "components/Loading";
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
export default function FormRecipe({ id }) {
    ////////////////////////   RECIPE DATA

    const isEditInstance = !!id;

    const { data, isLoading } = useQuery({
        queryKey: ["recipes", id],
        queryFn: () => getRecipeFromId({ id }),
        enabled: isEditInstance,
    });

    const [actionLoading, setactionLoading] = useState(false);

    ////////////////////////   FORM SUBMIT
    const navigate = useNavigate();
    const onFinish = (data) => {
        setactionLoading(true);
        if (id)
            updateRecipe({ id, data })
                .then(() => toast.success("La recette a été modifié avec succès"))
                .catch((err) =>
                    err.response.data.error
                        ? toast.error(err.response.data.error)
                        : toast.error("Erreur survenue à la modification de la recette")
                )
                .finally(() => setactionLoading(false));
        else
            createRecipe({ data })
                .then(({ id }) => {
                    navigate("/recette/" + id);
                    toast.success("La recette a été ajoutée avec succès");
                })
                .catch((err) => {
                    err.response.data.error ? toast.error(err.response.data.error) : toast.error("Erreur survenue à l'ajout de la recette");
                })
                .finally(() => setactionLoading(false));
    };

    if (isLoading && isEditInstance)
        return (
            <div style={{ width: "100%", height: "50vh" }}>
                <Loading />
            </div>
        );

    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={() => {
                toast.error("Il reste des champs requis");
            }}
            initialValues={
                isEditInstance
                    ? { ...data, tempsPreparation: dayjs(data.tempsPreparation, "HH:mm") }
                    : {
                          description: "",
                          etapes: [""],
                          ingredients: [["", ""]],
                          niveau: "padawan",
                          personnes: 1,
                          photo: "",
                          tempsPreparation: false,
                          titre: "",
                      }
            }
            autoComplete="off">
            <Row className="formRecipe" justify="center" gutter={[24, 24]}>
                <>
                    <Col lg={14} md={24} className="formInputs">
                        <Title />
                        <Description />
                        <Time />
                        <Level />
                    </Col>
                    <Col lg={10} md={24} sm={24} xs={24} className="aside">
                        <Photo initValue={data?.photo} />
                        <Persons initValue={data?.personnes} />
                    </Col>
                    <Col lg={14} md={24} sm={24} xs={24} className="formInputs">
                        <Steps />
                    </Col>
                    <Col lg={10} md={24} sm={24} xs={24} className="aside">
                        <Ingredients />
                    </Col>
                    <Col lg={6} md={12} sm={24} xs={24}>
                        <SubmitButton isEditInstance={isEditInstance} loading={actionLoading} />
                    </Col>
                    {isEditInstance && (
                        <Col lg={6} md={12} sm={24} xs={24}>
                            <DeleteButton id={id} />
                        </Col>
                    )}
                </>
            </Row>
        </Form>
    );
}

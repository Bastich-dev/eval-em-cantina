import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { getRecipeFromId } from "API_Cantina";
import { Button, Col, Row } from "antd";
import "styles/recipe.css";
import CardRecipe from "./CardRecipe";

export default function ViewPage() {
    const id = window.location.href.split("/")[4];

    const { data } = useQuery({
        queryKey: ["recipes", id],
        queryFn: () => getRecipeFromId({ id }),
    });

    return (
        <Row align="top" justify="center" gutter={[0, 48]}>
            <Col offset={2} lg={10} md={20} xs={20}>
                <Button href={"/"} size="large" icon={<ArrowLeftOutlined />}>
                    Retour
                </Button>
            </Col>
            <Col offset={2} lg={10} md={20} xs={20}>
                <Button href={"/edit/" + id} style={styles.editIcon} size="large" icon={<EditOutlined />}>
                    Modifier recette
                </Button>
            </Col>

            <Col lg={20} md={20} xs={24}>
                {data && <CardRecipe recipe={data} id={id} />}
            </Col>
        </Row>
    );
}

const styles = {
    title: {
        margin: 0,
        padding: 0,
        flex: 1,
        textAlign: "center",
        fontSize: 42,
        color: "white",
        fontWeight: "bold",
    },
    editIcon: {
        width: 300,
        fontSize: 20,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },
};

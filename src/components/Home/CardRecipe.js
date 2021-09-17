import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import HeartSvg from "../../media/img/heart.svg";

export default function CardRecipe({ data }) {
    const howMany = Array.from(Array(data.personnes).keys());

    const history = useHistory();

    const getTime = () => {
        const minutes = data.tempsPreparation % 60;
        const hours = data.tempsPreparation / 60;
        let result = "";
        if (hours >= 1) result += Math.floor(hours) + "h ";
        result += Math.floor(minutes) + "min";
        return result;
    };

    const getLevel = () => {
        switch (data.niveau) {
            case "padawan":
                return Array.from(Array(1).keys());
            case "jedi":
                return Array.from(Array(2).keys());
            case "maitre":
                return Array.from(Array(3).keys());

            default:
                break;
        }
    };

    const goToRecipe = () => {
        // setTimeout(() => {
        history.push("/edit/" + data.id);
        // }, 1500);
    };

    return (
        <Card
            onClick={goToRecipe}
            className="cardRecipe"
            style={styles.card}
            cover={
                <img
                    style={{
                        height: 150,
                        objectFit: "cover",
                        backgroundImage: 'url("http://beepeers.com/assets/images/commerces/default-image.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    alt={data.titre}
                    src={data.photo}
                />
            }>
            <div style={styles.container}>
                <div style={styles.title}>{data.titre}</div>
                <div style={styles.description}> {data.description} </div>
                <div>
                    Niveau :
                    {getLevel().map((e, key) => (
                        <img alt={"niveau " + (key + 1)} key={key} src={HeartSvg} style={styles.heart} />
                    ))}
                </div>
                <div>Temps de préparation : {getTime()} </div>
                <div>
                    {howMany.map((e, key) => (
                        <UserOutlined key={key} style={{ color: "grey" }} />
                    ))}
                    <span style={styles.howmany}> {data.personnes + " personnes"}</span>
                </div>
            </div>
        </Card>
    );
}

const styles = {
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    description: {
        color: "#888",
    },
    card: {
        width: "100%",
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.23)",
        borderRadius: 10,
        cursor: "pointer",
        transition: "0.3s",
    },

    container: {
        minHeight: 140,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    howmany: {
        marginLeft: 5,
    },
    heart: {
        width: 15,
        height: 15,
        margin: "0 1px",
    },
};

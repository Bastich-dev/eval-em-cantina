import React from "react";
import { Card, Avatar, Col } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";

import HeartSvg from "../../media/img/heart.svg";

export default function CardRecipe({ data }) {
    const howMany = Array.from(Array(data.personnes).keys());

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

    return (
        <Card className="cardRecipe" style={styles.card} cover={<img style={{ height: 150, objectFit: "cover" }} alt="example" src={data.photo} />}>
            <div style={styles.container}>
                <div style={styles.title}>{data.titre}</div>
                <div style={styles.description}> {data.description} </div>
                <div>
                    Niveau :
                    {getLevel().map((el, key) => (
                        <img src={HeartSvg} style={styles.heart} />
                    ))}
                </div>
                <div>Temps de préparation : {getTime()} </div>
                <div>
                    {howMany.map((el, key) => (
                        <UserOutlined style={{ color: "grey" }} />
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

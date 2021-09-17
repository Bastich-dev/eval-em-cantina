import React from "react";
import VadorImage from "../../media/img/vador.png";
import GarlicImage from "../../media/img/garlic2.png";

export default function Animation() {
    return (
        <div>
            <img src={GarlicImage} style={styles.garlic} className="garlicAnimation" />
            <img src={VadorImage} style={styles.vador} />
        </div>
    );
}

const styles = {
    vador: {
        width: 500,
        height: 500,
        objectFit: "contain",
        position: "relative",
        top: -100,
        left: 350,
        marginBottom: -300,
    },
    garlic: {
        width: 250,
        height: 250,
        left: 155,
        objectFit: "contain",
        position: "relative",
        marginBottom: -120,
        zIndex: 9999,
    },
};

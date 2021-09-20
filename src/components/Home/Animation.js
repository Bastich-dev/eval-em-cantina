import React from "react";
import GarlicImage from "../../media/img/garlic2.png";
import VadorImage from "../../media/img/vador.png";

export default function Animation() {
    const isMobile = window.innerWidth < 500;

    console.log(window.innerWidth);
    return (
        !isMobile && (
            <div>
                <img src={GarlicImage} style={styles.garlic} alt="garlic" className="garlicAnimation" />
                <img src={VadorImage} style={styles.vador} alt="vador" />
            </div>
        )
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

import GarlicImage from "assets/img/garlic2.png";
import VadorImage from "assets/img/vador2.png";
export default function Animation() {
    const isMobile = window.innerWidth < 500;

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
        width: 200,
        height: 200,
        left: 155,
        objectFit: "contain",
        position: "relative",
        marginBottom: -120,
        zIndex: 9999,
    },
};

import { Form, Radio } from "antd";
import ImageJedi from "assets/img/jedi.jpg";
import ImageMaitre from "assets/img/maitre.png";
import ImagePadawan from "assets/img/padawan.png";

export default function Level() {
    return (
        <>
            <h2> Niveau de maîtrise :</h2>
            <Form.Item name="niveau">
                <Radio.Group style={styles.container}>
                    <Radio value={"padawan"}>
                        <div style={{ ...styles.radio, ...styles.padawan }}></div>
                        <div style={styles.text}>Padawan</div>
                    </Radio>
                    <Radio value={"jedi"}>
                        <div style={{ ...styles.radio, ...styles.jedi }}></div>
                        <div style={styles.text}>Jedi</div>
                    </Radio>
                    <Radio value={"maitre"}>
                        <div style={{ ...styles.radio, ...styles.maitre }}></div>
                        <div style={styles.text}>Maitre</div>
                    </Radio>
                </Radio.Group>
            </Form.Item>
        </>
    );
}

const sizeIcons = 120;
const styles = {
    shadow: {
        boxShadow: "0px 5px 48px 33px rgba(56, 167, 0,0.89)",
        width: 15,
        height: 15,
        position: "absolute",
        top: sizeIcons / 2 - 15 / 2,
        left: sizeIcons / 2 - 15 / 2,
    },
    container: {
        height: sizeIcons,
        display: "flex",
        justifyContent: "space-evenly",
    },
    radio: {
        width: sizeIcons,
        height: sizeIcons,
    },
    padawan: {
        backgroundImage: `url("${ImagePadawan}")`,
    },
    jedi: {
        backgroundImage: `url("${ImageJedi}")`,
    },
    maitre: {
        backgroundImage: `url("${ImageMaitre}")`,
    },
    text: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        color: "var(--primary-color)",
    },
};

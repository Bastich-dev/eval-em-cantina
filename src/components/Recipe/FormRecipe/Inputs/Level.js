import React from "react";

import { Form, Radio } from "antd";
import ImagePadawan from "../../../../media/img/padawan.png";
import ImageJedi from "../../../../media/img/jedi.jpg";
import ImageMaitre from "../../../../media/img/maitre.png";

export default function Level() {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    return (
        <Form.Item name="dddd">
            <h2> Niveau de maîtrise :</h2>
            <Radio.Group onChange={onChange} value={value} style={styles.container}>
                <label className={value === 1 && "levelActive"}>
                    <div style={{ ...styles.radio, ...styles.padawan }}></div>
                    <Radio value={1} style={{ display: "none" }} />
                    <div style={styles.text}>Padawan</div>
                </label>
                <label className={value === 2 && "levelActive"}>
                    <div style={{ ...styles.radio, ...styles.jedi }}></div>
                    <Radio value={2} style={{ display: "none" }} />
                    <div style={styles.text}>Jedi</div>
                </label>
                <label className={value === 3 && "levelActive"}>
                    <div style={{ ...styles.radio, ...styles.maitre }}></div>
                    <Radio value={3} style={{ display: "none" }} />
                    <div style={styles.text}>Maitre</div>
                </label>
            </Radio.Group>
        </Form.Item>
    );
}

const sizeIcons = 120;
const styles = {
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
        color: "var(--primary-bg-color)",
    },
};

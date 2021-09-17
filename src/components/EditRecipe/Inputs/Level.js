import React from "react";

import { Form, Radio } from "antd";
import ImagePadawan from "../../../media/img/padawan.png";
import ImageJedi from "../../../media/img/jedi.jpg";
import ImageMaitre from "../../../media/img/maitre.png";

export default function Level({ initValue }) {
    // function getLevel() {
    //     switch (initValue) {
    //         case "padawan":
    //             return 1;
    //         case "jedi":
    //             return 2;
    //         case "maitre":
    //             return 3;
    //     }
    // }
    // const level = getLevel();

    const [value, setValue] = React.useState(initValue);

    const onChange = e => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <h2> Niveau de maîtrise :</h2>
            <Form.Item name="niveau">
                <Radio.Group onChange={onChange} value={value} style={styles.container}>
                    <label className={value === "padawan" && "levelActive"}>
                        {value === "padawan" && <div style={styles.shadow}></div>}
                        <div style={{ ...styles.radio, ...styles.padawan }}></div>
                        <Radio value={"padawan"} style={{ display: "none" }} />
                        <div style={styles.text}>Padawan</div>
                    </label>
                    <label className={value === "jedi" && "levelActive"}>
                        {value === "jedi" && <div style={styles.shadow}></div>}
                        <div style={{ ...styles.radio, ...styles.jedi }}></div>
                        <Radio value={"jedi"} style={{ display: "none" }} />
                        <div style={styles.text}>Jedi</div>
                    </label>
                    <label className={value === "maitre" && "levelActive"}>
                        {value === "maitre" && <div style={styles.shadow}></div>}
                        <div style={{ ...styles.radio, ...styles.maitre }}></div>
                        <Radio value={"maitre"} style={{ display: "none" }} />
                        <div style={styles.text}>Maitre</div>
                    </label>
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
        color: "var(--primary-bg-color)",
    },
};

import React from "react";

import { Form, Input, Button } from "antd";
import Loading from "../../_common/Loading";

import { ArrowUpOutlined } from "@ant-design/icons";

export default function Photo({ initValue }) {
    const [imageUrl, setimageUrl] = React.useState(initValue);
    const [value, setvalue] = React.useState("");

    const loadImage = () => {
        if (value) {
            setimageUrl(null);
            let resultUrl = value;
            const isHttps = resultUrl.indexOf("https://") > -1;

            if (resultUrl.indexOf("://") > -1) {
                resultUrl = resultUrl.split("://")[1];
                setvalue(resultUrl);
            }
            setTimeout(() => {
                setimageUrl((isHttps ? "https://" : "http://") + resultUrl);
            }, 1000);
        }
    };

    return (
        <React.Fragment>
            <h1>Lien de l'image :</h1>
            <Form.Item name="photo">
                <Input
                    addonBefore="http://"
                    value={value}
                    onChange={e => setvalue(e.target.value)}
                    onBlur={loadImage}
                    addonAfter={<span style={{ cursor: "pointer" }}>Vérifier image</span>}
                />
            </Form.Item>
            <div style={{ ...styles.preview }}>
                {imageUrl === undefined && (
                    <div className="center" style={{ flexDirection: "column" }}>
                        <ArrowUpOutlined style={{ fontSize: 30, color: "silver" }} />
                        <span style={styles.previewText}>Veuillez insérer un lien d'image</span>
                    </div>
                )}
                {imageUrl === null && <Loading />}
                {imageUrl && <img src={imageUrl} style={styles.img} alt="Lien d'image erroné" />}
            </div>
        </React.Fragment>
    );
}

const styles = {
    preview: {
        width: "100%",
        height: 285,
        border: "2px dashed silver",
        borderRadius: 10,
        marginBottom: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    previewText: {
        fontSize: 18,
        color: "var(--variant-4-bg-color)",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
};

import React from "react";
import { BackTop } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

export default function ScrollToTop() {
    return (
        <BackTop>
            <div style={styles.container}>
                <DoubleRightOutlined style={styles.icon} />
            </div>
        </BackTop>
    );
}

const styles = {
    container: {
        borderRadius: 7,
        backgroundColor: "var(--primary-bg-color)",
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        transform: "rotate(-90deg)",
    },
};

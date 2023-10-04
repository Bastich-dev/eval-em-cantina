import { DoubleRightOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

export default function ScrollToTop() {
    return (
        <FloatButton.BackTop>
            <div style={styles.container}>
                <DoubleRightOutlined style={styles.icon} />
            </div>
        </FloatButton.BackTop>
    );
}

const styles = {
    container: {
        borderRadius: 7,
        backgroundColor: "var(--primary-color)",
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

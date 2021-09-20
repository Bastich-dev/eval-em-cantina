import { ArrowLeftOutlined, MinusOutlined } from "@ant-design/icons";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function ReturnPage({ id, setFadeHandler }) {
    const history = useHistory();
    const { pathname } = useLocation();
    const styles = {
        icon: {
            fontSize: 68,
            color: "var(--primary-bg-color)",
        },
        icon_2: {
            position: "relative",
            left: -15,
            fontSize: 68,
            color: "var(--primary-bg-color)",
        },
    };

    const returnPage = () => {
        setFadeHandler(true);
        setTimeout(() => {
            if (pathname.indexOf("new") > -1 || pathname.indexOf("recette") > -1) history.push("/");
            else if (pathname.indexOf("edit")) {
                history.push("/recette/" + id);
            }
        }, 800);
    };

    return (
        <div className="returnPage" onClick={returnPage}>
            <ArrowLeftOutlined style={styles.icon} />
            <MinusOutlined style={styles.icon_2} />
        </div>
    );
}

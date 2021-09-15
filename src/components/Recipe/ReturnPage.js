import React from "react";
import { ArrowLeftOutlined, MinusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function ReturnPage() {
    const history = useHistory();

    return (
        <div className="returnPage" onClick={() => history.push("/recettes")}>
            <ArrowLeftOutlined className="icon" />
            <MinusOutlined className="icon-2" />
        </div>
    );
}

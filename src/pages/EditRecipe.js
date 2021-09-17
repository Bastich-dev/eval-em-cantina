import React from "react";
import { Row, Col, Form } from "antd";

import { ArrowLeftOutlined, MinusOutlined } from "@ant-design/icons";
import ReturnPage from "../components/_common/ReturnPage";
import "../css/recipe.css";
import FormRecipe from "../components/EditRecipe/FormRecipe";

export default function AddRecipe() {
    return (
        <Row>
            <Col span={20} offset={2}>
                <ReturnPage />
            </Col>
            <Col span={16} offset={4}>
                <FormRecipe />
            </Col>
        </Row>
    );
}

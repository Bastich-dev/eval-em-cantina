import React from "react";
import { Row, Col, Form } from "antd";

import { ArrowLeftOutlined, MinusOutlined } from "@ant-design/icons";
import ReturnPage from "../components/Recipe/ReturnPage";
import "../css/recipe.css";
import FormRecipe from "../components/Recipe/FormRecipe";
export default function AddRecipe() {
    return (
        <Row>
            <Col span={20} offset={2}>
                <ReturnPage />
            </Col>
            <Col span={20} offset={2}>
                <FormRecipe />
            </Col>
        </Row>
    );
}

const styles = {};

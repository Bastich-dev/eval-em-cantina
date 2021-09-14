import React, { useEffect, useState } from "react";
import { Row, Col, Form, Select } from "antd";
import { Input } from "antd";

const { Option } = Select;

export default function FormSearch(props) {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log("blur");
    }

    function onFocus() {
        console.log("focus");
    }

    function onSearch(val) {
        console.log("search:", val);
    }

    return (
        <Row style={styles.searchRow} gutter={[16, 16]}>
            <Col span={24}>
                <Input allowClear size="large" style={styles.input} placeholder="Exemple : Pizza, Onigiri, Burger ... " />
            </Col>
            <Col span={12}>
                <Form>
                    <Form.Item>
                        <Select
                            size="large"
                            showSearch
                            style={styles.input}
                            placeholder="Temps de préparation"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            allowClear
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={12}>
                <Select
                    allowClear
                    size="large"
                    showSearch
                    style={styles.input}
                    placeholder="Niveau"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    <Option value="padawan">Padawan</Option>
                    <Option value="jedi">Jedi</Option>
                    <Option value="maitre">Maitre</Option>
                </Select>
            </Col>
            <Col span={12}>
                <Select
                    allowClear
                    size="large"
                    showSearch
                    style={styles.input}
                    placeholder="Pour combien de personnes"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    <Option value="padawan">Padawan</Option>
                    <Option value="jedi">Jedi</Option>
                    <Option value="maitre">Maitre</Option>
                </Select>
            </Col>
            <Col span={12}>
                <Select
                    mode="multiple"
                    size="large"
                    showSearch
                    style={styles.input}
                    allowClear
                    placeholder="Ingrédients"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    <Option value="padawan">Padawan</Option>
                    <Option value="jedi">Jedi</Option>
                    <Option value="maitre">Maitre</Option>
                </Select>
            </Col>
        </Row>
    );
}

const styles = {
    input: {
        borderRadius: 5,
        width: "100%",
    },
    searchRow: {
        width: "90%",
        margin: "0 5%",
    },
};

import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function Ingredients({ initValue }) {
    return (
        <React.Fragment>
            <h2>Ingrédients</h2>
            <Form.List name="ingredient">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, "title"]}
                                    fieldKey={[fieldKey, "title"]}
                                    rules={[{ required: true, message: "Requis" }]}>
                                    <Input placeholder="Ingrédient" size="large" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "quantity"]}
                                    fieldKey={[fieldKey, "quantity"]}
                                    rules={[{ required: true, message: "Requis" }]}>
                                    <Input placeholder="Quantité" size="large" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Ajouter ingrédient
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </React.Fragment>
    );
}

const styles = {
    input: {
        borderRadius: 5,
        width: "100%",
        maxWidth: "100%",
        height: 50,
    },
};

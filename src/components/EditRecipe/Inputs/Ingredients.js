import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function Ingredients({ initValue }) {
    return (
        <React.Fragment>
            <h2>Ingrédients</h2>
            <Form.List
                name="ingredient"
                rules={[
                    {
                        validator: async (_, items) => {
                            if (!items || items.length < 2) {
                                return Promise.reject(new Error("Il faut au moins 2 ingrédients"));
                            }
                        },
                    },
                ]}>
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    validateTrigger={["onChange", "onBlur"]}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Cette étape est vide, veuillez la remplir",
                                        },
                                    ]}
                                    name={[name, "title"]}
                                    fieldKey={[fieldKey, "title"]}
                                    rules={[{ required: true, message: "Requis" }]}>
                                    <Input placeholder="Ingrédient" size="large" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    validateTrigger={["onChange", "onBlur"]}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Cette étape est vide, veuillez la remplir",
                                        },
                                    ]}
                                    name={[name, "quantity"]}
                                    fieldKey={[fieldKey, "quantity"]}
                                    rules={[{ required: true, message: "Requis" }]}>
                                    <Input placeholder="Quantité" size="large" />
                                </Form.Item>
                                {key >= 2 ? <MinusCircleOutlined onClick={() => remove(name)} /> : null}
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{ height: 50 }}>
                                Ajouter ingrédient
                            </Button>

                            <Form.ErrorList errors={errors} />
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

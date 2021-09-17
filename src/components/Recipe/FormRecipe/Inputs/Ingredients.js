import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function Ingredients() {
    const [ingredientsList, setingredientsList] = React.useState([]);

    const onFinish = values => {
        console.log("Received values of form:", values);
    };

    return (
        <React.Fragment>
            <h2>Ingrédients</h2>
            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, "name"]}
                                    fieldKey={[fieldKey, "name"]}
                                    rules={[{ required: true, message: "Missing first name" }]}>
                                    <Input placeholder="Nom de l'ingredient" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "quantity"]}
                                    fieldKey={[fieldKey, "quantity"]}
                                    rules={[{ required: true, message: "Missing last name" }]}>
                                    <Input placeholder="Quantité" />
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

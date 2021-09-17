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
                                    rules={[{ required: true, message: "Nom requis" }]}>
                                    <Input placeholder="Nom de l'ingredient" size="large" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "quantity"]}
                                    fieldKey={[fieldKey, "quantity"]}
                                    rules={[{ required: true, message: "Quantité requis" }]}>
                                    <Input placeholder="Quantité" size="large" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button onClick={() => add()} icon={<PlusOutlined />} style={{ height: 50, width: "100%" }}>
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

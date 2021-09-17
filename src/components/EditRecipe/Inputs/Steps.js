import React from "react";

import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};

export default function Steps() {
    return (
        <React.Fragment>
            <h2>Etapes</h2>

            <Form.List
                name="etapes"
                rules={[
                    {
                        validator: async (_, steps) => {
                            if (!steps || steps.length < 2) {
                                return Promise.reject(new Error("Il faut au moins 2 étapes"));
                            }
                        },
                    },
                ]}>
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item {...formItemLayout} required={false} key={field.key}>
                                <Form.Item
                                    {...field}
                                    validateTrigger={["onChange", "onBlur"]}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Requis",
                                        },
                                    ]}
                                    noStyle>
                                    <Input.TextArea rows={5} placeholder={"Etape " + (index + 1)} style={{ width: "90%" }} />
                                </Form.Item>
                                {index >= 2 ? <MinusCircleOutlined style={{ marginLeft: 5 }} onClick={() => remove(field.name)} /> : null}
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button onClick={() => add()} style={{ width: "90%", height: 50 }} icon={<PlusOutlined />}>
                                Ajouter étape
                            </Button>

                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </React.Fragment>
    );
}

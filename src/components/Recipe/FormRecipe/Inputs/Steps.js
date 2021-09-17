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
                name="names"
                rules={[
                    {
                        validator: async (_, names) => {
                            if (!names || names.length < 2) {
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
                                            message: "Please input passenger's name or delete this field.",
                                        },
                                    ]}
                                    noStyle>
                                    <Input placeholder="passenger name" style={{ width: "60%" }} />
                                </Form.Item>
                                {fields.length > 1 ? (
                                    <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} />
                                ) : null}
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} style={{ width: "60%" }} icon={<PlusOutlined />}>
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

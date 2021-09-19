import { Form, Input } from "antd";
import React from "react";

export default function Description() {
    return (
        <React.Fragment>
            <h2>Description</h2>
            <Form.Item
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Requis",
                    },
                ]}>
                <Input.TextArea rows={4} allowClear placeholder="Description" />
            </Form.Item>
        </React.Fragment>
    );
}

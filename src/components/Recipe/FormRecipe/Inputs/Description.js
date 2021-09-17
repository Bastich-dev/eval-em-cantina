import React from "react";

import { Form, Input } from "antd";

export default function Description() {
    return (
        <React.Fragment>
            <h2>Description</h2>
            <Form.Item name="description">
                <Input.TextArea rows={4} allowClear />
            </Form.Item>
        </React.Fragment>
    );
}

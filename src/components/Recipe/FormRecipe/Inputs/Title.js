import React from "react";

import { Form, Input } from "antd";

export default function Title() {
    return (
        <React.Fragment>
            <Form.Item
                name="username"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: "Please input your name",
                    },
                ]}>
                <Input style={styles.input} />
            </Form.Item>
        </React.Fragment>
    );
}

const styles = {
    input: {
        borderRadius: 5,
        width: "100%",
        maxWidth: "100%",
        height: 60,
        fontSize: 24,
    },
};

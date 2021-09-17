import React from "react";

import { Form, Input, TimePicker } from "antd";

export default function Title() {
    return (
        <Form.Item name="name">
            <h2>Temps de préparation :</h2>
            <TimePicker size="large" style={styles.input} placeholder="00h 00min 00sec" />
        </Form.Item>
    );
}

const styles = {
    input: {
        borderRadius: 5,
        width: "100%",
        maxWidth: "100%",
        fontSize: 24,
        height: 50,
    },
};

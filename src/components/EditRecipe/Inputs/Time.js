import { Form, TimePicker } from "antd";
import React from "react";

export default function Time() {
    return (
        <>
            <h2>Temps de préparation :</h2>
            <Form.Item
                name="tempsPreparation"
                rules={[
                    {
                        required: true,
                        message: "Requis",
                    },
                ]}>
                <TimePicker format="HH:mm" showNow={false} size="large" style={styles.input} placeholder="00h 00min" />
            </Form.Item>
        </>
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

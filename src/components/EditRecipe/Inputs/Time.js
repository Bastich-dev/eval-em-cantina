import React from "react";

import { Form, Input, TimePicker } from "antd";
import moment from "moment";

export default function Time({ initValue }) {
    return (
        <>
            <h2>Temps de préparation :</h2>
            <Form.Item name="tempsPreparations">
                <TimePicker
                    defaultValue={moment(moment.utc().startOf("day").add({ minutes: initValue }).format("HH:mm:ss"), "HH:mm:ss")}
                    showNow={false}
                    size="large"
                    style={styles.input}
                    placeholder="00h 00min 00sec"
                />
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

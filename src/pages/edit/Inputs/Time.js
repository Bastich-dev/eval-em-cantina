import { Form, Input } from "antd";

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
                <Input type="number" min={0} max={3600} style={styles.input} placeholder="En minutes" />
                {/* <TimePicker format="HH:mm" showNow={false} size="large" style={styles.input} /> */}
            </Form.Item>
        </>
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

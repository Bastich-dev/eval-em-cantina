import { Form, Input } from "antd";

export default function Title() {
    return (
        <>
            <h1>Ma super recette :</h1>
            <Form.Item
                name="titre"
                rules={[
                    {
                        required: true,
                        message: "Requis",
                    },
                ]}>
                <Input style={styles.input} placeholder="Titre de ma recette" />
            </Form.Item>
        </>
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

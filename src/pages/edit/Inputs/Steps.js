import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function Steps() {
    return (
        <>
            <h2>Etapes</h2>

            <Form.List
                name="etapes"
                rules={[
                    {
                        validator: async (_, steps) => {
                            if (!steps || steps.length < 1) {
                                return Promise.reject(new Error("Il faut au moins 2 étapes"));
                            }
                        },
                    },
                ]}>
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item required={false} key={field.key} style={{ width: "100%" }}>
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
                                    <Input.TextArea rows={3} placeholder={"Etape " + (index + 1)} style={{ width: "95%" }} />
                                </Form.Item>
                                {index >= 1 ? (
                                    <MinusCircleOutlined
                                        style={{ marginLeft: 5, color: "var(--primary-color)" }}
                                        onClick={() => remove(field.name)}
                                    />
                                ) : null}
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button onClick={() => add()} style={{ width: "95%", height: 50 }} icon={<PlusOutlined />}>
                                Ajouter étape
                            </Button>

                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </>
    );
}

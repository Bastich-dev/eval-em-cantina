import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";

export default function Ingredients() {
    return (
        <div id="ingredients">
            <h2>Ingrédients</h2>
            <Form.List
                name="ingredients"
                rules={[
                    {
                        validator: async (_, items) => {
                            if (!items || items.length < 1) {
                                return Promise.reject(new Error("Il faut au moins 2 ingrédients"));
                            }
                        },
                    },
                ]}>
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
                                <Form.Item {...restField} validateTrigger={["onChange", "onBlur"]} name={[name, "quantity"]}>
                                    <Input type="number" placeholder="Quantité" size="large" min={0} max={100000} />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    validateTrigger={["onChange", "onBlur"]}
                                    name={[name, "title"]}
                                    rootClassName="flex-1">
                                    <Input placeholder="Ingrédient" size="large" />
                                </Form.Item>
                                {key >= 1 ? (
                                    <MinusCircleOutlined style={{ color: "var(--primary-color)" }} onClick={() => remove(name)} />
                                ) : null}
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{ height: 50 }}>
                                Ajouter ingrédient
                            </Button>

                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    );
}

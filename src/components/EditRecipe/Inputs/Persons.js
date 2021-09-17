import React, { useState } from "react";

import { Form, Rate } from "antd";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";

export default function Persons({ initValue }) {
    const [activeRate, setActiveRate] = useState(initValue);
    const [activeValue, setActiveValue] = useState(initValue);

    const customIcons = {
        1: <UserOutlined />,
        2: <UserOutlined />,
        3: <UserOutlined />,
        4: <UserOutlined />,
        5: <UserOutlined />,
        6: <UserOutlined />,
        7: <UserOutlined />,
        8: <UserOutlined />,
        9: <UserOutlined />,
        10: <UserAddOutlined />,
    };

    return (
        <div style={styles.container} onMouseLeave={() => activeValue && setActiveRate(activeValue)}>
            <div style={styles.text}>
                Pour {activeValue ?? activeRate} Personnes {activeValue ? activeValue === 10 && " ou +" : activeRate === 10 && " ou +"}
            </div>
            <Form.Item
                name="personnes"
                rules={[
                    {
                        required: true,
                        message: "Requis",
                    },
                ]}>
                <Rate
                    style={styles.rate}
                    character={({ index }) => customIcons[index + 1]}
                    onHoverChange={e => e && setActiveRate(e)}
                    onChange={() => setActiveValue(activeRate)}
                    value={activeRate}
                    count={10}
                />
            </Form.Item>
        </div>
    );
}

const styles = {
    rate: {
        fontSize: 36,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    container: { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: 200 },
    text: {
        fontSize: 32,
        marginLeft: 20,
    },
};

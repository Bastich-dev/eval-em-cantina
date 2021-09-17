import React, { useState } from "react";

import { Form, Rate } from "antd";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";

export default function Title() {
    const [activeRate, setActiveRate] = useState(1);
    const [activeValue, setActiveValue] = useState(null);

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
        <Form.Item name="name">
            <div style={styles.container} onMouseLeave={() => activeValue && setActiveRate(activeValue)}>
                <div style={styles.text}>
                    Pour {activeValue ?? activeRate} Personnes {activeValue ? activeValue === 10 && " ou +" : activeRate === 10 && " ou +"}
                </div>
                <Rate
                    style={styles.rate}
                    character={({ index }) => customIcons[index + 1]}
                    onHoverChange={e => e && setActiveRate(e)}
                    onChange={() => setActiveValue(activeRate)}
                    value={activeRate}
                    count={10}
                />
            </div>
        </Form.Item>
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

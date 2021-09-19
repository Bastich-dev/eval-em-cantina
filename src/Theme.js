import { ConfigProvider } from "antd";
import React from "react";

export default function Theme({ children }) {
    React.useEffect(() => {
        ConfigProvider.config({
            theme: {
                primaryColor: "red",
                errorColor: "red",
                warningColor: "red",
                successColor: "red",
                infoColor: "red",
            },
        });
    }, []);

    return <ConfigProvider>{children}</ConfigProvider>;
}

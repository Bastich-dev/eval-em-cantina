import { ConfigProvider } from "antd";
import locale_fr from "antd/lib/locale/fr_FR";

export default function Theme({ children }) {
    return (
        <ConfigProvider
            locale={locale_fr}
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: "var(--primary-color)",
                    borderRadius: 2,
                    colorTextPlaceholder: "var(--text-color)",
                    caretColor: "var(--text-color)",
                    colorText: "var(--text-color)",
                    fontFamily: "Inter",
                    colorBgBase: "var(--bg-color)",
                    colorBorder: "var(--primary-color)",
                    colorFillInput: "var(--primary-color)",
                    colorFill: "var(--primary-color)",
                    colorIcon: "var(--primary-color)",
                    colorFillContent: "var(--disabled-color)",
                    // colorInfoText: "var(--primary-color)",
                    // colorTextSecondary: "var(--primary-color)",
                    // colorTextTertiary: "var(--primary-color)",
                    colorTextQuaternary: "var(--primary-color)",
                    colorPrimaryBorderHover: "var(--primary-color)",
                    colorBgTextHover: "var(--primary-color)",
                    colorPrimaryHover: "var(--primary-color)",
                    colorPrimaryBgHover: "var(--primary-color)",
                },
            }}>
            {children}
        </ConfigProvider>
    );
}

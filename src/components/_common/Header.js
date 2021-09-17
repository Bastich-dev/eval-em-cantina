import React from "react";
import GarlicIcon from "../../media/img/garlic.png";

export default function Header() {
    return (
        <header style={styles.header}>
            <img src={GarlicIcon} alt="garlic icon" style={styles.icon} />
            <h1 style={styles.title}>Cantina</h1>
        </header>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottom: "1px solid silver",
    },
    icon: {
        width: 70,
        height: 70,
        objectFit: "contain",
        margin: "0 20px",
    },
    title: {
        fontSize: 32,
        color: "var(--primary-bg-color)",
        margin: 0,
        padding: 0,
    },
};

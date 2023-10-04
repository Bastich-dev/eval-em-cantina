import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={styles.header}>
            <Link to="/" style={styles.link}>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"}
                    alt="garlic icon"
                    style={styles.icon}
                />
                <strong style={styles.title}>Cantina</strong>
            </Link>
        </header>
    );
}

const styles = {
    header: {
        borderBottom: "1px solid var(--primary-color)",
        backgroundColor: "var(--bg-color)",
    },
    link: {
        width: "100%",
        maxWidth: "1600px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    icon: {
        width: 100,
        height: 70,
        objectFit: "contain",
        margin: "0 20px",
    },
    title: {
        fontSize: 32,
        color: "var(--primary-color)",
        margin: 0,
        padding: 0,
    },
};

import { Card, Steps } from "antd";

export default function StepsList({ steps }) {
    return (
        <Card>
            <h2 style={styles.header}>La recette</h2>
            <hr />
            <br />
            <Steps current={0} direction="vertical">
                {steps.map((step, key) => (
                    <Steps.Step
                        key={key}
                        title={<h3 style={styles.title}>{`Étape ${key + 1}`}</h3>}
                        description={<div style={styles.description}>" {step} "</div>}
                    />
                ))}
            </Steps>
        </Card>
    );
}

const styles = {
    header: {
        fontSize: 36,
        fontWeight: "bold",
    },
    title: {
        fontSize: 26,
        margin: 0,
        color: "white",
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        textAlign: "justify",
        fontStyle: "italic",
        color: "white",
    },
};

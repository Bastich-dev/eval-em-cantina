import { Divider, Steps } from "antd";
import React from "react";

export default function StepsList({ steps }) {
    return (
        <div>
            <Divider orientation="left" style={styles.header}>
                La recette
            </Divider>
            <Steps current={0} direction="vertical">
                {steps.map((step, key) => (
                    <Steps.Step
                        key={key}
                        title={<Divider style={styles.title}>{`Étape ${key + 1}`}</Divider>}
                        description={<div style={styles.description}>{step}</div>}
                    />
                ))}
            </Steps>
        </div>
    );
}

const styles = {
    header: {
        fontSize: 36,
    },
    title: {
        fontSize: 26,
        margin: 0,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        textAlign: "justify",
    },
};

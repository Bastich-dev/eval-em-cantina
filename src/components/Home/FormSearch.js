import { Col, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;

export default function FormSearch({ searchInput, setSearchInput }) {
    const properties = {
        allowClear: true,
        size: "large",
        style: styles.input,
    };

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Input
                    {...properties}
                    value={searchInput.search}
                    onChange={e => setSearchInput({ ...searchInput, search: e.target.value })}
                    placeholder="Exemple : Pizza, Onigiri, Burger ... "
                />
            </Col>
            <Col span={12}>
                <Select
                    {...properties}
                    value={searchInput.time}
                    onChange={e => setSearchInput({ ...searchInput, time: e })}
                    placeholder="Temps de préparation">
                    <Option value={10}>Moins de 10min</Option>
                    <Option value={20}>Moins de 20min</Option>
                    <Option value={30}>Moins de 30min</Option>
                    <Option value={60}>Moins de 1h</Option>
                    <Option value={61}>Plus de 1h</Option>
                </Select>
            </Col>
            <Col span={12}>
                <Select {...properties} value={searchInput.level} onChange={e => setSearchInput({ ...searchInput, level: e })} placeholder="Niveau">
                    <Option value="padawan">Padawan</Option>
                    <Option value="jedi">Jedi</Option>
                    <Option value="maitre">Maitre</Option>
                </Select>
            </Col>
            <Col span={12}>
                <Input
                    {...properties}
                    value={searchInput.persons}
                    onChange={e => {
                        if (+e.target.value > 0) setSearchInput({ ...searchInput, persons: +e.target.value });
                        if (!e.target.value) setSearchInput({ ...searchInput, persons: e.target.value });
                    }}
                    placeholder="Pour combien de personnes"
                    type="number"
                />
            </Col>
            <Col span={12}>
                <Select
                    disabled
                    value={searchInput.ingredients}
                    onChange={e => setSearchInput({ ...searchInput, ingredients: e })}
                    {...properties}
                    placeholder="Ingrédients"
                    mode="multiple"></Select>
                <Option value="Abricot">Abricot</Option>
                <Option value="Airelle">Airelle</Option>
                <Option value="Amande">Amande</Option>
                <Option value="Ananas">Ananas</Option>
                <Option value="Avocat">Avocat</Option>
                <Option value="Banane">Banane</Option>
                <Option value="Cassis">Cassis</Option>
                <Option value="Cerise">Cerise</Option>
                <Option value="Châtaigne">Châtaigne</Option>
                <Option value="Citron">Citron</Option>
                <Option value="Clémentine">Clémentine</Option>
                <Option value="Coing">Coing</Option>
                <Option value="Datte">Datte</Option>
                <Option value="Figue">Figue</Option>
                <Option value="Fraise">Fraise</Option>
                <Option value="Framboise">Framboise</Option>
                <Option value="Fruit de la passion">Fruit de la passion</Option>
                <Option value="Grenade">Grenade</Option>
                <Option value="Groseille">Groseille</Option>
                <Option value="Kaki">Kaki</Option>
                <Option value="Kiwi">Kiwi</Option>
                <Option value="Kumquat">Kumquat</Option>
                <Option value="Litchi">Litchi</Option>
                <Option value="Mandarine">Mandarine</Option>
                <Option value="Mangue">Mangue</Option>
                <Option value="Marron">Marron</Option>
                <Option value="Melon">Melon</Option>
                <Option value="Mirabelle">Mirabelle</Option>
                <Option value="Mûre">Mûre</Option>
                <Option value="Myrtille">Myrtille</Option>
                <Option value="Nectarine">Nectarine</Option>
                <Option value="Noisette">Noisette</Option>
                <Option value="Noix">Noix</Option>
                <Option value="Orange">Orange</Option>
                <Option value="Pamplemousse">Pamplemousse</Option>
                <Option value="Papaye">Papaye</Option>
                <Option value="Pastèque">Pastèque</Option>
                <Option value="Pêche">Pêche</Option>
                <Option value="Poire">Poire</Option>
                <Option value="Pomme">Pomme</Option>
                <Option value="Prune">Prune</Option>
                <Option value="Quetsche">Quetsche</Option>
                <Option value="Raisin">Raisin</Option>
                <Option value="Tomate">Tomate</Option>
            </Col>
        </Row>
    );
}

const styles = {
    input: {
        borderRadius: 5,
        width: "100%",
        maxWidth: "100%",
    },
};

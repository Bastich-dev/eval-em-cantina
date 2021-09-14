import React from "react";
import "./Title.css";
import { Button } from "antd";
import { DownloadOutlined, PlusCircleOutlined } from "@ant-design/icons";

export default function Title() {
    return (
        <div class="animated-title">
            <div class="text-top">
                <div>
                    <span class="title">Le retour du jet d'ail</span>
                    <span class="description">De Harry Potter à Star Wars, en passant par Dragon Ball, un hommage gastronomique à des références cultes et une série d'énigmes pour tester vos connaissances geek.</span>
                </div>
            </div>

            <div class="text-bottom">
                <div class="description">
                    <p>Ajouter, publier et partager votre recette très simplement en deux clics !</p>
                    <section style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <button class="raise">Créer ma recette</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

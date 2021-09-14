import React from "react";
import "./title-animation.css";

export default function Title() {
    return (
        <div className="animated-title">
            <div className="text-top">
                <div>
                    <span className="title">Le retour du jet d'ail</span>
                    <span className="description">De Harry Potter à Star Wars, en passant par Dragon Ball, un hommage gastronomique à des références cultes et une série d'énigmes pour tester vos connaissances geek.</span>
                </div>
            </div>

            <div className="text-bottom">
                <div className="description">
                    <p>Ajouter, publier et partager votre recette très simplement en deux clics !</p>
                    <section style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <button className="raise">Créer ma recette</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import "../../css/title-animation.css";

export default function Title() {
    return (
        <div className="animated-title">
            <div className="text-top">
                <div>
                    <span className="title">Le retour du jet d'ail</span>
                    <span className="description">
                        Si vous voulez prolonger l'ambiance Star Wars ou tout simplement avoir de quoi grignoter pendant les films, vous trouverez de
                        quoi vous inspirer grâce à nos recettes !
                    </span>
                </div>
            </div>

            <div className="text-bottom">
                <div className="description">
                    <strong>" Rejoins le côté obscur de la cuisine "</strong>
                    <p>Ajouter, publier et partager vos recettes préférées très simplement en quelques clics !</p>
                    <section style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <button className="raise">Créer ma recette</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

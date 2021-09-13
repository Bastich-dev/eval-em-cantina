import React from "react";
import { Link } from "react-router-dom";

import routes from "../../routes";

export default function Navbar() {
    return (
        <nav>
            <ul>
                {routes
                    .filter(route => route.nav)
                    .map(route => (
                        <Link to={route.path}>{route.name}</Link>
                    ))}
            </ul>
        </nav>
    );
}

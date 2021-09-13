import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <main className="container">
                <Switch>
                    {routes.map((elem, key) => (
                        <Route key={key} exact={elem.exact} path={elem.path} component={elem.component} />
                    ))}
                </Switch>
            </main>
        </BrowserRouter>
    );
}

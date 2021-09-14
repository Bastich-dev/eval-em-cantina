import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/_common/Header";
import { ConfigProvider } from "antd";
import ScrollToTop from "./components/_common/ScrollToTop";
export default function App() {
    return (
        <React.Fragment>
            <Header />
            <BrowserRouter>
                <main>
                    <Switch>
                        {routes.map((elem, key) => (
                            <Route key={key} exact={elem.exact} path={elem.path} component={elem.component} />
                        ))}
                    </Switch>
                </main>
                <ScrollToTop />
            </BrowserRouter>
        </React.Fragment>
    );
}

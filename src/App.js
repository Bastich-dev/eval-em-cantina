import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/_common/Header";
import ScrollToTop from "./components/_common/ScrollToTop";
import "./css/antdTheme.css";
import "./css/common.css";
import routes from "./routes";

export default function App() {
    return (
        <React.Fragment>
            <ToastContainer theme="colored" />
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

import "antd/dist/reset.css";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import Background from "layout/Background";
import Header from "layout/Header";
import ProviderQuery from "layout/ProviderQuery";
import ProviderTheme from "layout/ProviderTheme";
import ScrollToTop from "layout/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";

const root = createRoot(document.getElementById("root"));
root.render(
    <ProviderTheme>
        <ProviderQuery>
            <BrowserRouter>
                <Background />
                <ToastContainer theme="colored" />
                <Header />
                <main>
                    <Routes>
                        {routes.map((elem, key) => (
                            <Route key={key} exact={elem.exact} path={elem.path} element={<elem.component />} />
                        ))}
                    </Routes>
                </main>
                <ScrollToTop />
            </BrowserRouter>
        </ProviderQuery>
    </ProviderTheme>
);

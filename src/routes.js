import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
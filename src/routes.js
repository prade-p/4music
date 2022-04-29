import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos"
import Header from "./components/Header"
import Footer from "./components/Footer";

function Routes() {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/produtos" component={Produtos} />
            </Switch>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routes;
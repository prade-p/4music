import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos"
import Header from "./components/Header"
import Footer from "./components/Footer";
import Perfil from "./pages/Perfil";
import Cordas from "./pages/Produtos/Cordas"
import Teclas from "./pages/Produtos/Teclas"
import Audio from "./pages/Produtos/Audio"
import Percussao from "./pages/Produtos/Percussao"
import Sopro from "./pages/Produtos/Sopro"
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({redirectPath, authentication, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => 
            authentication ? (
                <Component {...props} />
            ) : (
                <Redirect 
                    to={{ pathname: redirectPath, state: { from: props.location } }}
                />
            )
        }
    />
);

function Routes() {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path="/cadastro" component={Cadastro} />
                <PrivateRoute authentication={!isAuthenticated()} path="/login" redirectPath="/perfil" component={Login} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/teclas" component={Teclas} />
                <Route path="/cordas" component={Cordas} />
                <Route path="/audio" component={Audio} />
                <Route path="/percussao" component={Percussao} />
                <Route path="/sopro" component={Sopro} />
                <PrivateRoute authentication={isAuthenticated()} path="/perfil" redirectPath="/" component={Perfil} />
                <Route path="/" component={Home} />
            </Switch>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routes;
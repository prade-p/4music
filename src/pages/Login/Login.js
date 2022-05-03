import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function login() {
    console.log(email, password);
    if (email === "andreprocopio@cpejr.com.br" && password === "123") {
      alert("Bem vindo!\n" + email);
      history.push("home");
    } else alert("Dados incorretos!");
  }

  return (
    <div className="base">
      <div className="container">
        <div className="mc">Minha conta</div>
        <p></p>
        <Form className="inputs">
          <p className="ab">Já é cadastrado? Faça seu login.</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome de usuário ou e-mail *</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha *</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar de mim" />
          </Form.Group>
          <Button variant="primary" onClick={login}>
            Login
          </Button>

          {/* <div className="ac">
            Ainda não é cadastro?
            <a href="/home" title="Home">
              <b>Registre-se aqui</b>
            </a>
          </div> */}
          <p className="cadastro"> 
            Ainda não é cadastrado? <Link to="/cadastro">Registre-se</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../../services/auth";
import api from "../../services/api";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validacao, setValidacao] = useState();
 
  function handleLogin(e) {
    e.preventDefault();
    api.post("/login", { email: email, password: password }).then((response) => {
      if (!response || response.status >= 400) {
        setValidacao(false);
        alert("Credenciais invalidas") 
        return
      };
      login(response.data);
      setValidacao(true);
      alert("Logado com sucesso!");
      window.location.href = "/";
    });
  };


 /*  function Login() {
    if (email === "andreprocopio@cpejr.com.br" && password === "123") {
      window.location.href="/";
      setValidacao(true);
    } else
      //alert("Dados incorretos!");
      setValidacao(false);
  } */

  

  return (
    <div className="base">
      <div className="container">
        <div className="mc">Minha conta</div>
        <p></p>
        <Form className="inputs">
          <p className="ab">Já é cadastrado? Faça seu login.</p>
          {validacao === false &&
            <div className="msgLoginError">
              E-mail ou senha inválidos.
              <p></p>
            </div>
          }
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              E-mail <font color="#fd1c1c">*</font>
            </Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Senha <font color="#fd1c1c">*</font>
            </Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <p></p>
          <Button variant="primary" className="loginBtn" onClick={handleLogin}>
            Login
          </Button>

          <p>
            <div className="ac">
              Ainda não é cadastrado?&nbsp;
              <a href="/cadastro" title="Cadastro">
                <font color="#ff9f1c">Registre-se aqui</font>
              </a>
            </div>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;

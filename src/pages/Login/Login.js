import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";


function Login() {
  return (
    <div className="base">
      <div className="container">
        <Form className="inputs">
          <p className="ab">Já é cadastrado? Faça seu login.</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome de usuário ou e-mail *</Form.Label>
              <Form.Control type="email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha *</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembrar de mim" />
            </Form.Group>
          </Form>
          <div className="ac"> Ainda não é cadastro? <a href ="/home" title="Home"><b>Registre-se aqui</b></a></div>
        </Form>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { Card, Button } from "react-bootstrap";


function Cadastro() {
    return (
        <div className="container">
        <h1>Produtos</h1>
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="images\VIOLAO-GIANNINI-FK2-GOAL-EQ-NS_IMG1.png" />
            <Card.Body>
                <Card.Text>
            Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo
                </Card.Text>
                <Button variant="primary">Adicionar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cadastro;
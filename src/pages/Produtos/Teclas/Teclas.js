import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import Casa from "../../../images/casa.png";
import Carteira from "../../../images/carteira.png";
import Caixa from "../../../images/caixa.png";
import CardProduct from "../../../components/CardProduct";
import "./Teclas.css";

function Teclas() {

  useEffect(() => {
    api.get("/produto/categoria/teclas").then((response) => {
      setDados(response.data);
      console.log(dados);
    });
  }, []);

  const [dados, setDados] = useState([]);

  return (
    <div className="produtos-container">
      <div className="produtos-info">
        <div className="icon-text">
          <img src={Carteira} alt="carteira" width={130} />
          <div>Parcele em até 12x no cartão</div>
        </div>
        <div className="icon-text">
          <img src={Casa} alt="casa" width={130} />
          <div>32 anos de loja</div>
        </div>
        <div className="icon-text">
          <img src={Caixa} alt="caixa" width={130} />
          <div>Frete Gratis para BH e Região</div>
        </div>
      </div>
      <div className="cards-wrapper">
        {dados.filter(produto => produto.categoria === "teclas").map(produtoDados => {
          return (<CardProduct key={produtoDados.produto_id} {...produtoDados}/>)})}
      </div>
    </div>
  );
}

export default Teclas;
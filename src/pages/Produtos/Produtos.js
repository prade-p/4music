import React from "react";
import Casa from "../../images/casa.png";
import Carteira from "../../images/carteira.png";
import Caixa from "../../images/caixa.png";
import Violão from "../../images/VIOLAO-GIANNINI-FK2-GOAL-EQ-NS_IMG1.png";
import { AiOutlineHeart } from "react-icons/ai";
import "./Produtos.css";

function Produtos() {
  return (
    <div className="produtos">
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
        <div className="produtos-card-container">
          <div className="card">
            <div className="button-wishlist">
              <button type="button">
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button">
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button">
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button">
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button" >
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button" >
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button" >
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button" >
                <AiOutlineHeart size={27}/>
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;

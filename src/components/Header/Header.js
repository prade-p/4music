import React from "react";
import "./Header.css";
import Logo from "../../images/logo-removebg-preview.png";
import { BsCart3, BsPerson } from "react-icons/bs";
import Lupa from "../../images/pesquisa.png"

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header-input-categorys">
          <div className="search-bar">
            <form action="/" method="GET" class="form">
              <input
                type="text"
                placeholder="Digite aqui sua busca"
                className="search-field"
              />
              <button type="submit" className="search-button">
                <img src={Lupa} alt="Lupa" />
              </button>
            </form>
          </div>
          <div className="categorys">
            <a href="/produtos" title="Teclas">
              Teclas
            </a>
            <a href="/produtos" title="Cordas">
              Cordas
            </a>
            <a href="/produtos" title="Áudio">
              Áudio
            </a>
            <a href="/produtos" title="Percussão">
              Percussão
            </a>
            <a href="/produtos" title="Sopro">
              Sopro
            </a>
          </div>
        </div>

        <div className="header-profile">
          <a href="/cadastro" title="Profile" className="profile">
            <BsPerson />
          </a>
          <a href="/produtos" title="Carrinho" className="carrinho">
            <BsCart3 />
          </a>
        </div>
      </div>
    </div>
  );
}

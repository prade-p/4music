import React from "react";
import "./Header.css";
import Logo from "../../images/logo-removebg-preview.png";
import { BsCart3, BsPerson,} from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import Lupa from "../../images/pesquisa.png";

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="logo" width={150} />
        </div>
        <Dropdown className="btn-icon-header">
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
           Produtos
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/produtos">Carrinho</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/produtos">Teclas</Dropdown.Item>
            <Dropdown.Item href="/produtos">Cordas</Dropdown.Item>
            <Dropdown.Item href="/produtos">Áudio</Dropdown.Item>
            <Dropdown.Item href="/produtos">Percussão</Dropdown.Item>
            <Dropdown.Item href="/produtos">Sopro</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
          <a href="/login" title="Profile" className="profile">
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

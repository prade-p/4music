import React from "react";
import "./Header.css";
import Logo from "../../images/logo-removebg-preview.png";
import { BsPerson } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import Lupa from "../../images/pesquisa.png";

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="/home" className="header-logo" title="Home">
            <img src={Logo} alt="logo" width={250} />
          </a>
        </div>
        <Dropdown className="btn-icon-header">
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
           Produtos
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/home">Logout</Dropdown.Item>
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
            <form action="/" method="GET" className="form">
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
          <a href="/home" title="LogOut" className="logout">
            <MdLogout />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Header.css";
import Logo from "../../images/logo-removebg-preview.png";
import { BsPerson } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import SearchBar from "../SearchBar";
import { logout } from "../../services/auth";

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="/" className="header-logo" title="Home">
            <img src={Logo} alt="logo" width={250} />
          </a>
        </div>
        <Dropdown className="btn-icon-header">
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Produtos
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/" onClick={(e) => {
              logout();
            }}>Logout</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/teclas">Teclas</Dropdown.Item>
            <Dropdown.Item href="/cordas">Cordas</Dropdown.Item>
            <Dropdown.Item href="/audio">Áudio</Dropdown.Item>
            <Dropdown.Item href="/percussao">Percussão</Dropdown.Item>
            <Dropdown.Item href="/sopro">Sopro</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="header-input-categorys">
          {/* <div className="search-bar">
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
          </div> */}

          <SearchBar placeholder="Digite aqui a sua busca" />
          <div className="categorys">
            <a href="/teclas" title="Teclas">
              Teclas
            </a>
            <a href="/cordas" title="Cordas">
              Cordas
            </a>
            <a href="/audio" title="Áudio">
              Áudio
            </a>
            <a href="/percussao" title="Percussão">
              Percussão
            </a>
            <a href="/sopro" title="Sopro">
              Sopro
            </a>
          </div>
        </div>

        <div className="header-profile">
          <a href="/login" title="Profile" className="profile">
            <BsPerson />
          </a>
          <a
            href="/"
            title="LogOut"
            className="logout"
            onClick={(e) => {
              logout();
            }}
          >
            <MdLogout />
          </a>
        </div>
      </div>
    </div>
  );
}

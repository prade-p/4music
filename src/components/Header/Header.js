import React from 'react'
import "./Header.css"
import Logo from "../../images/logo-removebg-preview.png"
import { FaSistrix, FaBars } from "react-icons/fa";
import { BsCart3, BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="logo" width={190}/>
        </div>
        <div className="header-input-categorys">
          
          <div className="search-bar">
            <input type="text" placeholder='Digite aqui sua busca' />
            <FaSistrix/>
          </div>
          <div className="categorys">
            <Link to="/produtos">Teclas</Link>
            <Link to="/produtos">Cordas</Link>
            <Link to="/produtos">Áudio</Link>
            <Link to="/produtos">Percussão</Link>
            <Link to="/produtos">Sopro</Link>
          </div>

        </div>

        <div className="header-profile">
          <BsPerson/>
          <BsCart3/>
        </div>
      </div>
    </div>
  )
}
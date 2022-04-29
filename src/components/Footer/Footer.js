import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
<div className="footerContainer">
    <div className='column my-account'>
        <h2>Minha Conta</h2>
    </div>
    <div className='column categories'>
        <h2>Categorias</h2>
    </div>
    <div className='column who-we-are'>
        <h2>Quem nós somos</h2>
    </div>
    <div className='column contact'>
        <h2>Contato</h2>
    </div>
  </div>
  )
}

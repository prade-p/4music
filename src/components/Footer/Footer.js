import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdPhoneEnabled, MdEmail } from "react-icons/md"
import Logo from "../../images/logo-removebg-preview.png"

// export default function Footer () {
//     return (
//         <div className="footer-container">
//             <div className="footer-links">
//                 <div className="footer-wrapper">
//                     <div className="wrapper-column">
//                         <h2>Minha Conta</h2>
//                         <Link to="/login">Login</Link>
//                         <Link to="/cadastro">Cadastre-se</Link>
//                     </div>
//                     <div className="wrapper-column">
//                         <h2>Categorias</h2>
//                         <Link to="/produtos">Teclas</Link>
//                         <Link to="/produtos">Cordas</Link>
//                         <Link to="/produtos">Áudio</Link>
//                         <Link to="/produtos">Percussão</Link>
//                         <Link to="/produtos">Sopro</Link>
//                     </div>
//                 </div>
//                 <div className="footer-wrapper">
//                     <div className="wrapper-column history">
//                         <h2>Quem somos</h2>
//                         <p>A 4music é uma loja que atua no mercado de instrumentos musicais desde 1990 trabalhando com muita paixão e entregando experiência e tradição.

// <br /> Priorizamos um atendimento ágil e com qualidade, oferecendo preços acessíveis e competitivos com flexibilidade nos negócios.</p>
//                     </div>
//                     <div className="wrapper-column contact">
//                         <h2>Contato</h2>
//                         <div className="contact-row">
//                             <p className='contact-row-title'>Endereço:</p>
//                             <p>Rua da Harmônia, 111, Sinfônica<br/>Belo Horizonte - MG</p>
//                         </div>
//                         <div className="contact-row">
//                             <p className='contact-row-title'>Telefone (WhatsApp):</p>
//                             <p>31 3311-1133 / 31 93311-1133</p>
//                         </div>
//                         <div className="contact-row">
//                             <p className='contact-row-title'>E-mail:</p>
//                             <p>contato@4music.com.br</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="social-log">
            

            
//             </div>          
//         </div>
//     )
// }


export default function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-general-info">
                    <img src={Logo} alt="logo" width={170}/>
                    <div className="footer-adress-info">
                        <div> 4MUSIC LTDA
                            <br/>Rua da Harmônia, São Paulo, n° 111.
                            <br/>CEP 00000-000 - Belo Horizonte - MG.
                            <br/>CNPJ: 00.000.000/0000-00.    
                        </div>         
                    </div>
                    <div className="social-media">
                        <a href="/home" title="Facebook"><FaFacebook/></a>
                        <a href="/home" title="Instagram"><FaInstagram/></a>
                        <a href="/home" title="Youtube"><FaYoutube/></a>
                        <a href="/home" title="Linkedin"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-wrapper">
                        <div className="wrapper-column">
                            <h2>Minha Conta</h2>
                            <a href="/login" title="Login">Login</a>
                            <a href="/cadastro" title="Cadastro">Cadastro</a>
                        </div>
                    </div>
                    <div className="footer-wrapper">
                        <div className="wrapper-column">
                            <h2>Categorias</h2>
                            <a href="/produtos" title="Teclas">Teclas</a>
                            <a href="/produtos" title="Cordas">Cordas</a>
                            <a href="/produtos" title="Áudio">Áudio</a>
                            <a href="/produtos" title="Percussão">Percussão</a>
                            <a href="/produtos" title="Sopro"> Sopro</a>
                        </div>
                    </div>
                    <div className="footer-wrapper">
                        <div className="wrapper-column">
                            <h2>Contato</h2>
                            <p><MdPhoneEnabled/> | (31) 3311-1133</p>
                            <p><FaWhatsapp/> | (31) 93311-1133</p>
                            <p><MdEmail/> | contato@4music.com.br</p>
                        </div>
                    </div>
                </div>       
            </div>
        </footer>
    )
}
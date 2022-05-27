import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Grupo from "../../images/download.jpg";
import CardProduct from "../../components/CardProduct"
import { MdLocationOn } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import Localizacao from "../../images/loc.png";
import Guitarra from "../../images/electric-guitar-1736292.jpg";
import bateria from "../../images/bateria.jpeg";
import violao1 from "../../images/violao1.jpeg";
import violao2 from "../../images/violao2.jpeg";
import { Carousel } from "react-bootstrap";
import "./Home.css";

import Slider from "react-slick";

function Home() {

  useEffect(() => {
    api.get("/produto").then((response) => {
      const data = response.data;
      const cordas = data.filter(produto => produto.categoria === "cordas").slice(0, 4);
      const audio = data.filter(produto => produto.categoria === "audio").slice(0, 1);
      const teclas = data.filter(produto => produto.categoria === "teclas").slice(0, 3);
      const percussao = data.filter(produto => produto.categoria === "percussao").slice(1, 3);
      setDados([...cordas, ...audio, teclas[0], teclas[2], ...percussao]);
    });
  }, []);

  const [dados, setDados] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          speed: 800,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 500,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          speed: 200,
        },
        
      }
    ]
  };
  
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={Guitarra} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={violao1} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={bateria} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={violao2} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="destaque-container">
        <div className="title-destaques">Destaques</div>
        <div className="line-title"></div>
      </div>
      <div className="produtos-carousel-container">
        <Slider {...settings}>
          {dados.slice(0, 10).map(produtoDados => {
            return (
              <CardProduct style={{"height": "30rem;"}} key={produtoDados.produto_id} {...produtoDados}/>
              )
          })}
        </Slider>
      </div>
      <div className="historia-container">
        <div className="text-historia">
          <div className="title-line"> </div>
          <div className="title">Sobre a Loja</div>
          <div className="subtitle">Bem-vindo a 4music</div>
          <div className="text">
            A 4music é uma loja de música tradicional de Belo Horizonte que já
            está no mercado há 32 anos. Nós iniciamos como um bazar de
            instrumentos musicais, recebendo e vendendo eles para amigos e
            parentes. Porém, com o passar do tempo decidimos levar esse hobby a
            sério e montamos uma loja. Atualmente trabalhamos com 100% de
            exelência e entregamos para toda Minas Gerais. Realizamos o conserto
            e afinação de instrumentos, além de disponibilizar aulas semanais de
            isntrumentos.
          </div>
        </div>
        <div className="image-historia">
          <img src={Grupo} alt="nós" width={700} />
        </div>
      </div>
      <div className="localizacao-container">
        <div className="image-localizacao">
          <img src={Localizacao} alt="nós" width={700} />
        </div>
        <div className="text-localizacao">
          <div>
            <MdLocationOn size={30} color="#FF9F1C" /> | Rua da Harmônia, 111,
            Sinfônica Belo Horizonte - MG
          </div>
          <div className="horarios">
            <div>
              <BiTimeFive size={30} color="#FF9F1C" /> | Segunda a Sexta:{" "}
            </div>
            <div className="horas"> 08H - 18H </div>
          </div>
          <div className="horarios">
            <div>
              {" "}
              <BiTimeFive size={30} color="#FF9F1C" /> | Sábado:{" "}
            </div>
            <div className="horas"> 08H - 14H </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
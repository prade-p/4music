import React from "react";
import Grupo from "../../images/download.jpg";
import Violão from "../../images/VIOLAO-GIANNINI-FK2-GOAL-EQ-NS_IMG1.png";
import CardProduct from "../../components/CardProduct"
import { MdLocationOn } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import Localizacao from "../../images/loc.png";
import Guitarra from "../../images/electric-guitar-1736292.jpg";
import { Carousel } from "react-bootstrap";
import "./Home.css";

import Slider from "react-slick";

function Home() {

  const produtos = [
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 1
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 2
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 3
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 4
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 5
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 6
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 7
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 8
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 9
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 10
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 11
    },     
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 12,
      usuario_id: 1
    }, 
    
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
        
      }
    ]
  };
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Guitarra} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Guitarra} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Guitarra} alt="Third slide" />
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
          {produtos.map(produtoDados => {
            return (
              <CardProduct style={{"minWidth": "16rem"}} key={produtoDados.produto_id} {...produtoDados}/>
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
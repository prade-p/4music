import React from "react";
import Grupo from "../../images/download.jpg";
import Violão from "../../images/VIOLAO-GIANNINI-FK2-GOAL-EQ-NS_IMG1.png";
import Coracao from "../../images/coracao.png";
import Localizacao from "../../images/loc.png";
import { Carousel } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={1000}>
          <img src={Grupo} alt="nós" width={700} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img src={Grupo} alt="nós" width={700} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Grupo} alt="nós" width={700} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
      <div className="promocoes-container">
        <div className="title-destaques">Destaques</div>
        <div className="line-title"> </div>
        <div className="produtos-destaque">
          <div className="card">
            <div className="button-wishlist">
              <button type="button" className="coracao">
                <img src={Coracao} alt="Quero!" width={25} />
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                {" "}
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo{" "}
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button" className="coracao">
                <img src={Coracao} alt="Quero!" width={25} />
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                {" "}
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo{" "}
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button" className="coracao">
                <img src={Coracao} alt="Quero!" width={25} />
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                {" "}
                Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
                Gonçalo{" "}
              </p>
            </div>
            <div>
              <button className="card-button">Adicionar</button>
            </div>
          </div>
          <div className="card">
            <div className="button-wishlist">
              <button type="button" className="coracao">
                <img src={Coracao} alt="Quero!" width={25} />
              </button>
            </div>
            <div className="card-images">
              <img src={Violão} alt="casa" width={250} />
            </div>
            <div className="card-text">
              <p>
                {" "}
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
      <div className="localizacao-container">
        <div className="image-localizacao">
          <img src={Localizacao} alt="nós" width={700} />
        </div>
        <div className="text-localizacao">
          <div> Rua da Harmônia, 111, Sinfônica Belo Horizonte - MG</div>
        </div>
      </div>
    </div>
  );
}

export default Home;

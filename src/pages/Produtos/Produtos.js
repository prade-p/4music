import React from "react";
import Casa from "../../images/casa.png";
import Carteira from "../../images/carteira.png";
import Caixa from "../../images/caixa.png";
import Violão from "../../images/VIOLAO-GIANNINI-FK2-GOAL-EQ-NS_IMG1.png";
import "./Produtos.css";
import CardProduct from "../../components/CardProduct";

function Produtos() {

  const produtos = [
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 1,
      usuario_id: 1
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 2,
      usuario_id: 2
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 3,
      usuario_id: 3
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 4,
      usuario_id: 4
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 5,
      usuario_id: 5
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 6,
      usuario_id: 6
    }, 
    {
      imagem: Violão,
      descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
      preco: "4.000,00",
      categoria: "Cordas",
      produto_id: 7,
      usuario_id: 7
    }, 
  ];

  return (
    <div className="produtos-container">
      <div className="produtos-info">
        <div className="icon-text">
          <img src={Carteira} alt="carteira" width={130} />
          <div>Parcele em até 12x no cartão</div>
        </div>
        <div className="icon-text">
          <img src={Casa} alt="casa" width={130} />
          <div>32 anos de loja</div>
        </div>
        <div className="icon-text">
          <img src={Caixa} alt="caixa" width={130} />
          <div>Frete Gratis para BH e Região</div>
        </div>
      </div>
      <div className="cards-wrapper">
        {produtos.map(produtoDados => {
          return (<CardProduct key={produtoDados.produto_id} {...produtoDados}/>)})}
      </div>
    </div>
  );
}

export default Produtos;

// function Produtos() {

//   const produtos = [
//     {
//       imagem: Violão,
//       descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
//       preco: "4.000,00"
//     }, 
//     {
//       imagem: Violão,
//       descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
//       preco: "4.000,00"
//     }, 
//     {
//       imagem: Violão,
//       descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
//       preco: "4.000,00"
//     }, 
//     {
//       imagem: Violão,
//       descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
//       preco: "4.000,00"
//     }, 
//     {
//       imagem: Violão,
//       descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
//       preco: "4.000,00"
//     }, 
//     {
//       imagem: Violão,
//       descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
//       preco: "4.000,00"
//     }, 
//     {
//       imagem: Violão,
//       descricao: "Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS Gonçalo",
//       preco: "4.000,00"
//     }, 

//   ];

//   return (
//     <div className="produtos">
//       <div className="produtos-container">
//         <div className="produtos-info">
//           <div className="icon-text">
//             <img src={Carteira} alt="carteira" width={130} />
//             <div>Parcele em até 12x no cartão</div>
//           </div>
//           <div className="icon-text">
//             <img src={Casa} alt="casa" width={130} />
//             <div>32 anos de loja</div>
//           </div>
//           <div className="icon-text">
//             <img src={Caixa} alt="caixa" width={130} />
//             <div>Frete Gratis para BH e Região</div>
//           </div>
//         </div>
//         <div className="cards-wrapper">
//           {produtos.map(produtoDados => {
//             return (
//               <CardProduct {...produtoDados}/>
//             )
//           })}
//         </div>
//         {/* <div className="produtos-card-container">
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button">
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <h2 className="preco">R$ 4.000,00</h2>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button">
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button">
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button">
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button" >
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button" >
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button" >
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//           <div className="card">
//             <div className="button-wishlist">
//               <button type="button" >
//                 <AiOutlineHeart size={27}/>
//               </button>
//             </div>
//             <div className="card-images">
//               <img src={Violão} alt="casa" width={250} />
//             </div>
//             <div className="card-text">
//               <p>
//                 Violão Folk Eletroacústico de Aço Giannini FK2 Goal CEQ NS
//                 Gonçalo
//               </p>
//             </div>
//             <div>
//               <button className="card-button">Adicionar</button>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }
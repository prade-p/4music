import React, { useState } from "react";
import "./CardProduct.css"
import { AiOutlineHeart } from "react-icons/ai";

function CardProduct({produto_id, usuario_id, descricao, imagem, preco, style}) {
    const [favoritado, setFavoritado] = useState(false);
    
    function onClick(e) {
        e.preventDefault();
        setFavoritado(!favoritado);
        console.log({usuario_id, produto_id})
    }
    
    return (
        <div className="card" key={produto_id} style={style}>
            <div className="card-body">
                <button className="card-heart-icon" type="button" 
                onClick={onClick} 
                style={{ 
                    'color': favoritado && "#FF9F1C", 
                    "display": usuario_id ? "block" : "none"
                }}>
                    <AiOutlineHeart size={27}/>
                </button>
                <img src={imagem} alt="" className="card-img" />
                <p className="card-description">{descricao}</p>
            </div>
            <h4 className="card-price">{`R$ ${preco}`}</h4>
            <button className="card-button">Adicionar</button>
        </div>
    )
}
export default CardProduct;

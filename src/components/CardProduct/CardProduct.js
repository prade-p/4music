import React, { useState, useEffect } from "react";
import "./CardProduct.css"
import { AiOutlineHeart } from "react-icons/ai";
import api from "../../services/api"

function CardProduct({produto_id, descricao, imagem, preco, style}) {
   const [favoritado, setFavoritado] = useState(false);

   const usuario_id = sessionStorage.getItem('usuario_id');
    
    useEffect(() => {  
        if (usuario_id === null) return;   
        api.get(`/produto_usuario/${usuario_id}/${produto_id}`).then((response) => {
            
            setFavoritado( response.data );

          });
    }, [])

    function onClick(e) {
        e.preventDefault();
        if (usuario_id === null) {
            window.location.href = "/login";
            return;
        }
        
        const favorito = !favoritado;
        setFavoritado(favorito);
        
        if (favorito) {
            api.post("/produto_usuario", {usuario_id, produto_id});
        } else {
            api.delete(`/produto_usuario/${usuario_id}/${produto_id}`)
        }
    }
    
    return (
        <div className="card" key={produto_id} style={style}>
            <div className="card-body">
                <button className="card-heart-icon" type="button" 
                onClick={onClick} 
                style={{ 
                    'color': favoritado && "#FF9F1C", 
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

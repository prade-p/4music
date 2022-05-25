import React from 'react';
import Lupa from "../../images/pesquisa.png";
import "./SearchBar.css"

function SearchBar({placeholder}) {

    function onClick (e) {
        console.log("Hello World!")
    }
    
    return (
        <div className="search-bar">
            <input
            type="text"
            placeholder={placeholder}
            className="search-field"
            />
            <button type="submit" className="search-button" onClick={onClick}>
                <img src={Lupa} alt="Lupa" className='search-icon'/>
            </button>
        </div>
    )
}

export default SearchBar;
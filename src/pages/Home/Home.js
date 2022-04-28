import React from "react";
import {useHistory} from "react-router-dom";

function Home() {
    const history = useHistory();
    return (
        <div>
            <h1>Home</h1>
            <button
                onClick={() => {history.push("login");}}>               
            Voltar</button>
            
        </div>
            
    );
}

export default Home;
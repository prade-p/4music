import React from "react";



function Cadastro() {
    const cep = "41820420";
    const res = fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json());
    
    return (
        <div className="cadastro">
            <h2 className="cadastro-titulo">Faça seu cadastro</h2>
            <fieldset className="cadastro-container">
                <div className="coluna"> 
                 <h2 className="coluna-titulo">Dados Pessoais</h2>
                 <hr />
                 <div className="linha">
                        <div className="name">
                            <label htmlFor="campoNome">
                                Nome Completo * 
                                <span className="error">
                                    Obrigatório
                                </span>
                            </label>
                            <input type="text" className="formulario" placeholder="Digite seu nome" name="campoNome" id="campoNome"/>
                        </div>
                        <div className="email">
                            <label htmlFor="campoEmail">
                                E-mail * 
                                <span className="error">
                                    Obrigatório
                                </span>
                            </label>
                            <input type="text" className="formulario" placeholder="Digite seu email" name="campoEmail" id="campoEmail"/>
                        </div>
                    </div>
                    <div className="linha">
                        <div className="cpf">
                            <label htmlFor="campoCpf">
                                CPF * 
                                <span className="error">
                                    Obrigatório
                                </span>
                            </label>
                            <input type="text" className="formulario" placeholder="Digite seu CPF" name="campoCpf" id="campoCpf"/>
                        </div>
                        <div className="rg"></div>
                        <div className="data-nascimento"></div>
                        <div className="sexo"></div>
                    </div>
                    <div className="linha">
                        <div className="senha">
                            
                        </div>
                        <div className="senha-confirmacao"></div>
                    </div>
                </div>
                <div className="coluna">
                    <h3 coluna-titulo>Endereço</h3>
                    <hr />
                    <div className="linha"></div>
                    <hr/>
                    <div className="linha">
                        <div className="rua"></div>
                        <div className="numero"></div>
                        <div className="complemento"></div>
                    </div>
                    <div className="linha">
                        <div className="bairro"></div>
                        <div className="cidade"></div>
                        <div className="estado"></div>
                        <div className="telefone"></div>
                    </div>
                </div>
            </fieldset>
        </div>
        
    )
}

export default Cadastro;
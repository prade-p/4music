import React, { useEffect, useState } from "react";
import "./Cadastro.css"
import FormInput from "../../components/FormInput";
import TextAreaInput from "../../components/TextAreaInput";
import SelectInput from "../../components/SelectInput";
import {fetchStates, fetchCitiesByState} from "./util";
import { Alert } from "react-bootstrap";
import api from "../../services/api";


function Cadastro() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        senha: "",
        senhaConf: "",
        descricaoUsuario: "",
        cep: "",
        endereco: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        telefone: "",
    });

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [hasEmailInDataBase, setHasEmailInDataBase] = useState(false);

    useEffect(() => {
        fetchStates().then(data => setStates(data))
      }, [])
  
    useEffect(() => {
        fetchCitiesByState(values.estado).then(data => setCities(data))
    }, [values.estado])
    
    const inputs = {
        name: {
            name: "name",
            type: "text",
            label: "Nome Completo*",
            errorMessage: "Deve conter no mínimo três caracteres",
            pattern: ".{3,}",
            required: true,
            isLastForm: false,
            value: values.name
        },
        email: {
            name: "email",
            type: "email",
            label: "E-mail*",
            errorMessage: "Formato inválido",
            required: true,
            isLastForm: false,
            value: values.email
        },
        senha: {
            name: "senha",
            type: "password",
            label: "Senha*",
            errorMessage: "A senha deve ter no mínimo 6 caracteres",
            required: true,
            pattern: "[0-9]{6,}",
            isLastForm: false,
            value: values.senha
        },
        senhaConf: {
            name: "senhaConf",
            type: "password",
            label: "Confirmação da senha*",
            errorMessage: "Senhas não são compatíveis",
            required: true,
            pattern: values.senha,
            isLastForm: false,
            value: values.senhaConf
        },
        descricaoUsuario: {
            name: "descricaoUsuario",
            type: "text",
            label: "Fale um pouco sobre você*",
            errorMessage: "Campo obrigatório",
            required: true,
            customStyle: {
                width: "100%",
            },
            inputStyle: {
                height: "100px",
            },
            isLastForm: false,
            value: values.descricaoUsuario
        },
        cep: {
            name: "cep",
            type: "text",
            label: "CEP*",
            errorMessage: "Formato inválido",
            required: true,
            pattern: "[0-9]{5}-[0-9]{3}",
            isLastForm: true,
            value: values.cep
        },
        endereco: {
            name: "endereco",
            type: "text",
            label: "Endereço*",
            errorMessage: "Campo obrigatório",
            required: true,
            isLastForm: false,
            value: values.endereco
        },
        numero: {
            name: "numero",
            type: "text",
            label: "Número*",
            errorMessage: "Campo obrigatório. Apenas caracteres numéricos",
            required: true,
            pattern: "\\d+",
            isLastForm: false,
            value: values.numero
        },
        complemento: {
            name: "complemento",
            type: "text",
            label: "Complemento (opcional)",
            required: false,
            isLastForm: false,
            value: values.complemento
        },
        bairro: {
            name: "bairro",
            type: "text",
            label: "Bairro*",
            errorMessage: "Campo obrigatório",
            required: true,
            isLastForm: true,
            value: values.bairro
        },
        telefone: {
            name: "telefone",
            type: "text",
            label: "Telefone celular*",
            placeholder: "99 99999-9999",
            errorMessage: "Formato inválido: 99 99999-9999",
            required: true,
            pattern: "\\d{2}\\s9\\d{4}-\\d{4}",
            isLastForm: false,
            value: values.telefone
        },
    }

    const textArea = {
        descricaoUsuario: {
            name: "descricaoUsuario",
            type: "text",
            label: "Fale um pouco sobre você*",
            errorMessage: "Campo obrigatório",
            required: true,
            customStyle: {
                width: "100%",
            },
            inputStyle: {
                height: "100px",
            },
            isLastForm: false,
            value: values.descricaoUsuario
        },
    }

    const selectInputs = {
        estado: {
            name: "estado",
            type: "text",
            label: "Estado*",
            firstOption: "Selecione um estado",
            errorMessage: "Campo obrigatório",
            required: true,
            isLastForm: false,
            value: values.estado
        },
        cidade: {
            name: "cidade",
            type: "text",
            label: "Cidade*",
            firstOption: "Selecione uma cidade",
            errorMessage: "Campo obrigatório",
            required: true,
            isLastForm: false,
            value: values.cidade
        },
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formValues = Object.fromEntries(data.entries());
        const {name, senha, email, descricaoUsuario, telefone, endereco, cep, numero, complemento, bairro, estado, cidade} = formValues;
        const enderecoCompleto = `${endereco} - ${bairro}, n° ${numero}, ${cidade} - ${estado}, CEP ${cep}.${complemento && ` Complemento: ${complemento}.`}`
        
        const usuario = {nome: name,  password: senha, email, descricao: descricaoUsuario, endereco: enderecoCompleto, telefone};
        api.post("/usuario", usuario ).then(response => {
            if (response.status >= 400) {
                setHasEmailInDataBase(true);
                values.email = "";
                return;
            }
            setHasEmailInDataBase(false);
            alert("Logado com sucesso.")
            window.location.href = "/login";
        })
    };

    function onChange(e)  {  
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }
    
    return (
        <div className="cadastro">
            <div className="cadastroContainer">
                <h1 className="titulo">Registre-se</h1>
                <form action="#" className="formContainer" onSubmit={handleSubmit}>
                    <div className="secaoForms">
                    {hasEmailInDataBase && 
                            <Alert variant="danger">E-mail já cadastrado.</Alert>
                        }
                        <h4 className="tituloSecao">Dados Cadastrais</h4>
                        <div className="dados">
                        <FormInput {...inputs.name} onChange={onChange}/>
                            <FormInput {...inputs.email} onChange={onChange}/>
                            <FormInput {...inputs.senha} onChange={onChange}/>
                            <FormInput {...inputs.senhaConf} onChange={onChange}/>
                            <FormInput {...inputs.telefone} onChange={onChange}/>
                        </div>
                    </div>
                    <div className="secaoForms">
                        <h4 className="tituloSecao">Descrição Pessoal</h4>
                        <div className="dadosDescricao">
                            <TextAreaInput {...textArea.descricaoUsuario} onChange={onChange}/> 
                        </div>
                    </div>
                    <div className="secaoForms">
                        <h4 className="tituloSecao">Endereço</h4>
                        <div className="dados">
                        <FormInput {...inputs.endereco} onChange={onChange}/>
                            <FormInput {...inputs.cep} onChange={onChange}/>
                            <FormInput {...inputs.numero} onChange={onChange}/>
                            <FormInput {...inputs.complemento} onChange={onChange}/>
                            <FormInput {...inputs.bairro} onChange={onChange}/>
                            <SelectInput {...selectInputs.estado} onChange={onChange} dataSet={states}/>
                            <SelectInput {...selectInputs.cidade} onChange={onChange} dataSet={cities}/>
                        </div>
                    </div>
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;
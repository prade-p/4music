import { Button, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {fetchStates, fetchCitiesByState} from "./util";
import "./Perfil.css";
import "../Produtos/Produtos.css";
import SelectInput from "../../components/SelectInput";
import api from "../../services/api";
import {logout} from "../../services/auth";
import CardProduct from "../../components/CardProduct"

import { Alert } from "react-bootstrap";
import FormInput from "../../components/FormInput"
import TextAreaInput from "../../components/TextAreaInput"


function Perfil() {

    const [itemSelec, setItemSelec] = useState(1);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [usuario, setUsuario] = useState({});
    const [dados, setDados] = useState([]);
    const [hasEmailInDataBase, setHasEmailInDataBase] = useState(false);

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

    const inputs = {
        name: {
            name: "name",
            type: "text",
            label: "Nome Completo",
            errorMessage: "Deve conter no mínimo três caracteres",
            pattern: ".{3,}",
            isLastForm: false,
            value: values.name
        },
        email: {
            name: "email",
            type: "email",
            label: "E-mail",
            errorMessage: "Formato inválido",
            isLastForm: false,
            value: values.email
        },
        senha: {
            name: "senha",
            type: "password",
            label: "Senha",
            errorMessage: "A senha deve ter no mínimo 6 caracteres",
            pattern: "[0-9]{6,}",
            isLastForm: false,
            value: values.senha
        },
        senhaConf: {
            name: "senhaConf",
            type: "password",
            label: "Confirmação da senha",
            errorMessage: "Senhas não são compatíveis",
            required: values.senha !== "" ? true : false,
            pattern: values.senha,
            isLastForm: false,
            value: values.senhaConf
        },
        descricaoUsuario: {
            name: "descricaoUsuario",
            type: "text",
            label: "Fale um pouco sobre você*",
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
            label: "Telefone celular",
            placeholder: "99 99999-9999",
            errorMessage: "Formato inválido: 99 99999-9999",
            pattern: "\\d{2}\\s9\\d{4}-\\d{4}",
            isLastForm: false,
            value: values.telefone
        },
    }

    const textArea = {
        descricaoUsuario: {
            name: "descricaoUsuario",
            type: "text",
            label: "Fale um pouco sobre você",
            customStyle: {
                width: "100%",
            },
            inputStyle: {
                height: "100px",
            },
            isLastForm: true,
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
        console.log(formValues)
        const {name, senha, email, descricaoUsuario, telefone, endereco, cep, numero, complemento, bairro, estado, cidade} = formValues;
        const enderecoCompleto = `${endereco} - ${bairro}, n° ${numero}, ${cidade} - ${estado}, CEP ${cep}.${complemento && ` Complemento: ${complemento}.`}`
        
        const usuario_id = sessionStorage.getItem("usuario_id");
        const usuario = {nome: name,  password: senha, email, descricao: descricaoUsuario, endereco: enderecoCompleto, telefone};

        const updates = Object.keys(usuario).reduce((acc, key) => {
            const value = usuario[key];
            if (!value || value.includes("undefined")) return acc;
            acc[key] = value;
            return acc;
        }, {})

        api.put(`/usuario/${usuario_id}`, updates).then(response => {
            if (response.status >= 400) {
                setHasEmailInDataBase(true);
                values.email = "";
                return;
            }
            setHasEmailInDataBase(false);
            alert("Autalizado com sucesso!")
            window.location.href = "/perfil";
        })
    };


    useEffect(() => {
        const usuario_id = sessionStorage.getItem("usuario_id");
        api.get(`/produto_usuario/${usuario_id}`).then((response) => {
            setDados(response.data);
        });
      }, [dados]);

    function SelecItem(index) {
        if (index === 4) {
            window.location.href = "/";
        } else {
            setItemSelec(index);
        }
    }

    useEffect(() => {
        fetchStates().then(data => setStates(data))
      }, [])
  
    useEffect(() => {
        fetchCitiesByState(values.estado).then(data => setCities(data))
    }, [values.estado])

    const onChange = (e) => {  
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    useEffect(() => {
        const usuario_id = sessionStorage.getItem("usuario_id");
        api.get(`/usuario/${usuario_id}`).then(res => {
            setUsuario(res.data);
        });
    }, [])

    return (

        <div className="page">
            <div className="containerMenuPerfil">
                <Box sx={
                    {
                        width: '100%',
                        maxWidth: '360px',
                        borderWidth: '0px 0px 0px 0px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(0, 0, 0, 0.2)',

                        border: '1.5px solid rgba(127, 118, 118, 0.2)',
                        borderRadius: '5px'
                    }
                }>
                    <List>

                        <ListItemButton selected={itemSelec === 1 || itemSelec === 5} onClick={(e) => SelecItem(1)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    color: 'black'
                                }
                            }
                        }>
                            <ListItemIcon>
                                <PermIdentityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Conta" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 2 || itemSelec === 6} onClick={(e) => SelecItem(2)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    color: 'black'
                                }
                            }
                        }>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary="Endereços" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 3} onClick={(e) => SelecItem(3)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    color: 'black'
                                }
                            }
                        }>
                            <ListItemIcon>
                                <FavoriteBorderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lista de Desejo" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 4} onClick={(e) => {
                            SelecItem(4);
                            logout()
                        }} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    color: 'black'
                                }
                            }
                        }>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sair" />
                        </ListItemButton>

                    </List>
                </Box>
                <p></p>
            </div>

            {itemSelec === 1 &&
                <div className="containerPerfil">
                    <div className="tituloContainerPerfil">
                        <h2>Dados Pessoais</h2>
                    </div>

                    <Divider />

                    <p></p>

                    <div className="dadosConta">

                        <div className="containerDados">
                            <div className="nomeDado">
                                Nome Completo
                            </div>
                            <div className="conteudoDado">
                                {usuario?.nome}
                            </div>
                            <p></p>
                            <div className="nomeDado">
                                E-mail
                            </div>
                            <div className="conteudoDado">
                                {usuario?.email}
                            </div>
                            <p></p>
                            <div className="nomeDado">
                                Telefone Celular
                            </div>
                            <div className="conteudoDado">
                                {usuario?.telefone}
                            </div>
                        </div>

                        <div className="containerDescricao">
                            <div className="nomeDado">
                                Descrição
                            </div>
                            <div className="conteudoDado descricao">
                                {usuario?.descricao} 
                            </div>
                        </div>

                    </div>

                    <p></p>
                    <p></p>

                    <div className="btnEditarDados">
                        <Button variant="contained" onClick={(e) => (SelecItem(5))}>
                            <ListItemIcon>
                                <EditOutlinedIcon /> Editar Dados Pessoais
                            </ListItemIcon>
                        </Button>
                    </div>

                </div>
            }
            {itemSelec === 2 &&
                <div className="containerPerfil">
                    <div className="tituloContainerPerfil">
                        <h2>Endereço</h2>
                    </div>

                    <Divider />

                    <p></p>

                    <div className="dadosEndereco">

                        <div className="containerDadosEndereco">
                            <div className="nomeDado">
                                {usuario?.nome}
                            </div>

                            <p></p>

                            <div className="conteudoDado">
                                {usuario?.endereco}
                            </div>
                        </div>

                        <div className="btnEditarDados">
                            <Button variant="contained" onClick={(e) => (SelecItem(6))}>
                                <ListItemIcon>
                                    <HomeOutlinedIcon /> Editar Endereço
                                </ListItemIcon>
                            </Button>
                        </div>

                    </div>
                </div>
            }
            {itemSelec === 3 &&

                <div className="containerPerfil">
                    <div className="tituloContainerPerfil">
                        <h2>Lista de Desejo</h2>
                    </div>

                    <Divider />

                    <p></p>

                    <div className="listCardDesejo">
                    {dados.map((produtoDados) => {
                        console.log(dados);
                        return (
                            <CardProduct key={produtoDados.produto_id} {...produtoDados} />
                        );
                    })}

                    </div>
                </div>
            }
            {itemSelec === 4 &&
                <div className="containerPerfil">
                    Sair
                </div>
            }
            {itemSelec === 5 &&
                <div className="containerPerfil">
                    <div className="tituloContainerPerfil">
                        <h2>Editar Dados Pessoais</h2>
                        {hasEmailInDataBase && 
                            <Alert variant="danger">E-mail já cadastrado.</Alert>
                        }
                    </div>

                    {/* <Divider />

                    <p></p>

                    <div className="editarDados">
                        <Form className="formDados">

                            <div class="inputsEditarDados1">
                                <Form.Group className="formEditarDados1">

                                    <Form.Label className="labelEditarDados">
                                        Nome Completo
                                    </Form.Label>
                                    <input type="name"></input>

                                    <Form.Label className="labelEditarDados">
                                        E-mail
                                    </Form.Label>
                                    <input type="email"></input>

                                    <Form.Label className="labelEditarDados">
                                        Telefone Celular
                                    </Form.Label>
                                    <input type="text"></input>

                                </Form.Group>
                            </div>

                            <div className="inputsEditarDados2">
                                <Form.Group className="formEditarDados2">

                                    <Form.Label className="labelEditarDados">
                                        Senha
                                    </Form.Label>
                                    <input type="password"></input>

                                    <Form.Label className="labelEditarDados">
                                        Confirmar Senha
                                    </Form.Label>
                                    <input type="password"></input>

                                </Form.Group>
                            </div>

                        </Form>

                        <Form className="formDesciracao">

                            <div className="inputsEditarDescricao">
                                <Form.Group className="formEditarDescricao">

                                    <Form.Label className="labelEditarDados">
                                        Descrição
                                    </Form.Label>

                                    <textarea className="textareaDescricao" type="text"></textarea>

                                </Form.Group>
                            </div>

                        </Form>
                    </div>

                    <p></p> */}
                    
                    <form action="#" className="formContainerInfo" onSubmit={handleSubmit}>
                        <div className="dados">
                        <FormInput {...inputs.name} onChange={onChange}/>
                            <FormInput {...inputs.email} onChange={onChange}/>
                            <FormInput {...inputs.senha} onChange={onChange}/>
                            <FormInput {...inputs.senhaConf} onChange={onChange}/>
                            <FormInput {...inputs.telefone} onChange={onChange}/>
                        </div>
                            <TextAreaInput {...textArea.descricaoUsuario} onChange={onChange}/>
                        <div className="btnEditarDados">
                            <Button variant="contained" type="submit">
                                <ListItemIcon>
                                    <SaveOutlinedIcon /> Salvar Alterações
                                </ListItemIcon>
                            </Button>
                        </div>
                    </form>
                </div>
            }
            {itemSelec === 6 &&
                <div className="containerPerfil">
                    <div className="tituloContainerPerfil">
                        <h2>Editar Endereço</h2>
                    </div>

                    {/* <Divider />

                    <p></p> */}
                        {/* <Form className="formDados">
                            <div class="inputsEditarDados2">
                                <Form.Group className="formEditarDados1">

                                    <Form.Label className="labelEditarDados">
                                        Rua
                                    </Form.Label>
                                    <input type="name"></input>

                                    <Form.Label className="labelEditarDados">
                                        Número
                                    </Form.Label>
                                    <input type="email"></input>

                                    <Form.Label className="labelEditarDados">
                                        Complemento
                                    </Form.Label>
                                    <input type="text"></input>

                                    <Form.Label className="labelEditarDados">
                                        Bairro
                                    </Form.Label>
                                    <input type="text"></input>

                                </Form.Group>
                            </div>

                            <div class="inputsEditarDados1">
                                <Form.Group className="formEditarDados1">

                                    <Form.Label className="labelEditarDados">
                                        CEP
                                    </Form.Label>
                                    <input type="name"></input>

                                    <SelectInput {...selectInputs.estado} onChange={onChange} containerStyle={{"width": "100%;"}} dataSet={states}></SelectInput>
                                    <SelectInput {...selectInputs.cidade} onChange={onChange} dataSet={cities}></SelectInput>

                                </Form.Group>
                            </div>
                        </Form> */}
                        <form action="#" className="formContainerInfo" onSubmit={handleSubmit}>
                        <div className="dados">
                            <FormInput {...inputs.endereco} onChange={onChange}/>
                            <FormInput {...inputs.cep} onChange={onChange}/>
                            <FormInput {...inputs.numero} onChange={onChange}/>
                            <FormInput {...inputs.complemento} onChange={onChange}/>
                            <FormInput {...inputs.bairro} onChange={onChange}/>
                            <SelectInput {...selectInputs.estado} onChange={onChange} dataSet={states}/>
                            <SelectInput {...selectInputs.cidade} onChange={onChange} dataSet={cities}/>
                        </div>
                        <div className="btnEditarDados">
                            <Button variant="contained" type="submit">
                                <ListItemIcon>
                                    <SaveOutlinedIcon /> Salvar Alterações
                                </ListItemIcon>
                            </Button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default Perfil;
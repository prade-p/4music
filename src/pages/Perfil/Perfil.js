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


function Perfil() {

    const [itemSelec, setItemSelec] = useState(1);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [usuario, setUsuario] = useState({});
    const [dados, setDados] = useState([]);

    const [values, setValues] = useState({
        estado: "",
        telefone: "",
    });

    useEffect(() => {
        const usuario_id = sessionStorage.getItem("usuario_id");
        api.get(`/produto_usuario/${usuario_id}`).then((response) => {
            setDados(response.data);
        });

      }, []);
    
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
                            <div className="conteudoDado">
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
                    </div>

                    <Divider />

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

                    <p></p>

                    <div className="btnEditarDados">
                        <Button variant="contained">
                            <ListItemIcon>
                                <SaveOutlinedIcon /> Salvar Alterações
                            </ListItemIcon>
                        </Button>
                    </div>

                </div>
            }
            {itemSelec === 6 &&
                <div className="containerPerfil">
                    <div className="tituloContainerPerfil">
                        <h2>Editar Endereço</h2>
                    </div>

                    <Divider />

                    <p></p>

                    <div className="editarDados">
                        <Form className="formDados">

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

                                    <SelectInput {...selectInputs.estado} onChange={onChange} dataSet={states}></SelectInput>
                                    <SelectInput {...selectInputs.cidade} onChange={onChange} dataSet={cities}></SelectInput>

                                </Form.Group>
                            </div>
                        </Form>

                        <div className="btnEditarDados">
                            <Button variant="contained">
                                <ListItemIcon>
                                    <SaveOutlinedIcon /> Salvar Alterações
                                </ListItemIcon>
                            </Button>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default Perfil;
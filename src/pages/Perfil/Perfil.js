import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import ComputerIcon from "@mui/icons-material/Computer";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState } from "react";
import "./Perfil.css";



function Perfil() {

    const [itemSelec, setItemSelec] = useState(1);

    function SelecItem(index) {
        setItemSelec(index);
    }

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

                        <ListItemButton selected={itemSelec === 1} onClick={(e) => SelecItem(1)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                }
                            }
                        }>
                            <ListItemIcon>
                                <ComputerIcon />
                            </ListItemIcon>
                            <ListItemText primary="Painel" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 2} onClick={(e) => SelecItem(2)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                }
                            }
                        }>
                            <ListItemIcon>
                                <CreditCardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pedidos" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 3} onClick={(e) => SelecItem(3)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                }
                            }
                        }>
                            <ListItemIcon>
                                <FavoriteBorderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lista de Desejo" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 4} onClick={(e) => SelecItem(4)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                }
                            }
                        }>
                            <ListItemIcon>
                                <PermIdentityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Conta" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 5} onClick={(e) => SelecItem(5)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                }
                            }
                        }>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary="Endereços" />
                        </ListItemButton>

                        <Divider />

                        <ListItemButton selected={itemSelec === 6} onClick={(e) => SelecItem(6)} sx={
                            {
                                '& .MuiTypography-root': {
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
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
                    Painel
                </div>
            }
            {itemSelec === 2 &&
                <div className="containerPerfil">
                    Pedidos
                </div>
            }
            {itemSelec === 3 &&
                <div className="containerPerfil">
                    Lista de Desejo
                </div>
            }
            {itemSelec === 4 &&
                <div className="containerPerfil">
                    Conta
                </div>
            }
            {itemSelec === 5 &&
                <div className="containerPerfil">
                    Endereço
                </div>
            }
            {itemSelec === 6 &&
                <div className="containerPerfil">
                    Sair
                </div>
            }
        </div>

    )
}

export default Perfil;
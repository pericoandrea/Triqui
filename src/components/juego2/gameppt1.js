import React, { Component } from "react";
import {
    PanTool as PanToolIcon,
    LocalDining as LocalDiningIcon,
    FiberManualRecord as FiberManualRecordIcon
} from "@material-ui/icons";

import { IconButton } from "@material-ui/core";
class GamePpt1 extends Component {
     
    handleClick = (seleccion) => {
       this.setState({
       miSeleccion: seleccion })
     }
     handleClick1 = (seleccion1) => {
        this.setState({
        miSeleccion1: seleccion1 })
      }
       render() {
        if(this.state && this.state.miSeleccion) {  
            console.log("Player 1 Seleccionó : ", this.state.miSeleccion);
            if(this.state && this.state.miSeleccion1){ 
                console.log("Player 2 Seleccionó : ", this.state.miSeleccion1);
        if(this.state.miSeleccion1 === this.state.miSeleccion){
                return(
                    <div className="empate">Empate</div>
                );
        }
             if(this.state.miSeleccion === "piedra"){
                if(this.state.miSeleccion1 === "tijera"){
                     return "¡Gana Player 1, Piedra gana!";
                } else {
                     return "¡Gana Player 2, Papel gana!";
                }
            }
            if(this.state.miSeleccion === "papel"){
                if(this.state.miSeleccion1 === "piedra"){
                     return "¡Gana Player 1, Papel gana!";
                } else {
                     return "¡Gana Player 2, Tijera gana!";
                }
            }
           if(this.state.miSeleccion === "tijera"){
                if(this.state.miSeleccion1 === "papel"){
                    return "¡Gana Player 1, Tijera gana!";
                } else {
                     return "¡Gana Player 2, Piedra gana!";
                }
            }
         }
        }
      
        return (
            
            <div >
                <h1>Piedra, papel o tijera vs 2</h1>
                <div> 
                <IconButton onClick={(e) => this.handleClick("piedra")}>
                    <FiberManualRecordIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={(e, opcion = "papel") => this.handleClick(opcion)}>
                    <PanToolIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={(e) => this.handleClick("tijera")}>
                    <LocalDiningIcon fontSize="large" />
                </IconButton>
                </div>
                <div> 
                <IconButton onClick={(e) => this.handleClick1("piedra")}>
                    <FiberManualRecordIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={(e, opcion = "papel") => this.handleClick1(opcion)}>
                    <PanToolIcon fontSize="large" />
                </IconButton>
                <IconButton onClick={(e) => this.handleClick1("tijera")}>
                    <LocalDiningIcon fontSize="large" />
                </IconButton>
                </div>
                
           </div>
        );
    }
 } 
export default GamePpt1;
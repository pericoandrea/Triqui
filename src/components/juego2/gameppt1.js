import React, { Component } from "react";
import {
    PanTool as PanToolIcon,
    LocalDining as LocalDiningIcon,
    FiberManualRecord as FiberManualRecordIcon
} from "@material-ui/icons";

import { IconButton } from "@material-ui/core";
class GamePpt1 extends Component {
     
//     constructor(props){
//         super(props);
//         const ram = "dskfjsdjf"
// this.state= {
//     estado1: ["piedra"],

    handleClick = (seleccion) => {
       this.setState({
       miSeleccion: seleccion })
     }

     handleClick1 = (opcion1) => {
        this.setState({
        pagina2: opcion1 })
        
      }
 
    render() {
        
         if(this.state && this.state.miSeleccion) {
            console.log("mi Seleccion:", this.state.miSeleccion); 
            var numAleatorio= Math.floor(Math.random() * 3);
            var opciones = ["piedra", "papel", "tijera"];
            var computadoraElige = opciones[numAleatorio];
            console.log ("seleccion computador", computadoraElige);
            if(computadoraElige === this.state.miSeleccion){
                return(
                    <div className="empate">Empate</div>
                );
            }
            if(this.state.miSeleccion === "piedra"){
                if(computadoraElige === "tijera"){
                     return "¡Gana usuario, Piedra gana!";
                } else {
                     return "¡Computador Gana, Papel gana!";
                }
            }
            if(this.state.miSeleccion === "papel"){
                if(computadoraElige === "piedra"){
                     return "¡Gana Usuario, Papel gana!";
                } else {
                     return "¡Gana Computador, Tijera gana!";
                }
            }
           if(this.state.miSeleccion === "tijera"){
                if(computadoraElige === "papel"){
                    return "¡Gana usuario, Tijera gana!";
                } else {
                     return "¡Computador Gana, Piedra gana!";
                }
            }
            
                console.log(this.state.pagina2);
        }
      
        return (
            
            <div >
                <h1>Piedra, papel o tijera vs 2</h1>
                {/* <div> 
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
                

                <h3> br2</h3>
                <h3> br3</h3>
                <h3> br4</h3>
                <h3> br5</h3>
                <h3> br6</h3>
                <h6> Elige tu mejor opción y atrevete a ganarle a la máquina</h6>
         
                 */}
           </div>
        );
    }
}

export default GamePpt1;
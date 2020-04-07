import React, { Component } from "react";
import {
    PanTool as PanToolIcon,
    LocalDining as LocalDiningIcon,
    FiberManualRecord as FiberManualRecordIcon
} from "@material-ui/icons";

import { IconButton } from "@material-ui/core";

class GamePpt extends Component {
    
    handleClick = (seleccion) => {
       this.setState({
            miSeleccion: seleccion
        })
    }

    render() {
        if(this.state && this.state.miSeleccion)
            console.log("miSeleccion:", this.state.miSeleccion); 
        
        return (
            <div>
                <h1>Piedra, papel o tijera</h1>
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
        );
    }
}

export default GamePpt;
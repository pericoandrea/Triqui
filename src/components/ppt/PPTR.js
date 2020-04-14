import React, { Component } from "react";

class PPT extends Component {

    constructor(props){
        super(props);
        const  random = Math.floor(Math.random() * Math.floor(3));
        const options= ["PIEDRA", "PAPEL", "TIJERA"];
        this.state = {          
          maquina: options[random],
        } 
    }
    
     /*handleClick = (opcion, jugador) => {
        this.setState(
          {  decision : opcion },
          {  jugador                  },
          () => this.calculo()
        );
      }*/

    handleClick = (opcion) => {
      this.setState(
        {  decision : opcion },
        () => this.calculo()
      );
    }

  calculo = () => {
    console.log(this.state.decision);
    let resultado = "";
    if(
      (this.state.maquina === "PIEDRA" && this.state.decision === "PAPEL") ||
      (this.state.maquina === "PAPEL" && this.state.decision === "TIJERA") ||
      (this.state.maquina === "TIJERA" && this.state.decision === "PIEDRA")
    ) resultado ="¡GANASTE! FELICIDADES";
    
    if(
      (this.state.maquina === "PIEDRA" && this.state.decision === "PIEDRA") ||
      (this.state.maquina === "PAPEL" && this.state.decision === "PAPEL") ||
      (this.state.maquina === "TIJERA" && this.state.decision === "TIJERA")
    ) resultado = "¡EMPATADOS: INTENTA DE NUEVO!";
    
    if(
      (this.state.maquina === "PIEDRA" && this.state.decision === "TIJERA") ||
      (this.state.maquina === "PAPEL" && this.state.decision === "PIEDRA") ||
      (this.state.maquina === "TIJERA" && this.state.decision === "PAPEL")
    ) resultado = "¡PERDISTE! LO SIENTO";

    this.setState({
      resultado // resultado: resultado
    })
  }

  render() 
  {
      
        return(
          <div>
            <div><h1 className="header">¿PIEDRA, PAPEL O TIJERA?</h1></div>
            <button className="boton-personalizado bppt1" onClick={(e, opcion = "PIEDRA") => this.handleClick(opcion)}> PIEDRA </button>
            <button className="boton-personalizado bppt2" onClick={(e) => this.handleClick("PAPEL")}> PAPEL</button>
            <button className="boton-personalizado bppt3" onClick={(e, opcion = "TIJERA") => this.handleClick(opcion)}> TIJERA</button>
            { this.state.resultado && 
              <div>
                <h1 className="resultado">{this.state.resultado}</h1>
                <div className="elemaquina">
                  <h3> La elección de la máquina fue: {this.state.maquina}</h3>
                  <h3> La elección del jugador fue: {this.state.decision}</h3>
                </div>                
              </div>
    	      }
            
          </div>
        )
    
    }
      
}

export default PPT;

/*<button onClick={(e, jugador) => this.handleClick(jugador)}> jugador</button>*/

/*<div className="elemaquina">
                  <h3> La elección de la máquina fue: {this.state.maquina}</h3>
                  <h3> La elección del jugador fue: {this.state.decision}</h3>
                </div>
                */
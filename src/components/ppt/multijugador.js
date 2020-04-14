import React, { Component } from "react";

class Multijugador extends Component {

    constructor(props){
        super(props);
        const random = Math.floor(Math.random() * Math.floor(3));
        const options= ["PIEDRA", "PAPEL", "TIJERA"];
        this.state = {          
          aleatoreo1: options[random],
          aleatoreo2: options[random]
        } 
    }
              
    handleClick = () => {
    this.setState(
        () => this.calculo()
    );
    }

  calculo = () => {
    console.log(this.state.aleatoreo1);
    console.log(this.state.aleatoreo2);
    /*console.log(this.state.aleatoreo2);*/
    let resultado = "";
    if(
      (this.state.aleatoreo1 === "PIEDRA" && this.state.aleatoreo2 === "PAPEL") ||
      (this.state.aleatoreo1 === "PAPEL" && this.state.aleatoreo2 === "TIJERA") ||
      (this.state.aleatoreo1 === "TIJERA" && this.state.aleatoreo2=== "PIEDRA")
    ) resultado ="¡GANASTE! FELICIDADES";
    
    if(
      (this.state.aleatoreo1 === "PIEDRA" && this.state.aleatoreo2 === "PIEDRA") ||
      (this.state.aleatoreo1 === "PAPEL" && this.state.aleatoreo2 === "PAPEL") ||
      (this.state.aleatoreo1 === "TIJERA" && this.state.aleatoreo2 === "TIJERA")
    ) resultado = "¡EMPATADOS: INTENTA DE NUEVO!";
    
    if(
      (this.state.aleatoreo1 === "PIEDRA" && this.state.aleatoreo2 === "TIJERA") ||
      (this.state.aleatoreo1 === "PAPEL" && this.state.aleatoreo2 === "PIEDRA") ||
      (this.state.aleatoreo1 === "TIJERA" && this.state.aleatoreo2 === "PAPEL")
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
            <button className="boton-personalizado bppt1" onClick={(e, aleatoreo1) => this.handleClick(aleatoreo1)}> 1 </button>
            <button className="boton-personalizado bppt2" onClick={(e, aleatoreo2) => this.handleClick(aleatoreo2)}> 2</button>
                        
            
            { this.state.resultado && 
              <div>
                <h1 className="resultado">{this.state.resultado}</h1>
                <div className="elemaquina">
                  <h3> La elección de la máquina fue: {this.state.aleatoreo1}</h3>
                  <h3> La elección del jugador fue: {this.state.aleatoreo2}</h3>
                </div>                
              </div>
    	      }
            
          </div>
        )
    
    }
      
}

export default Multijugador;
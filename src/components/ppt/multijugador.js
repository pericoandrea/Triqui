import React, { Component } from "react";

class Multijugador extends Component {

  constructor(props){
      super(props);
       this.state = {
        seleccion: {}
      } 
  }

  handleClick = (event) => {
    const jugador = event.target.id; /* poder pasar un id con el event del onclick */
    const seleccion = this.state.seleccion; /* asignarle a var selección del hadleclick el estado actual de selección de cada jugador */
    const random = Math.floor(Math.random() * Math.floor(3));
    const options= ["PIEDRA", "PAPEL", "TIJERA"];
    seleccion[jugador] = options[random]; /* se le pasa el id de cada jugador a seleccíón para saber quien espichó el botón */
    this.setState(
            {
              seleccion /*Asignar ese estado a selección */
            },
            () => this.calculo()
          )   
          console.log(this.state.seleccion)  
  }
  
  reiniciar = () =>{
    this.setState({
      seleccion: {} /*Resetear el estado de selección */
    })
    console.log(this.setState.seleccion)
  }

  calculo = () => {
    if (Object.getOwnPropertyNames(this.state.seleccion).length > 1) { /* Hasta que haya al menos una selección realice el calculo */
      let resultado = "";
      if(
        (this.state.seleccion.playerOne === "PIEDRA" && this.state.seleccion.playerTwo === "PAPEL") ||
        (this.state.seleccion.playerOne === "PAPEL" && this.state.seleccion.playerTwo === "TIJERA") ||
        (this.state.seleccion.playerOne === "TIJERA" && this.state.seleccion.playerTwo=== "PIEDRA")
      ) resultado ="¡GANASTE! FELICIDADES";
      
      if(
        (this.state.seleccion.playerOne === "PIEDRA" && this.state.seleccion.playerTwo === "PIEDRA") ||
        (this.state.seleccion.playerOne === "PAPEL" && this.state.seleccion.playerTwo === "PAPEL") ||
        (this.state.seleccion.playerOne === "TIJERA" && this.state.seleccion.playerTwo === "TIJERA")
      ) resultado = "¡EMPATADOS: INTENTA DE NUEVO!";
      
      if(
        (this.state.seleccion.playerOne === "PIEDRA" && this.state.seleccion.playerTwo === "TIJERA") ||
        (this.state.seleccion.playerOne === "PAPEL" && this.state.seleccion.playerTwo === "PIEDRA") ||
        (this.state.seleccion.playerOne === "TIJERA" && this.state.seleccion.playerTwo === "PAPEL")
      ) resultado = "¡PERDISTE! LO SIENTO";

      this.setState({
        resultado
      })
    }
  }
  /* NOTA: en el Onclick solamente se pasa el evento de los jugadores para que según el evento realice la acción
  determinada en el handleClick que sería elegir la opción*/
  
  render() 
  {
      return(
      <div>
        <div><h1 className="header">¿PIEDRA, PAPEL O TIJERA?</h1></div>
        <button id="playerOne" className="boton-personalizado bppt1" onClick={(e) => this.handleClick(e)}> Jugador #1 </button>
        <button id="playerTwo" className="boton-personalizado bppt2" onClick={(e) => this.handleClick(e)}> Jugador #2</button>
        <button  className="boton-personalizado bppt3" onClick={this.reiniciar.bind(this)}> Reinicio</button>
        
        {Object.getOwnPropertyNames(this.state.seleccion).length > 1 && this.state.resultado &&       
          <div>
            <div className="elemaquina">
            <h3> La elección del jugador uno fue: {this.state.seleccion.playerOne}</h3>
            <h2> La elección del jugador dos fue: {this.state.seleccion.playerTwo}</h2>          
          </div> 
          <div>
            <h1 className="resultado">{this.state.resultado}</h1>
          </div>
          </div> 
        }      
      </div>
    )
    
    }
      
}
export default Multijugador;
import React, { Component } from "react";

class PPT extends Component {

    constructor(props){
        super(props);
        this.state = {          
          options: ["PIEDRA", "PAPEL", "TIJERA"],
          random: Math.floor(Math.random() * Math.floor(3)),
        } 
        this.state.maquina = this.state.options[this.state.random];
        console.log(this.state.maquina);
    
  }
    handleClick = (opciones) => {
      this.setState({
        decision : opciones      
      })
      this.calculo();
}

  calculo=()=>{
    
    if((this.state.maquina === "PIEDRA" && this.state.decision === "PAPEL") || (this.state.maquina === "PAPEL" && this.state.decision === "TIJERA") || (this.state.maquina === "TIJERA" && this.state.decision === "PIEDRA"))
    {
      alert("GANASTE");
      /*let estadoganador;
      return(estadoganador === 1);*/
    }
    else if((this.state.maquina === "PIEDRA" && this.state.decision === "PIEDRA") || (this.state.maquina === "PAPEL" && this.state.decision === "PAPEL") || (this.state.maquina === "TIJERA" && this.state.decision === "TIJERA"))
    {
      alert("EMPATADOS");
    }
    else if((this.state.maquina === "PIEDRA" && this.state.decision === "TIJERA") || (this.state.maquina === "PAPEL" && this.state.decision === "PIEDRA") || (this.state.maquina === "TIJERA" && this.state.decision === "PAPEL"))
    {
      alert("PERDISTE!");
    }

  }
      
  render() 
    {
      if(this.estadoganador === 1)
      {
        return(<div  className="elemaquina" > <h3> GANO</h3>   </div>)
      }

      if(this.state.decision)
      {  return( 
      <div className="elemaquina"><h3> La elección de la máquina fue: {this.state.maquina}</h3>
      <h3> La elección del jugador fue: {this.state.decision}</h3></div>
      )}
    
        return(
          <div>
          <button className="boton-personalizado bppt1" onClick={(e, opciones = "PIEDRA") => this.handleClick(opciones)}> PIEDRA </button>
          <button className="boton-personalizado bppt2" onClick={(e, opciones = "PAPEL") => this.handleClick(opciones)}> PAPEL</button>
          <button className="boton-personalizado bppt3" onClick={(e, opciones = "TIJERA") => this.handleClick(opciones)}> TIJERA</button>
          </div>
                     
        )
    
    }
      
}

export default PPT;



      /*
      if(this.state && this.state.decision)
      {
        console.log("YO:" , this.state.decision);
      }
      if(this.state && this.state.maquina)
      {
        console.log("MAQUINA:" , this.state.maquina);
      }


      /*
      if(this.state && this.state.options)
      {
        console.log("OPTIONS:" , this.state.options);
      }

      if(this.state && this.state.random)
      {
        console.log("RANDOM:" , this.state.random);
      }*/
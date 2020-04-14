import React, { Component } from "react";


class PPT extends Component {

    constructor(props){
        super(props);
        this.state={
            Opciones: ''
        }    
    }

    render() 
    {
     const Eleccion= () => {
        const options = ["PIEDRA", "PAPEL", "TIJERA"];
        const random = Math.floor(Math.random() * Math.floor(3));
        const machineChoice = options[random];

        if(this.state.Opciones)
        {
            return (
                <div>
                    <h2>La opción de la máquina fue: {machineChoice}</h2>
                    <h2>Tu opción fue: {this.state.Opciones} </h2>
                </div>  
              )

        }
                  
      }

        return (
            
         <div>
            <button onClick={() => this.setState({Opciones: "PIEDRA"})}>PIEDRA</button>
            <button onClick={() => this.setState({Opciones: "PAPEL"})}>PAPEL</button>
            <button onClick={() => this.setState({Opciones: "TIJERA"})}>TIJERA</button>

            <div className="eleccion"> { Eleccion() }</div>
        </div>
        );
    }   


}

export default PPT



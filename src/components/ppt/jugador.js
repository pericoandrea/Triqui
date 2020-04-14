import React from "react"
 
  
function player() {
    
    return (
        <>
            <div className="hogar"></div>
            <div ><a  className="boton-personalizado uno" href="/PPTR">¡UN SOLO JUGADOR!</a>
            </div>  
            <div ><a  className="boton-personalizado multi" href="/multijugador">¡MULTIJUGADOR!</a>
            </div>                   
        </>
    )
}

export default player
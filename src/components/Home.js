import React from "react"
 
  
function Home() {
    
    return (
        <>
            <div className="hogar">
            <h1 className="entrada">Bienvenidos/as!</h1>
            <p className="parrafos">Listo/a para jugar el pasatiempo más emocionante de tu vida?</p>
            <p className="parrafos parrafo1">Are you ready?</p>
            </div>
            <div className="divbot"><a className="boton-personalizado" href="/triqui">¡A Jugar: TRIQUI!</a>
            </div>
            <div className="flecha1"></div>
            <div className="flecha1 flecha2"></div>
            <div className="flecha1 flecha3"></div>

            <div ><a  className="boton-personalizado1" href="/PPTR">¡PIEDRA, PAPEL O TIJERA!</a>
            </div>
                       
        </>
    )
}

export default Home
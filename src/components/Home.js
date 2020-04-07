import React from "react"
import { Link } from "react-router-dom"
//import { Button, IconButton } from '@material-ui/core';
//import PhotoCamera from '@material-ui/icons/PhotoCamera';



function Home() {
    return (
        <>
       <div> 
          <h1>Juega Triqui y pasa esta cuarentena en diversión</h1>
       </div>  
            <div>
                <h2> Lo que debes saber...</h2>
            </div>
     <div>
            <p>Es un juego de lápiz y papel o digital entre dos jugadores: 
                O y X, que marcan los espacios de un tablero de 3×3 alternadamente y gana quien logre 
                rellenar los 3 espacios en serie. Genial !</p>
     </div>   
    
     <div className="imagen">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHu-_3rLSxgdZ3Oa-a1PuHTa-6S9UsGZq_LuXFt9EGw2-dXAui&usqp=CAU" alt="imagen triqui"></img>
     
     <div className="link">     
            <Link to="/triqui"> ¡Juega Aquí!</Link>
         </div>
         <div className="link1">     
            <Link to="/ppt"> ¡Juega piedra papel y tijera!</Link>
         </div>
     <div className="imagen1">     
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXFr9Fhxmc-6ciUz4A2B_WulqPvm9hztCnPsOH_f_FXl01X5G-&usqp=CAU" alt="imagen triqui"></img>
    </div>
    </div>

        </>
    )
}

export default Home
import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <h1>Bienvenidos</h1>
            <Link to="/triqui">Triqui</Link>
        </>
    )
}

export default Home
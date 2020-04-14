import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Triqui/Game";
import Home from "./components/Home";
import PPTR from "./components/ppt/PPTR";
import jugador from "./components/ppt/jugador";
import multijugador from "./components/ppt/multijugador";

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/triqui" component={Game} />
            <Route path="/jugador" component={jugador} />
            <Route path="/PPTR" component={PPTR} />
            <Route path="/multijugador" component={multijugador} />
        </Switch>
    )
}

export default App;
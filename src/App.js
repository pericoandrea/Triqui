import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Triqui/Game";
import Home from "./components/Home";
import PPTR from "./components/ppt/PPTR";
import jugador from "./components/ppt/jugador";
import multijugador from "./components/ppt/multijugador";
import sumar from "./components/suma/sumar";
import Restar from "./components/suma/Restar";
import Restarhook from "./components/suma/Restarhook";
//import hook1 from "./components/suma/hook1";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/triqui" component={Game} />
      <Route path="/jugador" component={jugador} />
      <Route path="/PPTR" component={PPTR} />
      <Route path="/multijugador" component={multijugador} />
      <Route path="/sumar" component={sumar} />
      <Route path="/Restar" component={Restar} />
      <Route path="/Restarhook" component={Restarhook} />
    </Switch>
  );
}

export default App;

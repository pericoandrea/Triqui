import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Triqui/Game";
import Home from "./components/Home";

import GamePpt from "./components/ppt/GamePpt"
import GamePpt1 from "./components/juego2/gameppt1";


function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/triqui" component={Game} />
            <Route path="/ppt" component={GamePpt}/>
            <Route path="/juego2" component={GamePpt1}/>
        </Switch>
    )
}

export default App;
import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Triqui/Game";
import Home from "./components/Home";
import PPTR from "./components/ppt/PPTR";

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/triqui" component={Game} />
            <Route path="/PPTR" component={PPTR} />
        </Switch>
    )
}

export default App;
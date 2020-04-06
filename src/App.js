import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Triqui/Game";
import Home from "./components/Home";

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/triqui" component={Game} />
        </Switch>
    )
}

export default App;
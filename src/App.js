import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Triqui/Game";
import Home from "./components/Home";
import saludo from "./components/ppt/game1"

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/triqui" component={Game} />
            <Route path="/ppt" component={saludo}/>
        
         
        </Switch>
    )
}

export default App;
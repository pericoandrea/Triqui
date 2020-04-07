import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./components/Triqui/Game";
import Home from "./components/Home";
<<<<<<< HEAD
import saludo from "./components/ppt/game1"
=======
import GamePpt from "./components/PPT/GamePpt"
>>>>>>> 22499f56a48847165c36a6b816eff9ed6cf503df

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/triqui" component={Game} />
<<<<<<< HEAD
            <Route path="/ppt" component={saludo}/>
        
         
=======
            <Route path="/ppt" component={GamePpt}/>
>>>>>>> 22499f56a48847165c36a6b816eff9ed6cf503df
        </Switch>
    )
}

export default App;
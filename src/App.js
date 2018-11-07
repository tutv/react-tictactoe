import React, {Component} from 'react'
import Game from "./game/Game"
import "./styles/main.scss"

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Tic tac toe</h1>
                <Game/>
            </div>
        )
    }
}

export default App

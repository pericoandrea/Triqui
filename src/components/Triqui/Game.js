import React, { Component } from "react";
import Board from "./Board";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: [[null,null,null],[null,null,null],[null,null,null]],
          position: [null,null]
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      Descendente: true,
    };
  }

  calculateWinner = (squares) => {
    const lines = [ 
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      [[0,0],[0,1],[0,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]],
      [[0,0],[1,1],[2,2]],
      [[2,0],[1,1],[0,2]]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a[0]][a[1]] &&
          squares[a[0]][a[1]] === squares[b[0]][b[1]] &&
          squares[a[0]][a[1]] === squares[c[0]][c[1]]
        ) {
          return squares[a[0]][a[1]];
        }
     
    }
    return null;
  };

  handleClick(i, j) {
    const { history, stepNumber, xIsNext } = this.state;
    const historia = history.slice(0, stepNumber + 1);
    const current = historia[historia.length - 1]
    const cuadrados = [];
    
    for(let k = 0; k < 3; k++) {
      if(!cuadrados[k]) cuadrados[k] = [];
      for(let l = 0; l < 3; l ++) {
        cuadrados[k][l] =  current.squares[k][l];
      }
    }

    if (this.calculateWinner(cuadrados) || cuadrados[i][j]) {
      return;
    }
    cuadrados[i][j] = xIsNext ? "X" : "O";

    console.log(this.setState.calculateWinner(cuadrados[i][j]));

    this.setState({
      history: historia.concat([
        {
          squares: cuadrados,
          position: [i,j]
        }
      ]),
      stepNumber: historia.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  Ordenar() {
    this.setState({
      Descendente: this.state.Descendente === false
    });
  }

  render() {
    const {history} = this.state;
    const historia = [...history];
    const current = historia[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = historia.map((step, move) => {
      const desc = move ? `Ir al movimiento # ${move} (${step.position[0]},${step.position[1]})` : "Ir al inicio del juego!";
      return (
        <li className="lista" key={move}>
          <button  className="botonlist"  onClick={() => this.jumpTo(move)}>       
          {move === this.state.stepNumber ? <b>{desc}</b> : desc}
          </button>
        </li>
      );
    });
 

    let status;
    if (winner) {
      status = "Ganador: " + winner;
    }      
    else {
      status = "Siguiente Jugador: " + (this.state.xIsNext ? "X" : "O");
    }
    /*console.log(this.state.history.length);*/
    /*Según el console log existe un movimiento más es decir son 10 porque volver al juego es contado como un movimiento */
    if(!winner && this.state.history.length === 10){
      status = "¡Los/as Jugadores/as están empatados/as!";
    }

    if(this.state.move  !== "X" && this.state.move !== "O") 
    {
      
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            position={current.position}
            onClick={(i, j) => this.handleClick(i, j)} 
            winner = {this.calculateWinner(current.squares)}
           
          />
        </div>
        <div className="game-info">
          <div className="ganador">{status}</div>
        
        <div>
          <ol>{this.state.Descendente ? moves : moves.reverse()}</ol>
          <button className="boton_orden" onClick={() => this.Ordenar()}>
            Organizar por: {this.state.Descendente ? "Descendente" : "Ascendente"}
          </button>
        </div>
        </div>
      </div>
    );
    

  }
}

export default Game;

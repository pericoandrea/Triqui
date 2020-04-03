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
      xIsNext: true
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
      if(!cuadrados[k]) cuadrados[k] = []  
      for(let l = 0; l <3; l++) {
        cuadrados[k][l] = current.squares[k][l];
      }
    }
          
    if (this.calculateWinner(cuadrados) || cuadrados[i][j]) {
      return;
    }
    cuadrados[i][j] = xIsNext ? "X" : "O";
    console.log(historia);
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

  render() {
    const {history} = this.state;
    const historia = [...history];
    const current = historia[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = historia.map((step, move) => {
      const desc = move ? `Go to move # ${move} (${step.position[0]},${step.position[1]})` : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            position={current.position}
            onClick={(i, j) => this.handleClick(i, j)} 
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

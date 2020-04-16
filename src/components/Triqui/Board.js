import React from 'react';
import Square from './Square';

class Board extends React.Component {
 
    renderSquare(index,jndex) {
      const {position, ganadores} = this.props;
      /*const cuadroganador = this.props.winner;*/
      return (
        <Square
          key={`s-${index}-${jndex}`}
          cclassName={
            ganadores.map(
              ganador => (
                ganador[0] === index && ganador[1] === jndex) ? 
                  "ganador" 
                : (position[0] === index && position[1] === jndex) ? "square-bold" : null)
          }
          text={this.props.squares[index][jndex]}
          onClickPersonalizado={() => this.props.onClick(index,jndex)}
          /*cuadrowinner = {(cuadroganador) ? "*" : null}*/

        />
      );
    }
  
    render() {
      const cuadrados = this.props.squares;
      
      return (
        <div>
          {cuadrados.map(
            (lineas, k) => (
              <div
                key={`br-${k}`}
                className="board-row">
                {lineas.map((cuadrado, l) => this.renderSquare(k,l))}
              </div>
            )
          )}
        </div>
      );
    }
  }

  export default Board;
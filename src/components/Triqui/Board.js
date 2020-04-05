import React from 'react';
import Square from './Square';

class Board extends React.Component {
 
    renderSquare(index,jndex) {
      const position = this.props.position;
      return (
        <Square
          key={`s-${index}-${jndex}`}
          className={(position[0] === index && position[1] === jndex) ? "square-bold" : null } 
          text={this.props.squares[index][jndex]}
          onClickPersonalizado={() => this.props.onClick(index,jndex)}
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
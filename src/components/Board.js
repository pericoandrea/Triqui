import React from 'react';
import Square from './Square';

class Board extends React.Component {
 
    renderSquare(index,jndex) {
      return (
        <Square 
          text={this.props.squares[index][jndex]}
          onClickPersonalizado={() => this.props.onClick(index,jndex)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0,0)}
            {this.renderSquare(1,0)}
            {this.renderSquare(2,0)}
          </div>
          <div className="board-row">
            {this.renderSquare(0,1)}
            {this.renderSquare(1,1)}
            {this.renderSquare(2,1)}
          </div>
          <div className="board-row">
            {this.renderSquare(0,2)}
            {this.renderSquare(1,2)}
            {this.renderSquare(2,2)}
          </div>
        </div>
      );
    }
  }

  export default Board;
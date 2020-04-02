import React from 'react';

function Square(props){
    return (
      <button
        className="square"
        onClick={props.onClickPersonalizado}
      >
        {props.text}
      </button>
      );
     
}

export default Square;
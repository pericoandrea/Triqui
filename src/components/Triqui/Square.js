import React from 'react';

function Square(props){
    return (
      <button
        className={`square ${props.className}`}
        onClick={props.onClickPersonalizado}
        
      >
        {props.text}
        {props.cuadrowinner}
      </button>
      );
     
}

export default Square;
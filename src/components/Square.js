import React from 'react';

function Square(props){
    return (
        <button className="square" 
        onClick={props.onClick}>
          {props.value}
        </button>
      );
        //Otro comentario
}
export default Square;
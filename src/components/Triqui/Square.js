import React from 'react';

function Square(props){
    return (
      <button
        className={`square ${props.className.map(cssClass => ` ${cssClass} `)}`}
        onClick={props.onClickPersonalizado}
      >
        {props.text}
      </button>
      );
     
}

export default Square;
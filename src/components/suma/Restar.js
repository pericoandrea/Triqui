import React, { useState } from "react";

function Rest(props) {
  const [resultado, setResultado] = useState(0); // valor, función que permite cambiar el valor.
  const [inputNumberone, setInputNumberone] = useState(0);
  const [inputNumbertwo, setInputNumbertwo] = useState(0);

  const handleClick = (event) => {
    setResultado(inputNumberone - inputNumbertwo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Número 1:</label>
        <input
          type="number"
          placeholder="Introduce el primer numero"
          onChange={(e) => setInputNumberone(e.target.value)}
          value={inputNumberone}
        ></input>
      </p>
      <p>
        <label className="letras">Número 2:</label>
        <input
          type="number"
          onChange={(e) => setInputNumbertwo(e.target.value)}
          placeholder="Introduce el segundo numero"
          value={inputNumbertwo}
        ></input>
      </p>
      /<button onClick={handleClick}>restar!</button>
      <p className="letras">La respuesta es: {resultado}</p>
    </form>
  );
}
export default Rest;

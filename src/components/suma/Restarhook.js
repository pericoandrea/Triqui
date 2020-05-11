import React, { useState } from "react";
//import useResta from "./components/suma/Restarhook";

function useResta() {
  const [resultado, setResultado] = useState(0); // valor, función que permite cambiar el valor.
  const [inputNumberone, setInputNumberone] = useState(0);
  const [inputNumbertwo, setInputNumbertwo] = useState(0);

  function handleChange(e) {
    console.log("handleChange", { value: e.target.value, name: e.target.name });
    e.target.name === "numero1"
      ? setInputNumberone(e.target.value)
      : setInputNumbertwo(e.target.value);
  }

  function handleClick(event) {
    setResultado(inputNumberone - inputNumbertwo);
  }
  console.log(resultado);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return {
    handleClick,
    handleSubmit,
    resultado,
    inputNumberone,
    inputNumbertwo,
    handleChange,
  };
}

function Rest() {
  const {
    handleClick,
    resultado,
    inputNumberone,
    inputNumbertwo,
    handleChange,
    handleSubmit,
  } = useResta();

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label className="letras">Número 1:</label>
        <input
          type="number"
          name="numero1"
          placeholder="Introduce el primer numero"
          onChange={handleChange}
          value={inputNumberone}
        ></input>
      </p>
      <p>
        <label className="letras">Número 2:</label>
        <input
          type="number"
          name="numero2"
          onChange={handleChange}
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

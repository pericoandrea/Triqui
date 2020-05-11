import { useState } from "react";

function useResta() {
  const [resultado, setResultado] = useState(0); // valor, función que permite cambiar el valor.
  const [inputNumberone, setInputNumberone] = useState(0);
  const [inputNumbertwo, setInputNumbertwo] = useState(0);
  //const [value, setValue] = useState(0);
  //useEffect(() => {});

  function handleChange(status) {
    setInputNumberone(status.inputNumberone);
    setInputNumbertwo(status.inputNumbertwo);
  }
  function handleClick(event) {
    setResultado(inputNumberone - inputNumbertwo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return {
    handleClick,
    handleSubmit,
    resultado,
    inputNumberone,
    inputNumbertwo,
    handleChange,
  };
}

export default useResta;

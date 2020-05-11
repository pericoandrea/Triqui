import React, { Component } from "react";

class sum extends Component {
  constructor() {
    super();
    this.state = {
      inputNumberone: "",
      inputNumbertwo: "",
      resultado: 0,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log("SETSTATE", this.setState);
    this.setState({
      resultado: this.state.inputNumberone + this.state.inputNumbertwo,
    });

    console.log(this.state.inputNumberone);
    console.log(this.state.inputNumbertwo);
    console.log("RESPUESTA", this.state.resultado);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(event);
  };

  handleSubmit(event) {
    event.preventDefault();
  }
  /*sumar() {
    this.setState.resultado =
      this.state.inputNumberone + this.state.inputNumbertwo;
    console.log(this.state.inputNumberone);
    console.log(this.state.inputNumbertwo);
  }*/

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label className="letras">Número 1:</label>
          <input
            type="number"
            placeholder="Introduce el primer numero"
            onChange={(e) => this.setState({ inputNumberone: e.target.value })}
            value={this.state.inputNumberone}
          ></input>
        </p>
        <p>
          <label className="letras">Número 2:</label>
          <input
            className="form"
            type="number"
            onChange={(e) => this.setState({ inputNumbertwo: e.target.value })}
            placeholder="Introduce el segundo numero"
            value={this.state.inputNumbertwo}
          ></input>
        </p>
        /<button onClick={this.handleClick}>sumar!</button>
        <p className="letras">La respuesta es: {this.state.resultado}</p>
      </form>
    );
  }
}
export default sum;

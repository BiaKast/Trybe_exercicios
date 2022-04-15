import React, { Component } from "react";

class FieldsetEmprego extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: "",
      cargo: "",
      descricao: "",
      boolean: false,
    };
    this.mensagemAlert = this.mensagemAlert.bind(this);
    this.enter = this.enter.bind(this);
    this.leave = this.leave.bind(this);
    this.hnadleChange = this.hnadleChange.bind(this);
  }

  hnadleChange(event) {
    let { name, value } = event.target;
    // if (name === "Nome") value = value.toUpperCase();
    // if (name === "CPF") value = this.validatCpf(value)
    // if (name === "Endereco") value = this.validateAddress(value);
    return this.setState({
      [name]: value,
    });
  }

  enter() {
    console.log("enter");
    return this.setState({
      boolean: true,
    });
  }

  leave() {
    console.log("leave");
    return this.setState({
      boolean: false,
    });
  }

  mensagemAlert() {
    if (this.state.boolean === true) {
      return <span>Preencha com cuidado esta informação.</span>;
    }

    if (this.state.boolean === false) {
      return <span></span>;
    }
  }

  render() {
    return (
      <fieldset>
        <legend> Dados Do seu último emprego</legend>
        <label htmlFor="">
          Resumo do curriculo
          <textarea
            name="curriculo"
            id="curriculo"
            cols="30"
            rows="5"
            maxLength={1000}
            placeholder="Descreva aqui"
            onChange={this.hnadleChange}
          ></textarea>
        </label>
        <label htmlFor="">
          Último cargo
          <textarea
            name="cargo"
            id="cargo"
            cols="30"
            rows="5"
            maxLength={40}
            placeholder="Descreva aqui"
            onMouseEnter={this.enter}
            onMouseLeave={this.leave}
            onChange={this.hnadleChange}
          ></textarea>
          {this.mensagemAlert()}
        </label>
        <label htmlFor="">
          Descrição do cargo:
          <textarea
            name="descricao"
            id="descricao"
            cols="30"
            rows="5"
            maxLength={500}
            placeholder="Descreva aqui"
            onChange={this.hnadleChange}
          ></textarea>
        </label>
      </fieldset>
    );
  }
}

export default FieldsetEmprego;

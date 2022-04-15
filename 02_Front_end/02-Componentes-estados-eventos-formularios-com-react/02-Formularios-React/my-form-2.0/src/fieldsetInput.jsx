import React, { Component } from "react";
import ComboBox from "./ComboBox";
import Input from "./Input";

class FieldsetInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.validatCidade = this.validatCidade.bind(this)
    this.validatCampo = this.validatCampo.bind(this);
    this.state = {
      Nome: "",
      Email: "",
      CPF: "",
      Endereco: "",
      Cidade: "",
      Estado: "",
      radioButton: "",
      required: true,
    };
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === "Nome") value = value.toUpperCase();
    if (name === "CPF") value = this.validatCpf(value)
    if (name === "Endereco") value = this.validateAddress(value);
    // if (value !== "") {
      return this.setState({
        [name]: value,
      });
    // }
    // if (value === "") {
    //   return this.setState({
    //      [name]: "Este campo é obrigatório",
    //    });
    //  }
  }

  validatCampo() {

  }

  validatCpf(cpf) {
    return cpf.replace(/[^0-9$]/g, "")
  }

  validateAddress(endereco) {
    return endereco.replace(/[^\w\s]/gi, "");
  }

  validatCidade () {
    if (this.state.Cidade !== /[^A-z]/gi)
    return this.setState({
      Cidade: ""
    })
  }

  render() {
    const { Nome, CPF, Email, Endereco, Cidade, Estado, } =
      this.state;
      this.validatCampo()
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <Input       
          classe="nome"
          tipo="text"
          name="Nome"
          value={Nome}
          maxCaracter="40"
          handleChange={this.handleChange}
        />
        <Input
          classe="email"
          tipo="email"
          name="Email"
          value={Email}
          maxCaracter="50"
          handleChange={this.handleChange}
        />
        <Input
          classe="cpf"
          tipo="text"
          name="CPF"
          value={CPF}
          maxCaracter="11"
          handleChange={this.handleChange}
        />
        <Input
          classe="endereco"
          tipo="text"
          name="Endereco"
          value={Endereco}
          maxCaracter="200"
          handleChange={this.handleChange}
        />
        <Input
          classe="cidade"
          tipo="text"
          name="Cidade"
          value={Cidade}
          onBlur={this.validatCidade}
          maxCaracter="28"
          handleChange={this.handleChange}
        />
        <ComboBox
          name={"Estado"}
          value={Estado}
          handleChange={this.handleChange}
        />
        <Input
          classe="radioButton"
          tipo="radio"
          name="radioButton"
          value="Casa"
          handleChange={this.handleChange}
          required
        />
        <Input
          classe="radioButton"
          tipo="radio"
          name="radioButton"
          value="Apartamento"
          handleChange={this.handleChange}
          required
        />
      </fieldset>
    );
  }
}

export default FieldsetInput;

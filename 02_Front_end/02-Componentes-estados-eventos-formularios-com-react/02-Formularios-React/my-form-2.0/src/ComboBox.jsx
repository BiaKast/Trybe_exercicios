import React, { Component } from "react";

class ComboBox extends Component {
  render() {
    const {name, handleChange} = this.props
    return (
      <label>
        Estado
        <select name={name} id="uf" onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AM">AM</option>
        <option value="AP">AP</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MG">MG</option>
        <option value="MS">MS</option>
        <option value="MT">MT</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="PR">PR</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="RS">RS</option>
        <option value="RO">RO</option>
        <option value="RR">RR</option>
        <option value="SC">SC</option>
        <option value="SE">SE</option>
        <option value="SP">SP</option>
        <option value="TO">TO</option>
      </select>
      </label>
    );
  }
}

export default ComboBox;

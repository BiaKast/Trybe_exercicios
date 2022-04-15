import React from "react";
import PropTypes from 'prop-types'

class Input extends React.Component {
  render() {
    let { classe, tipo, value, name, maxCaracter, handleChange, onBlur } =
      this.props;
    let nome = name === "radioButton" ? value : name;
    return (
      <label htmlFor="">
        {nome}
        <input
          className={classe}
          type={tipo}
          name={name}
          value={value}
          onBlur={onBlur}
          maxLength={maxCaracter}
          onChange={handleChange}
          required
        ></input>
      </label>
    );
  }
}

Input.propoTypes = {
  value: PropTypes.string.isRequired
}
export default Input;

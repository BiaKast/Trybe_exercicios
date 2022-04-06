import React, { Component } from "react";
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
    // const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div>
        <div>
      <p>{this.props.pokemon.name}</p>
      <p>{this.props.pokemon.type}</p>
      <p>Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
      </div>
        <img src={this.props.pokemon.image} alt={`Imagem do pokemon: ${this.props.pokemon.name}`} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};


export default Pokemon;
import React, { Component } from "react";
import Pokemon from "./pokemon";

class Pokedex extends Component {
  render() {
    return (
      <div className="catalago">
        {this.props.pokemons.map((element) => (
          <Pokemon key={element.id} pokemon={element} />
        ))}
      </div>
    );
  }
}

export default Pokedex;

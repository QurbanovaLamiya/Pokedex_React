import { Component } from "react";

class PokemonCard extends Component {
  render() {
    let { name, type, exp } = this.props;
    return (
      <>
        <div>{name}</div>
        <div>{type}</div>
        <div>{exp}</div>
      </>
    );
  }
}

export default PokemonCard;

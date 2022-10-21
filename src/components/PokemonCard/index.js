import { Component } from "react";
import "./PokemonCard.css";

const Pokemon_Api =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let pokeId = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokemonCard extends Component {
  render() {
    let { name, type, base_experience, id } = this.props;
    let image = `${Pokemon_Api}${pokeId(id)}.png`;
    return (
      <div className="PokeCard">
        <img className="PokeImg" src={image} alt={name} />
        <div className="PokeContent">
          <p className="PokeName">{name}</p>
          <p className="PokeType">Type: {type}</p>
          <p className="PokeExp">EXP: {base_experience}</p>
        </div>
      </div>
    );
  }
}

export default PokemonCard;

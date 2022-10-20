import { Component, Fragment } from "react";
import PokemonCard from "../PokemonCard";

class PokemonContent extends Component {
  render() {
    return (
      <Fragment>
        <div>{this.props.point}</div>
        <div>{this.props.isWinner}</div>
        <div>
          {this.props.team.map((pokemon) => (
            <PokemonCard
              key={`pokemon-id-${pokemon.id}`}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default PokemonContent;

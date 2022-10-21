import { Component, Fragment } from "react";
import PokemonCard from "../PokemonCard";
import "./PokemonContent.css";
import PropTypes from "prop-types";

class PokemonContent extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <p className={this.props.resultColor}>{this.props.isWinner}</p>;
    } else {
      title = <p className={this.props.resultColor}>{this.props.isWinner}</p>;
    }

    return (
      <Fragment>
        <div className="score">
          {title}
          <h4>Total Experience: {this.props.point}</h4>
        </div>
        <div className="gameArea">
          <div className="gameCards">
            {this.props.team.map((pokemon) => (
              <PokemonCard key={`pokemon-id-${pokemon.id}`} {...pokemon} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

PokemonContent.propTypes = {
  isWinner: PropTypes.string,
  resultColor: PropTypes.string,
  point: PropTypes.number,
  team: PropTypes.array,
};

export default PokemonContent;

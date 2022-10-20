import { Component } from "react";
import PokemonContent from "../PokemonContent";
import PokemonData from "../PokemonData";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      data: PokemonData,
      click: false,
      team1: [],
      team2: [],
    };
  }

  changeTeam = () => {
    let randomTeam1 = [];
    let randomTeam2 = [...this.state.data];

    while (randomTeam1.length < randomTeam2.length) {
      let randomNum = Math.floor(Math.random() * randomTeam2.length);
      let newRandom = randomTeam2.splice(randomNum, 1)[0];
      randomTeam1 = [...randomTeam1, newRandom];
    }

    this.setState({ team1: randomTeam1, team2: randomTeam2 });
  };

  render() {
    let teamPoint1 = this.state.team1.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      0
    );
    let teamPoint2 = this.state.team2.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      0
    );

    return (
      <div>
        <PokemonContent
          point={teamPoint1}
          team={this.state.team1}
          isWinner={teamPoint1 > teamPoint2 && "Winner : team1"}
        />
        <button onClick={this.changeTeam}>
          {this.state.click ? "Change Team" : "Start"}
        </button>
        <PokemonContent
          point={teamPoint2}
          team={this.state.team2}
          isWinner={teamPoint2 > teamPoint1 && " Winner : team2"}
        />
      </div>
    );
  }
}

export default Pokemon;

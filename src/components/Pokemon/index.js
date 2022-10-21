import { Component } from "react";
import PokemonContent from "../PokemonContent";
import PokemonData from "../PokemonData";
import "./Pokemon.css";

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

    this.setState({
      team1: randomTeam1,
      team2: randomTeam2,
      click: true,
    });
  };

  render() {
    let teamPoint1 = this.state.team1.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      false
    );
    let teamPoint2 = this.state.team2.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      false
    );

    return (
      <div className="main">
        <h1>Pokedex game</h1>
        <button onClick={this.changeTeam}>
          {this.state.click ? "Change Team" : "Start Game"}
        </button>
        <div className="container">
          {this.state.click && (
            <>
              <PokemonContent
                point={teamPoint1}
                team={this.state.team1}
                isWinner={
                  teamPoint1 > teamPoint2 ? "Team1  Wonn" : " Team1  Lost"
                }
                resultColor={teamPoint1 > teamPoint2 ? "winner" : "lost"}
              />

              <PokemonContent
                point={teamPoint2}
                team={this.state.team2}
                isWinner={
                  teamPoint2 > teamPoint1 ? "Team2  Wonn" : " Team2  Lost"
                }
                resultColor={teamPoint2 > teamPoint1 ? "winner" : "lost"}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Pokemon;

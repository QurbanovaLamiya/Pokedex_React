import { Component, Fragment } from "react";
import PokemonData from "../PokemonData";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      click: false,
      team1: [],
      team2: [],
    };
  }

  changeTeam = () => {
    let randomTeam1 = [];
    let randomTeam2 = [...PokemonData];

    while (randomTeam1.length < randomTeam2.length) {
      let randomNum = Math.floor(Math.random() * randomTeam2.length);
      let newRandom = randomTeam2.splice(randomNum, 1)[0];
      randomTeam1 = [...randomTeam1, newRandom];
    }
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.changeTeam}>
          {this.state.click ? "Change Team" : "Start"}
        </button>
      </Fragment>
    );
  }
}

export default Pokemon;

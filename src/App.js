import { Component, Fragment } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Pokemon />
      </Fragment>
    );
  }
}

export default App;

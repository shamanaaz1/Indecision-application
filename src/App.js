import React, { Component } from "react";
import Modal from "react-modal";
import logo from "./logo.svg";
import "./App.css";
import "normalize.css/normalize.css";
import Indecisionapp from "./components/Indecisionapp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Indecisionapp />
      </div>
    );
  }
}

export default App;

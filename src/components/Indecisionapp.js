import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class Indecisionapp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }

    this.setState(PrevState => ({
      options: PrevState.options.concat([option])
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillMount");
  }

  render() {
    const subtitle = "Put your life in the hands of computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="body">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>

          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  }
}

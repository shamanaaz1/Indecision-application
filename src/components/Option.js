import React from "react";

const Option = props => (
  <div className="option">
    <p className="option_text">
      {props.count}.{props.optionText}
    </p>

    <button
      className="button button__link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;

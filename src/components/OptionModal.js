import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      onRequestClose={props.handleClearSelectedOption}
      className="Modal"
    >
      <h3 className="Modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="Modal__body">{props.selectedOption}</p>
      )}
      <button
        className="Modal__button"
        onClick={props.handleClearSelectedOption}
      >
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;

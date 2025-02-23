/** @format */

import PropTypes from "prop-types";

function Buttons({ onButtonClick }) {
  const buttons = [
    "AC",
    "1",
    "2",
    "C",
    "3",
    "4",
    "5",
    "+",
    "6",
    "7",
    "8",
    "-",
    "9",
    "0",
    "00",
    "*",
    ".",
    "/",
    "%",
    "=",
  ];
  return (
    <div className="buttons-container">
      {buttons.map((button) => (
        <button
          key={button}
          className="button"
          onClick={() => {
            onButtonClick(button);
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Buttons;

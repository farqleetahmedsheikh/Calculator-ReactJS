/** @format */

import PropTypes from "prop-types";

function CalScreen({ displayValue }) {
  return (
    <>
      <input type="text" className="display" value={displayValue} readOnly />
    </>
  );
}

CalScreen.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default CalScreen;

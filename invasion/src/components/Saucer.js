import React from "react";
import PropTypes from "prop-types";
import SaucerBase from "./SaucerBase";
import SaucerTop from "./SaucerTop";

const Saucer = props => {
  return (
    <g>
      <SaucerBase position={props.position} />
      <SaucerTop position={props.position} />
    </g>
  );
};
Saucer.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default Saucer;

import React from "react";
import PropTypes from "prop-types";
import { bezierCurve } from "./../utils/formulas";

const SaucerTop = props => {
  const style = {
    fill: "#b6b6b6",
    stroke: "#7d7d7d"
  };
  const width = 40,
    height = 25;
  const curve = {
    startPoint: {
      x: props.position.x - width / 2,
      y: props.position.y
    },
    firstControlPoint: {
      x: width / 4,
      y: -1 * height
    },
    secondControlPoint: {
      x: (width / 4) * 3,
      y: -1 * height
    },
    endPoint: {
      x: width,
      y: 0
    }
  };
  return <path d={bezierCurve(curve)} style={style} />;
};
SaucerTop.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};
export default SaucerTop;

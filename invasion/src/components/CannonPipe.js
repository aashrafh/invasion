import React from "react";
import { bezierCurve } from "./../utils/formulas";
import PropTypes from "prop-types";
const CannonPipe = props => {
  const style = {
    fill: "#999",
    stroke: "#666",
    strokeWidth: "2px"
  };
  const width = 40,
    height = 100;
  const curve = {
    startPoint: {
      x: width / -2,
      y: -0.7 * height
    },
    firstControlPoint: {
      x: -1 * width,
      y: 1.7 * height
    },
    secondControlPoint: {
      x: 2 * width,
      y: 1.7 * height
    },
    endPoint: {
      x: width,
      y: 0
    }
  };
  const transform = `rotate(${props.angle}, 0, 0)`;
  return (
    <g transform={transform}>
      <path d={bezierCurve(curve)} style={style} />
      <line
        x1={width / -2}
        y1={-0.7 * height}
        x2={width / 2}
        y2={-0.7 * height}
        style={style}
      />
    </g>
  );
};
CannonPipe.propTypes = {
  angle: PropTypes.number.isRequired
};
export default CannonPipe;

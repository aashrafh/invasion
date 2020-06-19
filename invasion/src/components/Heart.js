import React from "react";
import PropTypes from "prop-types";
import { bezierCurve } from "./../utils/formulas";

const Heart = props => {
  const style = {
    fill: "#da0d15",
    stroke: "#a51708",
    strokeWidth: "2px"
  };
  const leftCurve = {
    startPoint: {
      x: props.position.x,
      y: props.position.y
    },
    firstControlPoint: {
      x: -20,
      y: -20
    },
    secondControlPoint: {
      x: -40,
      y: 10
    },
    endPoint: {
      x: 0,
      y: 40
    }
  };

  const rightCurve = {
    startPoint: {
      x: props.position.x,
      y: props.position.y
    },
    firstControlPoint: {
      x: 20,
      y: -20
    },
    secondControlPoint: {
      x: 40,
      y: 10
    },
    endPoint: {
      x: 0,
      y: 40
    }
  };
  return (
    <g filter="url(#shadow)">
      <path d={bezierCurve(leftCurve)} style={style} />
      <path d={bezierCurve(rightCurve)} style={style} />
    </g>
  );
};
Heart.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};
export default Heart;

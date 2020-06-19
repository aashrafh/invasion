import React from "react";
import { textWidth } from "./../utils/constants";
import PropTypes from "prop-types";

const StartButton = props => {
  const button = {
    x: textWidth / -2,
    y: -280,
    width: textWidth,
    height: 200,
    rx: 10,
    ry: 10,
    style: {
      fill: "transparent",
      cursor: "pointer"
    },
    onClick: props.onClick
  };
  const text = {
    textAnchor: "middle",
    x: 0,
    y: -150,
    style: {
      fontFamily: '"Droid Sans", cursive',
      fontSize: 60,
      fill: "#e3e3e3",
      cursor: "pointer"
    },
    onClick: props.onClick
  };
  return (
    <g filter="url(#shadow">
      <rect {...button} />
      <text {...text}>Tap To Protect The Earth!</text>
    </g>
  );
};

StartButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default StartButton;

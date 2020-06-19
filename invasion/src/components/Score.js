import React from "react";
import PropTypes from "prop-types";

const Score = props => {
  const style = {
    fontFamily: '"Droid Sans", cursive',
    fontSize: 80,
    fill: "#d6d33e"
  };
  return (
    <g filter="url(#shadow)">
      <text x="300" y="80" style={style}>
        {props.score}
      </text>
    </g>
  );
};
Score.propTypes = {
  score: PropTypes.number.isRequired
};
export default Score;

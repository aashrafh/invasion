import React from "react";
import PropTypes from "prop-types";

const Bomb = props => {
  const style = {
    fill: "#777",
    stroke: "#444",
    strokeWidth: "2px"
  };
  const radius = 16;
  return (
    <ellipse
      cx={props.position.x}
      cy={props.position.y}
      rx={radius}
      ry={radius}
      style={style}
    />
  );
};
Bomb.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};
export default Bomb;

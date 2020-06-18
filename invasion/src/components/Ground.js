import React from "react";
import { width } from "./../utils/constants";
const Ground = () => {
  const style = {
    fill: "#59a941"
  };
  const height = 100;
  const separator = {
    stroke: "#458232",
    strokeWidth: "3px"
  };
  return (
    <g id="ground">
      <rect
        id="ground-base"
        data-name="ground"
        x={width / -2}
        y={0}
        width={width}
        height={height}
        style={style}
      />
      <line x1={width / -2} y1={0} x2={width / 2} y1={0} style={separator} />
    </g>
  );
};
export default Ground;

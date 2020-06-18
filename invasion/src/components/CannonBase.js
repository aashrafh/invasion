import React from "react";
import { bezierCurve } from "./../utils/formulas";

const CannonBase = () => {
  const style = {
    fill: "#a16012",
    stroke: "#75450e",
    strokeWidth: "2px"
  };
  const width = 80,
    height = 60;
  const curve = {
    startPoint: {
      x: width / -2,
      y: height
    },
    firstControlPoint: {
      x: width / 4,
      y: -1 * height
    },
    secondControlPoint: {
      x: (width * 3) / 4,
      y: -1 * height
    },
    endPoint: {
      x: width,
      y: 0
    }
  };
  return (
    <g>
      <path d={bezierCurve(curve)} style={style} />
      <line
        x1={width / -2}
        y1={height}
        x2={width / 2}
        y2={height}
        style={style}
      />
    </g>
  );
};
export default CannonBase;

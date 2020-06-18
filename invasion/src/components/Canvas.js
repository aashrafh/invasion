import React from "react";
import Sky from "./Sky";
const Canvas = () => {
  const style = {
    border: "1px solid black"
  };
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ];
  return (
    <svg
      style={style}
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
      id="game-canvas"
    >
      <Sky />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};
export default Canvas;

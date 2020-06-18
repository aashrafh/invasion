import React from "react";

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
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};
export default Canvas;

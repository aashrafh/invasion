import React from "react";
import { width } from "./../utils/constants";
const Sky = () => {
  const style = {
    fill: "#87CEFA"
  };
  const height = 1200;
  return (
    <rect
      x={width / -2}
      y={100 - height}
      width={width}
      height={height}
      style={style}
    />
  );
};
export default Sky;

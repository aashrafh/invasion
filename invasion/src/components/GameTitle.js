import React from "react";
import { bezierCurve } from "./../utils/formulas";

const GameTitle = () => {
  const style = {
    fontFamily: '"Droid Sans", cursive',
    fontSize: 80,
    fill: "#cbca62"
  };
  const invasionCurve = {
    startPoint: {
      x: -190,
      y: -950
    },
    firstControlPoint: {
      x: 95,
      y: -50
    },
    secondControlPoint: {
      x: 285,
      y: -50
    },
    endPoint: {
      x: 380,
      y: 0
    }
  };
  const protectTheEarthCurve = {
    ...invasionCurve,
    startPoint: {
      x: -250,
      y: -780
    },
    firstControlPoint: {
      x: 125,
      y: -90
    },
    secondControlPoint: {
      x: 375,
      y: -90
    },
    endPoint: {
      x: 500,
      y: 0
    }
  };
  return (
    <g filter="url(#shadow)">
      <defs>
        <path id="InvasionCurve" d={bezierCurve(invasionCurve)} />
        <path id="ProtectTheEarthCurve" d={bezierCurve(protectTheEarthCurve)} />
      </defs>
      <text style={style}>
        <textPath xlinkHref="#InvasionCurve">Invasion</textPath>
      </text>
      <text style={style}>
        <textPath xlinkHref="#ProtectTheEarthCurve">Protect Earth!</textPath>
      </text>
    </g>
  );
};
export default GameTitle;

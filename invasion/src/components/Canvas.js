import React from "react";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from "./CannonPipe";
import CannonBase from "./CannonBase";
import Bomb from "./Bomb";
import Score from "./Score";
import Saucer from "./Saucer";
import Heart from "./Heart";
import PropTypes from "prop-types";
const Canvas = props => {
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
      onMouseMove={props.trackMouse}
      id="game-canvas"
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe angle={props.angle} />
      <CannonBase />
      <Bomb position={{ x: 0, y: -100 }} />
      <Score score={15} />
      <Saucer position={{ x: -150, y: -300 }} />
      <Saucer position={{ x: 150, y: -300 }} />
      <Heart position={{ x: -300, y: 15 }} />
    </svg>
  );
};
Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
};
export default Canvas;

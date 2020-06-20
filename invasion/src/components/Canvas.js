import React from "react";
import GameTitle from "./GameTitle";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from "./CannonPipe";
import CannonBase from "./CannonBase";
import Bomb from "./Bomb";
import Score from "./Score";
import Saucer from "./Saucer";
import Heart from "./Heart";
import StartButton from "./StartButton";
import PropTypes from "prop-types";
const Canvas = props => {
  const style = {
    border: "1px solid black"
  };
  const gameHight = 1200;
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHight,
    window.innerWidth,
    gameHight
  ];
  const lives = [];
  for (let i = 0; i < props.gameState.lives; i++) {
    const heart = {
      x: -180 - i * 70,
      y: 35
    };
    lives.push(<Heart position={heart} key={i} />);
  }
  return (
    <svg
      style={style}
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
      onMouseMove={props.trackMouse}
      onClick={props.shoot}
      id="game-canvas"
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      {props.gameState.bombs.map(bomb => (
        <Bomb key={bomb.id} position={bomb.position} />
      ))}
      <CannonPipe angle={props.angle} />
      <CannonBase />
      {!props.gameState.start && (
        <g>
          <StartButton onClick={() => props.startGame()} />
          <GameTitle />
        </g>
      )}
      <Score score={15} />
      {props.gameState.currentSaucers.map(saucer => (
        <Saucer key={saucer.id} position={saucer.position} />
      ))}
      {lives}
    </svg>
  );
};
Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  gameState: PropTypes.shape({
    start: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    currentSaucers: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired
        }).isRequired,
        id: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired,
  shoot: PropTypes.func.isRequired
};
export default Canvas;

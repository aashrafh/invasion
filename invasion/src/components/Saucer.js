import React from "react";
import PropTypes from "prop-types";
import SaucerBase from "./SaucerBase";
import SaucerTop from "./SaucerTop";
import styled, { keyframes } from "styled-components";
const gameHeight = 1200;
const moveVertically = keyframes`
0% {
  transform: translateY(0);
}
100% {
  transfrom: translateY(${gameHeight}px);
}
`;
const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`;
const Saucer = props => {
  return (
    <Move>
      <SaucerBase position={props.position} />
      <SaucerTop position={props.position} />
    </Move>
  );
};
Saucer.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default Saucer;

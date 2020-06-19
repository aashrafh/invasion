import React, { Component } from "react";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";
import { calculateCanvasPosition } from "./utils/formulas";
class App extends Component {
  componentDidMount() {
    this.resizeTheWindow();
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }
  resizeTheWindow = () => {
    window.onresize = () => {
      const canvas = document.getElementById("game-canvas");
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  };
  trackMouse(e) {
    this.canvasMousePosition = calculateCanvasPosition(e);
  }
  render() {
    return (
      <div className="App">
        <Canvas
          angle={this.props.angle}
          startGame={this.props.startGame}
          gameState={this.props.gameState}
          trackMouse={e => {
            this.trackMouse(e);
          }}
        />
      </div>
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
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
  }).isRequired
};
export default App;

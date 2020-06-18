import React, { Component } from "react";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";
import { calculateCanvasPosition } from "./utils/formulas";
class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }
  trackMouse(e) {
    this.canvasMousePosition = calculateCanvasPosition(e);
  }
  render() {
    return (
      <div className="App">
        <Canvas
          angle={this.props.angle}
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
  moveObjects: PropTypes.func.isRequired
};
export default App;

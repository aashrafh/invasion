import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h>{this.props.message}</h>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
};
export default App;

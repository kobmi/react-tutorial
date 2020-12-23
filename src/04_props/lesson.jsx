import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = ({ counter, func, number, string }) => {
  console.log(counter, func, string, number);
  return <h1>{`Counter component. Counter value: ${counter}`}</h1>;
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  func: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string
};

Counter.defaultProps = {
  func: () => {},
  number: 0,
  string: ""
};

class Lesson extends Component {
  state = {
    counter: 0
  };

  addCounter = () => {
    this.setState(({ counter }) => ({ counter: ++counter }));
  };
  subtractCounter = () => {
    this.setState(({ counter }) => ({ counter: --counter }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="container">
        <h3>{counter}</h3>
        <Counter counter={counter} />
        <button className="btn btn-danger" onClick={this.subtractCounter}>
          Counter -
        </button>
        <button className="btn btn-success" onClick={this.addCounter}>
          Counter +
        </button>
      </div>
    );
  }
}

export default Lesson;

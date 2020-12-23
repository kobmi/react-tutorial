import React, { Component } from "react";

const Lesson = () => {
  return <CounterButton />;
};

const Counter = ({ counter }) => {
  return <h1>{`Counter component. Counter value: ${counter}`}</h1>;
};

class CounterButton extends Component {
  state = {
    counter: 0,
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
        <Counter counter={counter} func={() => {}} string="" number={0} />
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

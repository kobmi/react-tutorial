import React, { Component } from "react";
import PropTypes from "prop-types";

// PropTypes

// // Node:
// Component.propTypes = {
//   node: PropTypes.node
// };

// // Element:
// Component.propTypes = {
//   elem: PropTypes.element
// };

// Instance Of:
// Component.propTypes = {
//   instance: PropTypes.instanceOf(Constructor),
// };

// // One of:
// Component.propTypes = {
//   elem: PropTypes.oneOf("va1", "val2")
// };

// // One of type:
// Component.propTypes = {
//   elem: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// };

// // Array of/ Object of:
// Component.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string),
//   object: PropTypes.objectOf(PropTypes.object)
// };

// // Shape:
// Component.propTypes = {
//   obj: PropTypes.shape({
//     color: PropTypes.string,
//     fotSize: PropTypes.number,
//     lineHeight: PropTypes.number
//   })
// };

// ================================================================

export const Counter = ({ counter = 0 }) => {
  return <h1>{`Counter component. Counter value: ${counter}`}</h1>;
};

export const Button = () => {
  return <button className="btn btn-secondary">Simple Button</button>;
};

export class Lesson extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static defaultProps = {
    children: null
  };

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
    const { children, child } = this.props;
    return (
      <div className="container">
        {child}
        <h3>{counter}</h3>
        {React.cloneElement(children, { counter: counter })}
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

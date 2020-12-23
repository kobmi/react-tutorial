import React, { Component } from "react";
import PropTypes from "prop-types";

const MyLink = ({ label, onClick }) => {
  return (
    <a href="/test" onClick={onClick}>
      {label}
    </a>
  );
};

MyLink.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

MyLink.defaultProps = {
  label: "link",
  onClick: () => {}
};

class App extends Component {
  hadnleClick = (e) => {
    e.preventDefault();
    console.log("cliсked");
  };

  render() {
    return (
      <div className="container">
        <MyLink onClick={this.hadnleClick} label="Some Link" />
      </div>
    );
  }
}

export default App;

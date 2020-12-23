import React, { Component } from "react";

const ValidationMsg = ({ val }) => {
  if (val > 10) {
    return <h4>{`Value > 10: ${val}`}</h4>;
  } else {
    return <h4>{`Value < 10: ${val}`}</h4>;
  }
};

const Tab1 = () => {
  return <h2>Text of tab 1</h2>;
};
const Tab2 = () => {
  return <h2>Text of tab 2</h2>;
};
const Tab3 = () => {
  return <h2>Text of tab 3</h2>;
};

class App extends Component {
  state = {
    activeTab: 1
  };

  handleClick = (e) => {
    this.setState({ activeTab: +e.target.getAttribute("data-name") });
  };

  render() {
    const value = 10;
    console.log(this.state);
    const { activeTab } = this.state;
    return (
      <div className="container">
        <ValidationMsg val={12} />
        {true ? <h4>true</h4> : <h4>false</h4>}
        {value && <h4>We have value</h4>}

        <button
          data-name={1}
          className="btn btn-success mr-2"
          onClick={this.handleClick}
        >
          Tab 1
        </button>
        <button
          data-name={2}
          className="btn btn-success mr-2"
          onClick={this.handleClick}
        >
          Tab 2
        </button>
        <button
          data-name={3}
          className="btn btn-success mr-2"
          onClick={this.handleClick}
        >
          Tab 3
        </button>
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
      </div>
    );
  }
}

export default App;

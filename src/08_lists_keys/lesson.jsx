import React, { Component } from "react";

const Tab1 = () => {
  return <h2>Text of tab 1</h2>;
};
const Tab2 = () => {
  return <h2>Text of tab 2</h2>;
};
const Tab3 = () => {
  return <h2>Text of tab 3</h2>;
};

const people = ["sergey", "alex", "mary", "saha"];

const TABS_BTN = [
  {
    dataName: 1,
    title: "Tab 1",
    className: "btn btn-success mr-2"
  },
  {
    dataName: 2,
    title: "Tab 2",
    className: "btn btn-success mr-2"
  },
  {
    dataName: 3,
    title: "Tab 3",
    className: "btn btn-success mr-2"
  }
];

class App extends Component {
  state = {
    activeTab: 1
  };

  handleTab = (e) => {
    this.setState({ activeTab: +e.target.getAttribute("data-name") });
  };

  render() {
    const value = 10;
    console.log(this.state);
    const { activeTab } = this.state;
    return (
      <div className="container">
        {TABS_BTN.map(({ title, dataName, className }) => {
          return (
            <button
              key={dataName}
              onClick={this.handleTab}
              data-name={dataName}
              className={className}
            >
              {title}
            </button>
          );
        })}
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        <div>
          {`Avtive tab is: ${
            activeTab === 1 ? "first" : activeTab === 2 ? "second" : "third"
          }`}
        </div>
        <div>
          <h3>People:</h3>
          <ul>
            {people.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

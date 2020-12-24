import React, { Component } from "react";

const App = () => {
  return (
    <div className="container">
      <Form />
    </div>
  );
};

const SELECT_OPTIONS = [
  {
    value: "Back-end developer",
    label: "Back-end developer",
    id: 1
  },
  {
    value: "Front-end developer",
    label: "Front-end developer",
    id: 2
  },
  {
    value: "Full-stack developer",
    label: "Full-stack developer",
    id: 3
  }
];

class Form extends Component {
  state = {
    inputText: "",
    textareaText: "",
    selectText: "",
    data: [
      {
        name: "",
        text: "",
        position: "",
        id: null
      }
    ]
  };

  // handleInputChange = ({ target: { value } }) =>
  //   this.setState({ inputText: value });

  // handleTextAreaChange = ({ target: { value } }) =>
  //   this.setState({ textareaText: value });

  // handleSelectChange = ({ target: { value } }) =>
  //   this.setState({ selectText: value });

  // REFS
  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value
    });
  };

  handleShowData = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;

    this.setState(({ data }) => ({
      inputText: "",
      textareaText: "",
      selectText: "",
      data: [
        ...data,
        {
          name: inputText,
          text: textareaText,
          position: selectText,
          id: Math.floor(Math.random() * 1000)
        }
      ]
    }));
  };

  render() {
    const { inputText, textareaText, selectText, data } = this.state;
    return (
      <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            ref={this.inputRef}
            className="form-control"
            type="text"
            placeholder="John"
            value={inputText}
            onChange={this.handleChange}
          />
          <div className="mb-3">
            <label htmlFor="text">Text:</label>
            <textarea
              ref={this.textareaRef}
              className="form-control"
              name="text"
              id="text"
              value={textareaText}
              onChange={this.handleChange}
              placeholder="Some text"
            ></textarea>
          </div>
          <div className="mb-3">
            <button onClick={this.handleShowData} className="btn btn-success">
              Submit
            </button>
          </div>
          <div className="mb-3">
            <select
              ref={this.selectRef}
              className="form-select"
              onChange={this.handleChange}
              value={selectText}
            >
              {SELECT_OPTIONS.map(({ value, id, label }) => (
                <option key={id} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h4>Output:</h4>

            {data.map(({ name, text, position, id }) => {
              return (
                <div key={id}>
                  <h3>{name}</h3>
                  <h3>{text}</h3>
                  <h3>{position}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    );
  }
}

export default App;

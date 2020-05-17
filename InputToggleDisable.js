import React from "react";

class Tester extends React.Component {
  state = {
    disabled1: true,
    disabled2: false,
    text1: "",
    text2: ""
  };

  disable1 = () => {
    this.setState({ disabled1: false, disabled2: true, text2: "" });
  };
  disable2 = () => {
    this.setState({ disabled1: true, disabled2: false, text1: "" });
  };
  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div onClick={this.disable1}>
          <input
            type="text"
            placeholder="Input Field 1"
            name="text1"
            onChange={this.changeInput}
            value={this.state.text1}
            disabled={this.state.disabled1}
          />
        </div>
        <div onClick={this.disable2}>
          <input
            type="text"
            placeholder="Input Field 2"
            name="text2"
            onChange={this.changeInput}
            value={this.state.text2}
            disabled={this.state.disabled2}
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Tester;

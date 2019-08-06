import React from "react";

class App extends React.Component {
  state = { num: 0 };

  constructor(props) {
    super(props);
    this.state.num = props.start;
  }

  addFunc = () => {
    this.setState(
      {
        num: parseInt(this.state.num, 10) + 1
      },
      function() {
        console.log(this.state.num);
      }
    );
  };

  render() {
    return (
      <div>
        <h2>
          test <span> Counter = {this.state.num}</span>{" "}
        </h2>
        <button onClick={this.addFunc}>test</button>
      </div>
    );
  }
}

export default App;

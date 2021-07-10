import React, { Component } from "react";

class Home extends Component {
  state = {
    name: "state",
    age: 15,
  };
  render() {
    return (
      <div>
        homee234 e<h1>{this.props.name}</h1>
        <h1>
          {this.state.name} : {this.state.age}
        </h1>
      </div>
    );
  }
}

export default Home;

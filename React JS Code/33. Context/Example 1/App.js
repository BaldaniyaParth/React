import React, { Component } from "react";
import User from "./User";
export default class App extends Component {
  state = {
    name: "Parth"
  };

  render() {
    return <User naam={this.state.name} />;
  }
}

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Controlled by React</h2>
          <input type="text" />
          <br />
          <br />
          <input type="text" value="ValueParth" />
          <br />
          <br />
          <input type="text" defaultValue="DefaultValueParth" />
        </form>
      </div>
    );
  }
}

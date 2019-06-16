import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./vk-feed/title";
import Content from "./vk-feed/content";
import Like from "./vk-feed/like";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Title />
        <Content />
        <Like />
      </div>
    );
  }
}

export default App;

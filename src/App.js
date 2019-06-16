import React, { Component } from "react";
import "./App.css";
import Title from "./vk-feed/title";
import Content from "./vk-feed/content";
import Like from "./vk-feed/like";
import Comments from "./vk-feed/comments";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Title />
        <Content />
        <Like />
        <hr />
        <Comments />
      </div>
    );
  }
}

export default App;

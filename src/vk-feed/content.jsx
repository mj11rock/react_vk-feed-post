import React, { Component } from "react";
import postImg from "./postImg.jpg";

class Content extends Component {
  state = {
    discription: "hello VK!"
  };
  render() {
    return (
      <div className="post-content">
        <div className="discription">{this.state.discription}</div>
        <img src={postImg} alt="" />

        <hr />
      </div>
    );
  }
}

export default Content;

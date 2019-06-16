import React, { Component } from "react";
import postImg from "./postImg.jpg";

class Content extends Component {
  state = {
    discription: "Hello VK!"
  };
  render() {
    return (
      <div className="post-content">
        <div className="discription">{this.state.discription}</div>
        <img src={postImg} alt="" />
      </div>
    );
  }
}

export default Content;

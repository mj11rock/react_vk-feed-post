import React, { Component } from "react";

import commBtn from "./commentsButton.svg";
import replyBtn from "./replyButton.svg";
import views from "./viewIcon.svg";

class Like extends Component {
  state = {
    viewAmount: "1.3k",
    likeAmount: 133,
    commAmount: 23,
    replyAmount: 2
  };
  render() {
    return (
      <div className="like">
        <div className="icons">
          <div className="like-btn like-icon icon" />
          <div className="num-setting">{this.state.likeAmount}</div>
          <div className="like-btn comment-icon icon" />
          <div className="num-setting">{this.state.commAmount}</div>
          <div className="like-btn reply-icon icon" />
          <div className="num-setting">{this.state.replyAmount}</div>
        </div>
        <div className="views">
          <div className="num-setting view-icon">{this.state.viewAmount}</div>
        </div>
      </div>
    );
  }
}

export default Like;

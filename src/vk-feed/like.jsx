import React, { Component } from "react";
import likeBtn from "./likeButton.svg";
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
        <div className="svg">
          <img src={likeBtn} className="like-btn" alt="" />
          <div className="num">{this.state.likeAmount}</div>
          <img src={commBtn} className="like-btn" alt="" />
          <div className="num">{this.state.commAmount}</div>
          <img src={replyBtn} className="like-btn" alt="" />
          <div className="num">{this.state.replyAmount}</div>
        </div>
        <div className="views">
          <img src={views} alt="" />
          <div className="num">{this.state.viewAmount}</div>
        </div>
      </div>
    );
  }
}

export default Like;

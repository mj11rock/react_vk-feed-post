import React, { Component } from "react";
import arrowIcon from "./arrow.svg";
import profilePic from "./profilePic.jpg";
import likeIcon from "./likeIcon.svg";
import sendIcon from "./send.svg";
class Comments extends Component {
  state = {
    choice: ["Most interesting", "Oldest", "Newest"],
    likeAmount: "2",
    comDate: "one hour ago"
  };
  render() {
    return (
      <div className="reply-wrap">
        <div className="other-comm">
          <div className="options">
            <span className="choice">{this.state.choice[0]}</span>
            <span className="interes-icon" />
          </div>
          <LastCom />
          <div className="show">"function to load all comms"</div>
        </div>
        <div className="leave-com">
          <div className="profPic">
            <img src={profilePic} alt="" />
          </div>
          <div className="text-area">
            <input type="text" placeholder="Leave a comment..." />
            <div className="file-attach" />
            <div className="pic-attach" />
            <div className="emoji-attach" />
          </div>
        </div>
      </div>
    );
  }
}
class LastCom extends Component {
  state = {};
  render() {
    return (
      <div className="last-com">
        <img src={profilePic} alt="" />
        <div className="com-content">
          <div className="com-author">
            <a href="">Islombek Salimov</a>
            <div className="delete">
              <span className="delete-icon" />
            </div>
          </div>
          <div className="com-text">Awesome</div>
          <div className="com-footer">
            <div className="like-com">
              <div className="footer-like-icon">
                <span className="com-like-icon" />
              </div>
              <div className="like-amount">{this.state.likeAmount}</div>
            </div>
            <div className="com-date">One hour ago</div>
            <div className="reply">
              <a href="">reply</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;

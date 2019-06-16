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
      <div>
        <div className="other-comm">
          <div className="options">
            <span>{this.state.choice[0]}</span>
            <span>
              <img src={arrowIcon} alt="" />
            </span>
          </div>
          <LastCom />
          <div className="show">function to load all comms</div>
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
          <div className="send">
            <img src={sendIcon} alt="" />
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
            <div className="delete">
              <span className="delete-icon">report</span>
            </div>
          </div>
          <div className="com-text">Awesome</div>
          <div className="com-footer">
            <div className="like-com">
              <div className="like-icon">
                <img src={likeIcon} alt="" />
              </div>
              <div className="like-amount">{this.state.likeAmount}</div>
            </div>
            <div className="com-date">{this.state.comDate}</div>
            <div className="reply">reply</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;

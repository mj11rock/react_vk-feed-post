import React, { Component } from "react";
import profilePic from "./profilePic.jpg";
class Title extends Component {
  state = {
    ownerName: "Islombek Salimov",
    postDate: "20 min"
  };
  render() {
    return (
      <div>
        <div className="owner-img">
          <a href="">
            <img src={profilePic} alt="" />
          </a>
        </div>
        <div className="owner-name">
          <a href="#">{this.state.ownerName}</a>
        </div>
        <div className="posted-date">
          <a href="#">{this.state.postDate}</a>
        </div>
      </div>
    );
  }
}

export default Title;
/*
<div className="actions-list">
          <ul>
            <li>Hide this post</li>
            <li>Save to Bookmarks</li>
            <li>Report</li>
            <li>Notify about posts</li>
          </ul>
        </div>

*/

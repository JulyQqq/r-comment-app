import React, { Component } from "react";
import CommentInput from "./CommentInput";
// import Comment from './Comment'
import CommentList from "./CommentList";

class CommentApp extends Component {
  constructor() {
    this.state = {
      commentList: []
    };
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.commentList} />
      </div>
    );
  }
  handleSubmitComment = comment => {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");
    console.log(comment);
    this.setState({ commentList: [...this.state.commentList, comment] });
  };
}

export default CommentApp;

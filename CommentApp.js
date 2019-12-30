import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends Component {
  constructor() {
    this.state = {
      commentList: []
    };
  }
  componentWillMount() {
    this._loadComments();
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList
          comments={this.state.commentList}
          onDeleteComment={this.handleDelete}
        />
      </div>
    );
  }
  _saveComments() {
    localStorage.setItem("comments", JSON.stringify(this.state.commentList));
  }
  _loadComments() {
    const comments = localStorage.getItem("comments");
    if (comments) {
      this.setState({ commentList: JSON.parse(comments) });
    }
  }
  handleSubmitComment = comment => {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");
    console.log(comment);
    const comments = this.state.commentList;
    comments.push(comment);
    this.setState({ commentList: comments });
    this._saveComments();
  };
  handleDelete = index => {
    const { commentList } = this.state;
    commentList.splice(index, 1);
    this.setState({ commentList });
    this._saveComments();
  };
}

export default CommentApp;

import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };
  render() {
    const {comments} = this.props;
    return (
      <div>
        {comments.map((ele, i) => (
          <Comment comment={ele} key={i} />
        ))}
      </div>
    );
  }
}

export default CommentList;

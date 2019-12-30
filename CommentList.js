import React, { Component } from "react";
import Comment from "./Comment";
import PropTypes from 'prop-types'

class CommentList extends Component {
  static propTypes={
    comments:PropTypes.array,
    onDeleteComment:PropTypes.func
  }
  static defaultProps = {
    comments: []
  };
  render() {
    const {comments} = this.props;
    return (
      <div>
        {comments.map((ele, i) => (
          <Comment comment={ele} key={i} index={i} index={i} onDeleteComment={this.handleDeleteComment} />
        ))}
      </div>
    );
  }
  handleDeleteComment=(index)=>{
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
}

export default CommentList;

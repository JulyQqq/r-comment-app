import React, { Component } from "react";

class CommentInput extends Component {
  constructor() {
    this.state = {
      username: "",
      content: ""
    };
  }
  render() {
    const { username, content } = this.state;
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input value={username} onChange={this.handleUser} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea vaule={content} onChange={this.handleCon} />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
  handleUser = e => {
    this.setState({ username: e.target.value });
  };
  handleCon = e => {
    this.setState({ content: e.target.value });
  };
  handleSubmit=()=>{
    if(this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({username,content})
    }
    this.setState({content:''})
  }
}

export default CommentInput;

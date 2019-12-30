import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentInput extends Component {
  constructor() {
    this.state = {
      username: "",
      content: ""
    };
  }
  componentWillMount() {
    this._loadUsername();
  }
  componentDidMount() {
    this.textarea.focus();
  }
  render() {
    const { username, content } = this.state;
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={username}
              onChange={this.handleUser}
              onBlur={this.handleBlur}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              value={content}
              onChange={this.handleCon}
              ref={textarea => (this.textarea = textarea)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
  _saveUsername(username) {
    localStorage.setItem("username", username);
  }
  _loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({ username });
    }
  }
  handleUser = e => {
    this.setState({ username: e.target.value });
  };

  handleBlur = e => {
    this._saveUsername(e.target.value);
  };
  handleCon = e => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = () => {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content,createdTime:new Date() });
    }
    this.setState({ content: "" });
  };
}

CommentInput.propTypes = {
  onSubmit: PropTypes.func
};
export default CommentInput;

import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentApp from './CommentApp'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return <CommentApp />
  }
}

render(<App />, document.getElementById('root'));

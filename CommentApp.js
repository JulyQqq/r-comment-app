import React,{Component} from 'react'
import CommentInput from './CommentInput'
// import Comment from './Comment'
import CommentList from './CommentList'


class CommentApp extends Component{
  render(){
    return(
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList />
      </div>
    )
  }
  handleSubmitComment=(comment)=>{
    console.log(comment)
  }
}

export default CommentApp
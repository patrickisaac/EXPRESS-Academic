import React from 'react'


class CommentSection extends React.Component {
  render() {
    const commentList = this.props.comments.map((comment, id) => {
      return <li key={id}>"{comment.comment}"</li>
    })
    return (
      <div className='comment__container'> 
        <h3>COMMENTS</h3>
        <ul>
          <i>{commentList}</i>
        </ul>
      </div>
    )
  }
}


export default CommentSection
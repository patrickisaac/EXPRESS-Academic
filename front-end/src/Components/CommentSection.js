import React from 'react'


class CommentSection extends React.Component {
  render() {
    const commentList = this.props.comments.map((comment, id) => {
      return <li key={id}>{comment.comment}</li>
    })
    return (
      <div>
        <ul>
          <i>{commentList}</i>
        </ul>
      </div>
    )
  }
}


export default CommentSection
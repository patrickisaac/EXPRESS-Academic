import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Buttons/styles.css'

class BookNowBtn extends React.Component {
  render() {
    return (
      <div>
        <Link to='/contact'>
          <button>Book An Instructor!</button>
        </Link>
      </div>
    )
  }
}

export default BookNowBtn

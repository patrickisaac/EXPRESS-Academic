import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Buttons/styles.css'

class DancerBtn extends React.Component {
  render() {
    return (
      <div className='main__button-container'>
        <Link to='/dancers'>
          <button>VIEW OUR DANCERS!</button>
        </Link>
      </div>
    )
  }
}

export default DancerBtn

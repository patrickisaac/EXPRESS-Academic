import React from 'react'
import { Link } from 'react-router-dom'

class DancerBtn extends React.Component {
  render() {
    return (
      <div>
        <Link to='/dancers'><button>VIEW OUR DANCERS!</button></Link>
      </div>
    )
  }
}

export default DancerBtn
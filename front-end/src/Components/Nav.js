import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>EXPRESS</h1> */}
        <div><Link to='/'><img src='../Assets/express.png' width='150' alt=''/></Link></div>
        <div><Link to='/dancers'>View Local Dancers</Link></div>
        <div><Link to='/events'>View Local Dance Events</Link></div>
        <div><Link to='/contact'>Contact Us!</Link></div>
    </div>
    )
  }
}

export default Nav
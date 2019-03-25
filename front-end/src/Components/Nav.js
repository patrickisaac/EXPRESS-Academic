import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Styles/Nav/styles.css'

class Nav extends React.Component {
  render() {
    return (
      <div className='navbar__wrapper'>
        <div className='navbar__container'>
          <div>
            <Link to='/'>
              <img className='logo' src='../Assets/Express-E.png' alt='logo' />
            </Link>
          </div>
          <div className='navbar__links'>
            <NavLink className='navbar__link' activeClassName='activeRoute' to='/dancers'>
              Dancers
            </NavLink>
            <NavLink className='navbar__link' activeClassName='activeRoute' to='/events'>
              Events
            </NavLink>
            <NavLink className='navbar__link' activeClassName='activeRoute' to='/contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav

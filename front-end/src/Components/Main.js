import React from 'react'
import AboutSection from './AboutSection'
import '../Styles/Main/styles.css'

class Main extends React.Component {
  render() {
    return (
      <div className='main__wrapper'>
        <div className='main__container'>
          <img src='../Assets/express.png' alt='logo' />
          <h3>Sharing experiences through movement</h3>
        </div>
        <AboutSection />
      </div>
    )
  }
}

export default Main

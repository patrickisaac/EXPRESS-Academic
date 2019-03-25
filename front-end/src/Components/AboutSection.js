import React from 'react'
import ViewDancerBtn from './ViewDancerBtn'
import '../Styles/AboutSection/styles.css'

class AboutSection extends React.Component {
  render() {
    return (
      <div className='about__wrapper'>
        <div className='about__container'>
          <img src='../Assets/headphones.svg' alt='' />
          <h2>How It Works</h2>
          <p>
            It can take a lot of courage to begin the journey of dance - and the experience of going
            to classes can be particularly intimidating for a beginner. EXPRESS helps people step
            out of their comfort zone by connecting them to passionate and seasoned dancers who can
            help them discover their inner rhythm and build their confidence through private
            lessons. Join the movement by expressing your thoughts through movement itself.
          </p>
        </div>
        <ViewDancerBtn />
      </div>
    )
  }
}

export default AboutSection
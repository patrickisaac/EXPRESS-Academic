import React from 'react'
import ContactForm from './ContactForm'
import '../Styles/Hero/styles.css'

class ContactPage extends React.Component {
  render() {
    return (
      <div>
      <div className='hero__container'>
        <h1>Contact Us!</h1>
        <h2>You are moments away from learning from one of our local dancers!</h2>
      </div>
        <ContactForm />
      </div>
    )
  }
}

export default ContactPage

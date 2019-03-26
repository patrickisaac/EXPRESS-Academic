import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import '../Styles/ContactForm/styles.css'

class ContactForm extends React.Component {
  _isMounted = false
  state = {
    dancers: []
  }

  getDancers = () => {
    this._isMounted = true
    axios.get('/dancers').then(response => {
      this.setState({
        dancers: response.data
      })
    })
  }

  componentDidMount() {
    this.getDancers()
  }

  bookDancer = () => {
    if (this.nameInput.value < 2 || this.emailInput.value < 2 || this.numberInput.value < 2) {
      return Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please provide valid information!'
      })
    } else {
      axios
        .post('/contact', {
          name: this.nameInput.value,
          email: this.emailInput.value,
          number: this.numberInput.value,
          instructor: this.instructorInput.value
        })
        .then(response => {
          this.nameInput.value = ''
          this.emailInput.value = ''
          this.numberInput.value = ''
          this.instructorInput.value = ''
        })
      return Swal.fire({
        type: 'success',
        title: 'Sent!',
        text: 'Please be on the lookout for an email!'
      })
    }
  }

  render() {
    const dancersList = this.state.dancers.map((dancer, id) => {
      return (
        <option key={id} value={dancer.name}>
          {dancer.name}
        </option>
      )
    })
    return (
      <div>
        <div className='form__wrapper'>
          <div className='form__container'>
            {/* <img src='../Assets/headphones.svg' alt='headphones' /> */}
            <form>
              <img src='../Assets/user.svg' alt='user' />
              <input
                type='text'
                placeholder='Enter your name'
                ref={self => {
                  this.nameInput = self
                }}
                className='input'
              />
              <img src='../Assets/mail.svg' alt='email' />
              <input
                type='text'
                placeholder='Enter email address'
                ref={self => {
                  this.emailInput = self
                }}
                className='input'
              />
              <img src='../Assets/phone.svg' alt='phone' />
              <input
                type='text'
                placeholder='ex: 7781234567'
                ref={self => {
                  this.numberInput = self
                }}
                className='input'
              />
              <img src='../Assets/speaker.svg' alt='speaker' />
              <select
                className='input'
                ref={self => {
                  this.instructorInput = self
                }}
              >
                <option value='' />
                {dancersList}
              </select>
            </form>
            <button onClick={this.bookDancer}>BOOK NOW!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm

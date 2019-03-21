import React from 'react'
import axios from 'axios'

class Contact extends React.Component {

  bookDancer = () => {
    if(
      this.nameInput.value < 2 || 
      this.emailInput.value < 2 ||
      this.numberInput.value < 2
      ) { 
        return alert('Please provide valid information')
      } else {
        axios.post('/contact', {
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
      }
  }

  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <div>
          <form>
            NAME:
            <input
            type='text'
            placeholder='Enter your name'
            ref={self => {this.nameInput = self}}
            />
            EMAIL:
            <input
            type='text'
            placeholder='Enter email address'
            ref={self => {this.emailInput = self}}
            />
            NUMBER:
            <input
            type='text'
            placeholder='ex: 7781234567'
            ref={self => {this.numberInput = self}}
            />
            INSTRUCTOR:
            <select ref={self => {this.instructorInput = self}}>
              <option value=''></option>
              <option value="Andrew Wu">Andrew Wu</option>
              <option value="Kenneth Kadatuan">Kenneth Kadatuan</option>
              <option value="Zarina Reed">Zarina Reed</option>
              <option value="Marquis Allen">Marquis Allen</option>
              <option value="Larissa Simpson">Larissa Simpson</option>
              <option value="Aurea Delos Santos">Aurea Delos Santos</option>
            </select>
            </form>
            <button onClick={this.bookDancer}>BOOK NOW!</button>
        </div>
      </div>
    )
  }
}


export default Contact
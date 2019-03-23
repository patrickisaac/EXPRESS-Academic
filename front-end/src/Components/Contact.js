import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  _isMounted = false
  state = {
    dancers: [],
  }

  getDancers = () => {
    this._isMounted = true
    axios.get('/dancers')
      .then(response => {
        this.setState({
          dancers: response.data
        })
      })
  }

  componentDidMount() {
    this.getDancers()
  }

  bookDancer = () => {
    if (
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
      return alert('Be on the lookout for an email!')
    }
  }

  render() {
    const dancersList = this.state.dancers.map((dancer, id) => {
      return (
        <option key={id} value={dancer.name}>{dancer.name}</option>
      )
    })
    return (
      <div>
        <h2>Contact Form</h2>
        <div>
          <form>
            NAME:
            <input
              type='text'
              placeholder='Enter your name'
              ref={self => { this.nameInput = self }}
            />
            EMAIL:
            <input
              type='text'
              placeholder='Enter email address'
              ref={self => { this.emailInput = self }}
            />
            NUMBER:
            <input
              type='number'
              placeholder='ex: 7781234567'
              ref={self => { this.numberInput = self }}
            />
            INSTRUCTOR:
            <select ref={self => { this.instructorInput = self }}>
              <option value=''></option>
              {dancersList}
            </select>
          </form>
          <button onClick={this.bookDancer}>BOOK NOW!</button>
        </div>
      </div>
    )
  }
}

export default Contact
import React from 'react'
import Events from './Events'
import axios from 'axios'
import '../Styles/Hero/styles.css'

class EventPage extends React.Component {
  state = {
    events: []
  }

  getEvents = () => {
    axios.get('/events').then(response => {
      this.setState({
        events: response.data
      })
    })
  }

  componentDidMount() {
    this.getEvents()
  }

  render() {
    return (
      <div>
        <div className='hero__container'>
          <h1>Events</h1>
          <div className='line'></div>
          <p>Check out what's happening in Vancouver!</p>
        </div>
        <Events events={this.state.events} />
      </div>
    )
  }
}

export default EventPage
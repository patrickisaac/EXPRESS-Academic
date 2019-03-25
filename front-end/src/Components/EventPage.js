import React from 'react'
import Events from './Events'
import axios from 'axios'
import '../Styles/Hero/styles.css'

class EventPage extends React.Component {
  _isMounted = false
  state = {
    events: []
  }

  getEvents = () => {
    this._isMounted = true
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
          <h2>Check out what's happening in Vancouver!</h2>
        </div>
        <Events events={this.state.events}/>
      </div>
    )
  }
}

export default EventPage
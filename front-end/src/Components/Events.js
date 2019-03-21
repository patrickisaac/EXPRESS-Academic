import React from 'react'
import axios from 'axios'

class Events extends React.Component {
  state = {
    events: []
  }

  getEvents = () => {
    axios.get('/events')
      .then(response => {
        this.setState({
          events: response.data
        })
      })
  }

  componentDidMount() {
    this.getEvents()
  }

  render() {
    const eventList = this.state.events.map((event, id) => {
      return (
        <div key={id}>
        <h2>{event.name.text}</h2>
        <h4>{event.summary}</h4>
        <h4>{event.start.local}</h4>
        <img src={event.logo.original.url} width='150px' alt='' />
        </div>
      )
    })
    return (
      <div>
        <h2>EVENTS</h2>
        {eventList}
      </div>
    )
  }
}


export default Events
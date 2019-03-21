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
      if(event.logo || event.summary !== null) {
        return (
          <div key={id}>
          <h2>{event.name.text}</h2>
          <h3>{event.summary}</h3>
          <p>{event.start.local}</p>
          <img src={event.logo.original.url} width='150' alt='' />
          </div>
        )
      }
      return (
        <div key={id}>
        <h2>{event.name.text}</h2>
        <p>{event.start.local}</p>
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
import React from 'react'
import axios from 'axios'
import '../Styles/Events/styles.css'

const date = d => {
  return new Date(d).toLocaleDateString()
}

class Events extends React.Component {
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
    const eventList = this.state.events.map((event, id) => {
      if (event.logo || event.summary !== null) {
        return (
          <div className='event__container' key={id}>
            <div>
              <img src={event.logo.original.url} alt='event' />
            </div>
            <div className='event__information'>
              <h4>{event.name.text}</h4>
              <p>{event.summary}</p>
              <p>{date(event.start.local)}</p>
            </div>
          </div>
        )
      }
      return (
        <div className='event__container' key={id}>
          <p>
            <i>IMAGE NOT AVAILABLE</i>
          </p>
          <div className='event__information'>
            <h4>{event.name.text}</h4>
            <p>
              <i>SUMMARY NOT AVAILABLE</i>
            </p>
            <p>{date(event.start.local)}</p>
          </div>
        </div>
      )
    })
    return <div className='event__wrapper'>{eventList}</div>
  }
}

export default Events
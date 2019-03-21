import React from 'react'
import axios from 'axios'

class DancerDetails extends React.Component {
  state = {
    dancerDetail: [],
    locations: []
  }

  componentDidMount() {
    this.getDancerDetail()
  }

  getDancerDetail = () => {
    axios.get(`/dancers/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          dancerDetail: response.data,
          locations: response.data.locations
        })
      })
  }

  render() {
    const { name, bio, quote, video } = this.state.dancerDetail
    const locationsList = this.state.locations.map((location, id) => {
      return <li key={id}>{location}</li>
    })
    return (
      <div>
        <h2>Dancer Details</h2>
        <h3>{name}</h3>
        <p>{bio}</p>
        <p>{quote}</p>
        <ul>
          {locationsList}
        </ul>
        <iframe src={video} title={name}></iframe>
      </div>
    )
  }
}

export default DancerDetails
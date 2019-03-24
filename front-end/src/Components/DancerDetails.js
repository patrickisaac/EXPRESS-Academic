import React from 'react'
import axios from 'axios'
import CommentSection from './CommentSection'
import BookNowBtn from './BookNowBtn'
import '../Styles/DancerDetails/styles.css'

class DancerDetails extends React.Component {
  state = {
    dancerDetail: [],
    locations: [],
    comments: []
  }

  componentDidMount() {
    this.getDancerDetail()
  }

  getDancerDetail = () => {
    axios.get(`/dancers/${this.props.match.params.id}`).then(response => {
      this.setState({
        dancerDetail: response.data,
        locations: response.data.locations,
        comments: response.data.comments
      })
    })
  }

  render() {
    const { name, image, bio, quote, video } = this.state.dancerDetail
    const locationsList = this.state.locations.map((location, id) => {
      return <li key={id}>{location}</li>
    })
    return (
      <div className='details__wrapper'>
        <div className='topHalf__container'>
          <div>
            <img className='dancer__img' src={image} alt={name} />
          </div>
          <div>
            <img src='../Assets/speaker.svg' alt='speaker' />
            <p>{bio}</p>
          </div>
        </div>
        <div className='bottomHalf__container'>
          <div>
            <h4>What makes a great dancer?</h4>
            <p>
              <i>{quote}</i>
            </p>
            <img src='../Assets/globe.svg' alt='globe' />
            <h4>Places {name} has taught:</h4>
            <ul>{locationsList}</ul>
          </div>
          <div>
            <iframe src={video} title={name} />
          </div>
        </div>
        <CommentSection comments={this.state.comments} />
        <BookNowBtn />
      </div>
    )
  }
}

export default DancerDetails
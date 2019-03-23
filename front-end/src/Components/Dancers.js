import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Styles/Dancers/styles.css'

class Dancers extends React.Component {
  _isMounted = false
  state = {
    dancers: [],
  }

  getDancers = () => {
    this._isMounted = true
    axios.get('/dancers')
      .then(response => {
        this.setState ({
          dancers: response.data
        })
      })
  }

  componentDidMount() {
    this.getDancers()
  }

  render() {
    const dancersList = this.state.dancers.map((dancer, id) => {
      return (
        <Link className='dancer__links' key={id}to={'/dancers/' + dancer.id}>
          <div className='dancer__container'>
            <div className='dancer__img'>
              <img src={dancer.image} alt={dancer.image} />
            </div>
            <div className='dancer__information'>
              <h4>{dancer.name}</h4>
              <p>Age: {dancer.age}</p>
              <p>Years of Dance Experience: {dancer.experience}</p>
            </div>
          </div>
        </Link> 
      )
    })
    return (
      <div className='dancer__wrapper'>
        {dancersList}
      </div>
    )
  }
}

export default Dancers
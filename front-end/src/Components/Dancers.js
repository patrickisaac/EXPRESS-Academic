import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HeroDancer from './HeroDancer'
import MoreInfoBtn from './MoreInfoBtn'
import '../Styles/Dancers/styles.css'
import '../Styles/Buttons/styles.css'

class Dancers extends React.Component {
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

  render() {
    const dancersList = this.state.dancers.map((dancer, id) => {
      return (
        <div className='dancer__container' key={id}>
          <div>
            <img src={dancer.image} alt={dancer.image} />
          </div>
          <div className='dancer__information'>
            <h4>{dancer.name}</h4>
            <p>Age: {dancer.age}</p>
            <p>Years of Experience: {dancer.experience}</p>
          </div>
          <Link className='dancer__links' to={'/dancers/' + dancer.id}>
            <MoreInfoBtn />
          </Link>
        </div>
      )
    })
    return (
      <div>
        <HeroDancer />
        <div className='dancer__wrapper'>
          {dancersList}
        </div>
      </div>
    )
  }
}

export default Dancers
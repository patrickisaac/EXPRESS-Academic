import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        <div key={id}>
        <Link to={'/dancers/' + dancer.id}>
          <img src={dancer.image} width='150px' alt='' />
          <h3>{dancer.name}</h3>
          <h4>Age:{dancer.age}</h4>
          <h4>Years of Dance Experience:{dancer.experience}</h4>
         </Link> 
        </div>
      )
    })
    return (
      <div>
        <h2>DANCERS</h2>
        {dancersList}
      </div>
    )
  }
}

export default Dancers
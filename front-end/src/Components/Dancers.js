import React from 'react'
import axios from 'axios'

class Dancers extends React.Component {
  state = {
    dancers: []
  }

  getDancers = () => {
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
    const dancersList = this.state.dancers.map((dancer, i) => {
      return (
        <div>
          <img src={dancer.image} width='150px' alt='' />
          <h3 key={i}>{dancer.name}</h3>
          <h4>Age:{dancer.age}</h4>
          <h4>Years of Dance Experience:{dancer.experience}</h4>
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
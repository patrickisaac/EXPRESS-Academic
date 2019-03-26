import React from 'react'
import Dancers from './Dancers'
import axios from 'axios'
import '../Styles/Hero/styles.css'

class DancersPage extends React.Component {
  _isMounted = false
  state = {
    dancers: []
  }

  getDancers = () => {
    this._isMounted = true
    axios.get('/dancers').then(response => {
      this.setState({
        dancers: response.data
      })
    })
  }

  componentDidMount() {
    this.getDancers()
  }

  render() {
    return (
      <div>
        <div className='hero__container'>
          <h1>Dancers</h1>
          <div className='line'></div>
          <p>View our local dancers!</p>
        </div>
        <Dancers dancers={this.state.dancers}/>
      </div>
    )
  }
}

export default DancersPage
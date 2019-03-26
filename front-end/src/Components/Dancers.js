import React from 'react'
import { Link } from 'react-router-dom'
import MoreInfoBtn from './MoreInfoBtn'
import '../Styles/Dancers/styles.css'
import '../Styles/Buttons/styles.css'

class Dancers extends React.Component {
  render() {
    const dancersList = this.props.dancers.map((dancer, id) => {
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
      <div className='dancer__wrapper'>{dancersList}</div>
    )
  }
}

export default Dancers

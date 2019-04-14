import React from 'react'
import Modal from 'react-responsive-modal'
import ContactForm from './ContactForm'
import Breakpoint, { setDefaultBreakpoints } from 'react-socks'
import '../Styles/Buttons/styles.css'

setDefaultBreakpoints([{ m: 550 }])

class BookNowBtn extends React.Component {
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <Breakpoint m up>
        <div>
          <button onClick={this.onOpenModal}>BOOK AN INSTRUCTOR</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <ContactForm />
          </Modal>
        </div>
      </Breakpoint>
    )
  }
}

export default BookNowBtn

import React from 'react'
import Modal from 'react-responsive-modal'
import ContactForm from './ContactForm'
import '../Styles/Buttons/styles.css'

class BookNowBtn extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>BOOK AN INSTRUCTOR</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <ContactForm />
        </Modal>
      </div>
    );
  }
}

export default BookNowBtn


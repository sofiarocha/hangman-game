import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class InstructionsModal extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              How to Play
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instructions</h4>
            <p className="instructions">
              You have to guess which letters contains the word hidden.
              You can click on your keyboard or click on the screen to pick a letter.
              You have 6 lives to achieve the big prize <span role="img" aria-label="Sily face">😆</span>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

export default InstructionsModal;
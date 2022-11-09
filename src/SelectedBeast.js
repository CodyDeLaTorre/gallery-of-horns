import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {


  render() {
    return (
      <>
      <Modal show={this.props.isModalShown} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img height="400px" width="400px" src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description}/>
          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>
      </Modal>
      </>
    )


  }
}


export default SelectedBeast;

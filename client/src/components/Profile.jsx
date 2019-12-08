import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import moment from 'moment';

export default function Profile(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Profile Info
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          props.currentUser &&
          <>
            <h4>Name: {props.currentUser.firstname} {props.currentUser.lastname}</h4>
            <h4>Username: {props.currentUser.username}</h4>
            <h4>Email: {props.currentUser.email}</h4>
            <h4>Location: {props.currentUser.location}</h4>
            <h4>User Since: {moment(new Date(props.currentUser.created_at)).format("MM/DD/YYYY")}</h4>
          </>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

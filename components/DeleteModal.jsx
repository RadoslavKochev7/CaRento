import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function DeleteModal({ deleteHandler, closeModalHandler }) {
  const handleClose = () => {
    closeModalHandler();
  };

  const deleteResult = () => {
    closeModalHandler();
    deleteHandler();
  };

  return (
    <>
      <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteResult}>
            <FontAwesomeIcon icon={faTrashCan} />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

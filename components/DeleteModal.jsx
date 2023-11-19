import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./DeleteModal.module.css";
import { ButtonGroup } from "react-bootstrap";

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
        size="xl"
        centered
      >
        <Modal.Header data-bs-theme="dark" className={`bg-dark ${styles.modalHeader}`}>
          <Button variant="btn btn-close" className={styles.closeBtn}>
            <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
          </Button>
        </Modal.Header>
        <Modal.Body data-bs-theme="dark" className={`bg-dark p-2 ${styles.modalBody}`}>
          Are you sure you want to delete this?
        </Modal.Body>
        <Modal.Footer data-bs-theme="dark" className="bg-dark">
          <ButtonGroup size="lg">
            <Button variant="info" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={deleteResult}>
              <FontAwesomeIcon icon={faTrashCan} />
              Delete
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}

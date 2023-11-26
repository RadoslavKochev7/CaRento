import { useState } from "react";
import { Modal, Form, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddCarModalForm.module.css";

const formInitialState = {
  model: "",
  make: "",
  imageUrl: "",
  year: "",
  price: "",
  mileage: "",
  horsePower: "",
  description: "",
  city: "",
  country: "",
  address: "",
};

export default function AddCarModalForm({ onSubmit }) {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(formInitialState);
  const [validations, setValidations] = useState({});
  const [selected, setSelected] = useState("Diesel");

  const handleDropdownBehavior = (e) => {
    e.preventDefault();
    setSelected(e.target.text);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setFormValues(formInitialState);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let isValid = true;

    // if (Object.values(formValues).some((x) => !x)) {
    //   setValidations((state) => ({
    //     ...state,
    //     [e.target.name]: "Field is required",
    //   }));

    //   isValid = false;
    // }

    // if (!isValid) {
    //     console.log("not valid")
    //   return;
    // }

    setShowModal(false);
    onSubmit({ ...formValues, selected });
    // setFormValues(formInitialState);
  };

  const changeInputValueHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      case "month":
        value = e.target.value.toString();
        break;
      default:
        value = e.target.value;
        break;
    }

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));

    setValidations((state) => ({
      ...state,
      [e.target.name]: "",
    }));
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        + Add Car
      </Button>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header>
          <Modal.Title>Please, populate the fields below</Modal.Title>
          <button className={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} onClick={closeModalHandler} />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form className={styles.addCarModalForm} onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Label className={styles.formLabel}>Make</Form.Label>
              <Form.Control
                type="text"
                name="make"
                // required
                placeholder="Enter car's make"
                value={formValues.make}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.make}
              />
              <Form.Control.Feedback type="invalid">
                {validations.make}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.formLabel}>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                // required
                placeholder="Enter car's model"
                value={formValues.model}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.model}
              />
              <Form.Control.Feedback type="invalid">
                {validations.model}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.formLabel}>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                placeholder="Enter valid image url"
                value={formValues.imageUrl}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.imageUrl}
              />
              <Form.Control.Feedback type="invalid">
                {validations.imageUrl}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.formLabel}>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price for a day"
                min={0}
                // required
                value={formValues.price}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.price}
              />
              <Form.Control.Feedback type="invalid">
                {validations.price}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.dateInput}>Year</Form.Label>
              <Form.Control
                type="month"
                name="year"
                // required
                value={formValues.year}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.year}
              />
              <Form.Control.Feedback type="invalid">
                {validations.year}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.formLabel}>Horse Power</Form.Label>
              <Form.Control
                type="number"
                name="horsePower"
                placeholder="Enter car's horse power"
                min={0}
                value={formValues.horsePower}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.horsePower}
              />
              <Form.Control.Feedback type="invalid">
                {validations.horsePower}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.formLabel}>Mileage</Form.Label>
              <Form.Control
                type="number"
                name="mileage"
                placeholder="Enter car's mileage"
                min={0}
                value={formValues.mileage}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.mileage}
              />
              <Form.Control.Feedback type="invalid">
                {validations.mileage}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.formLabel}>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                // required
                placeholder="Enter car's city"
                value={formValues.city}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.city}
              />
              <Form.Control.Feedback type="invalid">
                {validations.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.formLabel}>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter car's address"
                value={formValues.address}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.city}
              />
              <Form.Control.Feedback type="invalid">
                {validations.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.formLabel}>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                // required
                placeholder="Enter car's country"
                value={formValues.country}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.make}
              />
              <Form.Control.Feedback type="invalid">
                {validations.country}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.formLabel}>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter description"
                value={formValues.description}
                onChange={changeInputValueHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className={styles.formLabel}>Fuel Type</Form.Label>
              <Dropdown>
                <Dropdown.Toggle
                  className={styles.formDropdown}
                  variant="transperant"
                  id="dropdown-basic"
                >
                  {selected}
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={handleDropdownBehavior}>
                  <Dropdown.Item>Diesel</Dropdown.Item>
                  <Dropdown.Item>Gas</Dropdown.Item>
                  <Dropdown.Item>Gasoline</Dropdown.Item>
                  <Dropdown.Item>Electric</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group>
              <ButtonGroup className={styles.buttonGroup} aria-label="Buttons">
                <Button
                  className="btn btn-info"
                  type="reset"
                  onClick={() => {
                    setFormValues(formInitialState);
                    setValidations({});
                  }}
                >
                  Reset
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                    setFormValues(formInitialState);
                  }}
                >
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </ButtonGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

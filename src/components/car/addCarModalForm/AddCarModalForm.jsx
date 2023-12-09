import { useState } from "react";
import {
  Modal,
  Form,
  Button,
  ButtonGroup,
  Dropdown,
  Spinner,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddCarModalForm.module.css";
import * as locationService from "../../../services/locationService";
import * as carConstants from "../../../constants/carConstants";

const formInitialState = carConstants.formInitialStateConstant;

export default function AddCarModalForm({ onSubmit }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(formInitialState);
  const [validations, setValidations] = useState({});

  const handleDropdownBehavior = (e) => {
    e.preventDefault();
    setFormValues((state) => ({
      ...state,
      fuelType: e.target.text,
    }));
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setFormValues(formInitialState);
  };

  const validateLocations = async (city, country) => {
    try {
      const result = await locationService.getCityCoordinates(city, country);
      if (result.length === 0) {
        setValidationForCountryAndCity();
        return false;
      }
      return true;
    } catch (error) {
      setValidationForCountryAndCity();
      return false;
    } finally {
      setLoading(false);
    }
  };

  const validateDate = () => {
    if (new Date(formValues.year).getFullYear() > new Date().getFullYear()) {
      setValidations((state) => ({
        ...state,
        year: carConstants.invalidYear
      }));
      return false;
    }

    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let isValid = true;

    if (!validateDate()) {
      isValid = false;
    }
    if (!(await validateLocations(formValues.city, formValues.country))) {
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    await onSubmit(formValues);
    setFormValues(formInitialState);
    setShowModal(false);
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

  const onModalLoad = () => {
    setShowModal(true);
    setValidations({});
  };

  const setValidationForCountryAndCity = () => {
    setValidations((state) => ({
      ...state,
      city: carConstants.notExistingCity,
    }));
  };

  return (
    <div className={styles.addBtn}>
      <Button variant="primary" onClick={onModalLoad}>
        <FontAwesomeIcon icon={faPlus} /> Add Car
      </Button>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header>
          <Modal.Title className={styles.modalTitle}>
            Please, populate the required fields
          </Modal.Title>
          <button className={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} onClick={closeModalHandler} />
          </button>
        </Modal.Header>
        {loading && (
          <Spinner
            variant="primary"
            className={styles.formSpinner}
            animation="border"
            role="status"
          ></Spinner>
        )}
        <Modal.Body>
          <Form className={styles.addCarModalForm} onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>
                Make
              </Form.Label>
              <Form.Control
                type="text"
                name="make"
                required
                placeholder="Enter car's make"
                value={formValues.make}
                onChange={changeInputValueHandler}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>
                Model
              </Form.Label>
              <Form.Control
                type="text"
                name="model"
                required
                placeholder="Enter car's model"
                value={formValues.model}
                onChange={changeInputValueHandler}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>
                Image URL
              </Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                placeholder="Enter valid image URL"
                required
                value={formValues.imageUrl}
                onChange={changeInputValueHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>
                Price
              </Form.Label>
              <Form.Control
                type="number"
                name="rentalPrice"
                placeholder="Enter price for a day"
                min={0}
                step={0.01}
                required
                value={formValues.price}
                onChange={changeInputValueHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label
                className={[
                  styles.dateInput,
                  styles.formLabel,
                  styles.required,
                ]}
              >
                Year
              </Form.Label>
              <Form.Control
                type="month"
                name="year"
                required
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
              />
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
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>
                City
              </Form.Label>
              <Form.Control
                type="text"
                name="city"
                required
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
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>
                Country
              </Form.Label>
              <Form.Control
                type="text"
                name="country"
                required
                placeholder="Enter car's country"
                value={formValues.country}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.country}
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
                  name="fuelType"
                  variant="transperant"
                  id="dropdown-basic"
                >
                  {formValues.fuelType}
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={handleDropdownBehavior}>
                  <Dropdown.Item className={styles.dropdownItem}>
                    Diesel
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>
                    Gas
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>
                    Gasoline
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>
                    Electric
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group className={styles.buttonsDiv}>
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

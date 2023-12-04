import { useState } from "react";
import { Modal, Form, Button, ButtonGroup, Dropdown, Spinner,} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./EditCarModalForm.module.css";
import * as locationService from "../../../services/locationService";

export default function EditCarModalForm({
  data,
  editHandler,
  closeModalHandler,
}) {
  const formInitialState = {
    model: data.model,
    make: data.make,
    imageUrl: data.imageUrl,
    year: data.year,
    rentalPrice: data.rentalPrice,
    mileage: data.mileage,
    horsePower: data.horsePower,
    description: data.description,
    fuelType: data.fuelType,
    city: data.city,
    country: data.country,
    address: data.address,
    isAvailable: data.isAvailable ?? true,
    rentalStartDate: data.rentalStartDate ?? "",
    rentalEndDate: data.rentalEndDate ?? "",
  };

  const [formValues, setFormValues] = useState(formInitialState);
  const [validations, setValidations] = useState({});
  const [loading, setLoading] = useState(false);

  const handleDropdownBehavior = (e) => {
    e.preventDefault();

    setFormValues((state) => ({
      ...state,
      fuelType: e.target.text,
    }));
  };

  const handleClose = () => {
    closeModalHandler();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    await validateLocations(formValues.city, formValues.country);
    validateDate();

    if (validations.city || validations.year) {
      return;
    }

    await editHandler(data._id, formValues);
    handleClose();
  };

  const validateLocations = async (city, country) => {
    try {
      const result = await locationService.getCityCoordinates(city, country);
      if (result.length === 0) {
        setValidationForCountryAndCity();
      }
    } catch (error) {
      setValidationForCountryAndCity();
    } finally {
      setLoading(false);
    }
  };

  const validateDate = () => {
    if (new Date(formValues.year).getFullYear() > new Date().getFullYear()) {
      setValidations((state) => ({
        ...state,
        year: invalidYear,
      }));
    }
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
      <Modal show={true} onHide={closeModalHandler}>
        <Modal.Header>
          <Modal.Title className={styles.modalTitle}>Please, populate the required fields</Modal.Title>
          <button className={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
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
          <Form className={styles.editCarModalForm} onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>Make</Form.Label>
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
              <Form.Label className={[styles.formLabel, styles.required]}>Model</Form.Label>
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
              <Form.Label className={[styles.formLabel, styles.required]}>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                placeholder="Enter valid image url"
                value={formValues.imageUrl}
                onChange={changeInputValueHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className={[styles.formLabel, styles.required]}>Price</Form.Label>
              <Form.Control
                type="number"
                name="rentalPrice"
                placeholder="Enter price for a day"
                min={0.0}
                step={0.01}
                required
                value={formValues.rentalPrice}
                onChange={changeInputValueHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className={[
                  styles.dateInput,
                  styles.formLabel,
                  styles.required,
                ]}>Year</Form.Label>
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
              <Form.Label className={[styles.formLabel, styles.required]}>City</Form.Label>
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
              <Form.Label className={[styles.formLabel, styles.required]}>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                required
                placeholder="Enter car's country"
                value={formValues.country}
                onChange={changeInputValueHandler}
              />
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
                  name="fuelType"
                >
                  {formValues.fuelType}
                </Dropdown.Toggle>

                <Dropdown.Menu onClick={handleDropdownBehavior}>
                  <Dropdown.Item className={styles.dropdownItem}>Diesel</Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>Gas</Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>Gasoline</Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>Electric</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group className={styles.buttonsDiv}>
              <ButtonGroup className={styles.buttonGroup} aria-label="Buttons">
                <Button
                  className="btn btn-info"
                  type="reset"
                  onClick={() => {
                    setFormValues({ formInitialState });
                    setValidations({});
                  }}
                >
                  Reset
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={() => {
                    handleClose();
                    setFormValues({ formInitialState });
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

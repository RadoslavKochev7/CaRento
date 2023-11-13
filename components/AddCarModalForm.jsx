import React, { useState } from "react";
import { Modal, Form, Button, ButtonGroup  } from "react-bootstrap";

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
  fuelConsumption: "",
  address: "",
};

export default function AddCarModalForm() {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(formInitialState);
  const [validations, setValidations] = useState({});

  console.log(formValues);
  console.log(validations);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let value = "";
    console.log("on submit");
    if (value === "") {
      setValidations((state) => ({
        ...state,
        [e.target.name]: "Field is required",
      }));
    } else {
      setValidations((state) => ({
        ...state,
        [e.target.name]: ""
      }));
    }

    setShowModal(false);
  };

  const changeInputValueHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      default:
        value = e.target.value;
        break;
    }

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        + Add Car
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Car Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Label>Make</Form.Label>
              <Form.Control
                type="text"
                name="make"
                placeholder="Enter your car's make"
                value={formValues.make}
                onChange={changeInputValueHandler}
                isInvalid={!!validations.make}
              />
              <Form.Control.Feedback type="invalid">
                {validations.make}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                placeholder="Enter your car's model"
                value={formValues.model}
                onChange={changeInputValueHandler}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                placeholder="Enter valid image url"
                value={formValues.imageUrl}
                onChange={changeInputValueHandler}
                //   isInvalid={!!passwordError}
              />
              {/* <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback> */}
            </Form.Group>

            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter the price for a day"
                min={0}
                required
                value={formValues.price}
                onChange={changeInputValueHandler}
                //   isInvalid={!!emailError}
              />
              {/* <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback> */}
            </Form.Group>

            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="date"
                name="year"
                value={formValues.year}
                onChange={changeInputValueHandler}
                //   isInvalid={!!emailError}
              />
              {/* <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group>
              <ButtonGroup aria-label="Buttons">
                {/* <Button
                  className="btn btn-info"
                  type="reset"
                  onClick={() => {
                    setFormValues(formInitialState);
                    setValidations({});
                  }}
                >
                  Reset
                </Button> */}
                <Button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  // onClick={(e) => console.log(e.target)}
                >
                  Save
                </Button>
              </ButtonGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer> */}
          {/* <Button
            className="btn btn-info"
            type="reset"
            onClick={() => {(
                setFormValues(formInitialState)); 
                setValidations({})}
            }
          >
            Reset
          </Button>
          <Button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            // onClick={(e) => console.log(e.target)}
          >
            Save
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
}

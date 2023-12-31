import { faEraser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Search({ filterHandler }) {
  const [search, setSearch] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    filterHandler(search);
  };

  const clearHandler = () => {
    setSearch("");
    filterHandler("");
  };

  return (
    <>
      <Form className="form-inline my-2 my-lg-0" onSubmit={onSearchSubmit}>
        <Form.Control
          type="text"
          placeholder="Search"
          className="form-control mr-sm-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 500 }}
        />
        <Button
          variant="outline-success"
          className="btn my-2 my-sm-0"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} /> Search
        </Button>
        <Button
          variant="outline-info"
          className="btn my-2 my-sm-0"
          type="button"
          onClick={clearHandler}
        >
          <FontAwesomeIcon icon={faEraser} /> Clear
        </Button>
      </Form>
    </>
  );
}

import { useState } from "react";
import { toast } from "react-toastify";
import { datesInThePast, invalidEndDate } from "../../constants/reviewConstants";
import styles from "./RentForm.module.css";

export default function RentForm({ rentHandler }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onStartDateChange = (e) => {
    e.preventDefault();
    setStartDate(e.target.value);
  };

  const onEndDateChange = (e) => {
    e.preventDefault();
    setEndDate(e.target.value);
  };

  const clearInputs = () => {
    setStartDate("");
    setStartDate("");
  };

  const onRentClick = async (e) => {
    e.preventDefault();

    if (new Date(endDate) < new Date(startDate)) {
      toast.warning(invalidEndDate);
      return;
    }

    if (new Date(startDate).getDate() < new Date().getDate() 
     || new Date(endDate).getDate() < new Date().getDate() ) {
      toast.warning(datesInThePast);
      return;
    }

    await rentHandler(startDate, endDate);
    clearInputs();
  };

  return (
    <>
      <form className={styles.rentFormDiv} onSubmit={onRentClick}>
        <h3 className={styles.rentHeading}>Available for renting</h3>
        <div className={`row ${styles.inputsRow}`}>
          <div className="">
            <label htmlFor="cf-3">Start Date</label>
            <div className="form-control-wrap">
              <input
                type="date"
                id="cf-3"
                value={startDate}
                onChange={onStartDateChange}
                className={`form-control ${styles.inputDateForm}`}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="cf-4">End Date</label>
            <div className="form-control-wrap">
              <input
                type="date"
                id="cf-4"
                value={endDate}
                onChange={onEndDateChange}
                className={`form-control ${styles.inputDateForm}`}
              />
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className={`btn btn-success py-3 ${styles.rentButton}`}
            >
              Rent Now
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

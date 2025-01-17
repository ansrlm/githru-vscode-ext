import { useState, useEffect } from "react";
import * as React from "react";

import "./Filter.scss";

type Props = {
  setFromDate: React.Dispatch<React.SetStateAction<string>>;
  setToDate: React.Dispatch<React.SetStateAction<string>>;
  minDate: string;
  maxDate: string;
};

const Filter = (props: Props) => {
  const { setFromDate, setToDate, minDate, maxDate } = props;
  const getYYYYMMDD = (fullDateString: string) =>
    new Date(fullDateString).toISOString().split("T")[0];
  const minDateStr = getYYYYMMDD(minDate);
  const maxDateStr = getYYYYMMDD(maxDate);
  const [fromDateFilter, setFromDateFilter] = useState<string>(minDateStr);
  const [toDateFilter, setToDateFilter] = useState<string>(maxDateStr);

  const fromDateChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFromDateFilter(e.target.value);
  };
  const toDateChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setToDateFilter(e.target.value);
  };

  useEffect(() => {
    setFromDate(fromDateFilter);
    setToDate(toDateFilter);
  }, [fromDateFilter, toDateFilter, setFromDate, setToDate]);

  return (
    <section className="filter">
      <form>
        <div>
          <span>From:</span>
          <input
            className="date-from"
            type="date"
            value={fromDateFilter}
            min={minDateStr}
            max={maxDateStr}
            onChange={fromDateChangeHandler}
          />
          <span>To:</span>
          <input
            className="date-to"
            type="date"
            min={minDateStr}
            max={maxDateStr}
            value={toDateFilter}
            onChange={toDateChangeHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default Filter;

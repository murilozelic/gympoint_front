import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ name, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};

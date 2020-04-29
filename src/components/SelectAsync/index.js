import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

const SelectAsync = ({ name, ...rest }) => {
  const SelectAsyncRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: SelectAsyncRef.current,
      path: 'props.value.id',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <AsyncSelect ref={SelectAsyncRef} {...rest} />
      {error && <span>{error}</span>}
    </>
  );
};

export default SelectAsync;

SelectAsync.propTypes = {
  name: PropTypes.string.isRequired,
};

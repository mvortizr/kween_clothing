import React from 'react';
import {useField} from "formik";

import './form-input.styles.scss';

const FormInput = ({ label, type, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
  <div className='group'>

    <input className='form-input' {...field}  type={type} />
    
    {/* Display label on top*/}

    {label ? (
      <label
        className={`${
          field.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}

    {/* Display error at bottom */}
    {errorText ? (
      <label
        className = "form-input-error"
      >
        {errorText}
      </label>
    ) : null}
      
  </div>
)};

export default FormInput;
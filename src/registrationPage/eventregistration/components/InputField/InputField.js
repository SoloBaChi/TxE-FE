import React from 'react';
import InputCSS from '../InputCSS.module.css';

function InputField({labelText, htmlFor, inputId, type, value, onChange }) {
  return (

        <div className={InputCSS.inputholder}>
          <label htmlFor={htmlFor}>
              {labelText} <span className={InputCSS.required}>*</span>
          </label>
          <input
              type={type} // Add the type attribute for the input element
              id={inputId}
              placeholder={`Enter your ${labelText.toLowerCase()}`}
              value={value}
              onChange={onChange}
              required
          />
        </div>

    
  );
}

export default InputField;

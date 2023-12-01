import React, { forwardRef } from 'react';

const InputComIcone = forwardRef(({ value, onClick }, ref) => (
  <input
    type="text"
    value={value}
    onClick={onClick}
    readOnly
    style={{ cursor: 'pointer' }}
    className="form-control bg-secondary text-info"
    ref={ref}
  />
));

export default InputComIcone;

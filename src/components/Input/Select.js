import React from "react";

const Select = ({ label, size, color, children }) => {
  return (
    <div className="input_wrapper select">
      <p className={`text_${color}`}>{label}</p>
      <select className={`input ${size}`}>
        <option hidden>Please select an option</option>
        {children}
      </select>
      <i className="fa fa-angle-down"></i>
    </div>
  );
};

export default Select;

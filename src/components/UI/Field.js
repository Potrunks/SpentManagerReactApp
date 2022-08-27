import React from "react";

const Field = ({ label, type, placeholder, idAndName, property, onChange }) => {
  return (
    <div className="input-field">
      <span>{label}</span>
      {type !== "checkbox" ? (
        <input
          type={type}
          placeholder={placeholder}
          id={idAndName}
          name={idAndName}
          value={property}
          onChange={(e) => onChange(e)}
        ></input>
      ) : (
        <input
          onChange={(e) => onChange(e)}
          checked={property}
          type={type}
          name={idAndName}
          id={idAndName}
        ></input>
      )}
    </div>
  );
};

export default Field;

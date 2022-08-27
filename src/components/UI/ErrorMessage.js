import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="API-error-box" id="API-error-box">
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;

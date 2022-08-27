import React from "react";
import Button from "./Button";

const ConfirmButtonCommand = ({ iditem, methodForConfirm }) => {
  return (
    <div className="spent-card-btn-command">
      <Button
        mode={"confirm"}
        method={methodForConfirm}
        item={null}
        iditem={iditem}
      />
      <Button mode={"back"} method={null} item={null} iditem={null} />
    </div>
  );
};

export default ConfirmButtonCommand;

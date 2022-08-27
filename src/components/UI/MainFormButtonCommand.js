import React from "react";
import Button from "../UI/Button";

const MainFormButtonCommand = ({
  addButton,
  addButtonAttachMethod,
  clearFieldsButton,
  clearFieldsButtonAttachMethod,
  backButton,
}) => {
  return (
    <div className="main-button-container">
      {addButton && (
        <Button
          iditem={null}
          item={null}
          method={addButtonAttachMethod}
          mode={"create"}
        />
      )}
      {clearFieldsButton && (
        <Button
          iditem={null}
          item={null}
          method={clearFieldsButtonAttachMethod}
          mode={"clearInputField"}
        />
      )}
      {backButton && (
        <Button iditem={null} item={null} method={null} mode={"back"} />
      )}
    </div>
  );
};

export default MainFormButtonCommand;

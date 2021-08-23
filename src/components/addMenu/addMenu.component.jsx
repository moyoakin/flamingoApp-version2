import React from "react";

import { useCallback } from "react";

import "./addMenu.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";

import { useRestApi } from "../../context/restApiContext";

function Addmenu() {
  const [itemName, setItemName] = React.useState("");
  const [itemPrice, setitemPrice] = React.useState("");
  const [itemDescription, setItemDescription] = React.useState("");
  const [displayResult, setDisplayResult] = React.useState("");
  const { addNewMenu } = useRestApi();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "itemName"
      ? setItemName(value)
      : name === "itemPrice"
      ? setitemPrice(value)
      : setItemDescription(value);
  };

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const returnedMenu = await addNewMenu(itemName, itemDescription, itemPrice);

    setDisplayResult(
      returnedMenu === null ? "Menu cannot be created" : "Menu created"
    );
  }, []);

  return (
    <div className="addmenu">
      <div className="addedmenu">
        <form>
          <FormInput
            type="text"
            onChange={handleChange}
            name="itemName"
            label="Item Name"
            value={itemName}
          ></FormInput>

          <FormInput
            type="text"
            onChange={handleChange}
            name="itemPrice"
            label="Price"
            value={itemPrice}
          ></FormInput>

          <FormInput
            type="text"
            name="itemDescription"
            label=" Menu Item Description"
            onChange={handleChange}
            value={itemDescription}
          ></FormInput>
        </form>

        <CustomButton onClick={handleSubmit}>Add Menu </CustomButton>

        <div>
          {" "}
          <p> {displayResult} </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Addmenu;

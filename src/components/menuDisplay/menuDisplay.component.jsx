import React from "react";
import "./menuDisplay.styles.css";
import CustomButton from "../custom-button/cutom-button.component";

function MenuDisplay({ menu }) {
  console.log(menu);
  return (
    <div>
      <div className="menuDisplay">
        <p>{menu.itemName}</p>
        <p>{menu.itemDescription}</p>
        <p>{menu.itemPrice}</p>
        <img src={menu.imageUrl} alt="Menu" />
        <CustomButton type="submit"> Add to Cart</CustomButton>
      </div>
    </div>
  );
}

export default MenuDisplay;

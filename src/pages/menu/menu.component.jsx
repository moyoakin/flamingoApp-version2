import React, { useEffect } from "react";

import "./menu.styles.css";

const APIURL = "http://localhost:8030/api";
let rawResponse = [];

const MenuList = (props) => {
  useEffect(() => {
    const fetchMenu = async () => {
      rawResponse = await fetch(`${APIURL}/menu/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(rawResponse);
      rawResponse = await rawResponse.json();
    };
    fetchMenu();
  });

  return (
    <div>
      {rawResponse.map((menu, index) => (
        <p key={index}>
          {menu.itemName},{menu.itemPrice},{menu.itemDescription}, {menu.imageUrl}
        </p>
      ))}
    </div>
  );
};

export default MenuList;

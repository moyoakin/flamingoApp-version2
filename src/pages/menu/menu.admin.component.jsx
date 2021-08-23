import React from "react";

import "./menu.admin.styles.css";

import Addmenu from "../../components/addMenu/addMenu.component";
import MenuList from "../menuList/menuList-component";

function MenuAdmin() {
  return (
    <div>
      <div className="menu-admin">
        <Addmenu />
        <MenuList />

        <hr />
      </div>
    </div>
  );
}

export default MenuAdmin;

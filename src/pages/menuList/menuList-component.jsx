import React from "react";
import "./menuList.styles.css";

import { useRestApi } from "../../context/restApiContext";



function MenuList() {
  const { allMenuList, menuList} = useRestApi();
  let result = [];

  React.useEffect(() => {
    async function exec() {
      result = await allMenuList();

      console.log(" result from menuList", result);
    }
    exec();
   return result;
  }, []);

  return (
    <div>
      {menuList?.map((c) => (
        <div> {c.itemName}</div>
      ))}
    </div>
  );
}

export default MenuList;

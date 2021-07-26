import React from "react";
import "./menuList.styles.css";

import { useRestApi } from "../../context/restApiContext";

function MenuList() {
  const { allMenuList, menuList, err } = useRestApi();

  React.useEffect(() => {
    async function exec() {
      await allMenuList();
    }
    exec();
  }, []);

  return (
    <div>
      {err ? (
        <div>{err.message}</div>
      ) : (
        menuList?.map((c) => <div> {c.itemName}</div>)
      )}
    </div>
  );
}

export default MenuList;

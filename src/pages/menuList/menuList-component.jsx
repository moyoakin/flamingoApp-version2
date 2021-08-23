import React from "react";
import "./menuList.styles.css";
import MenuDisplay from "../../components/menuDisplay/menuDisplay.component";

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
      <div className="main-menu">
        {err ? (
          <div>{err.message}</div>
        ) : (
          menuList?.map((c, index) => <MenuDisplay key={index} menu={c} />)
        )}
      </div>
    </div>
  );
}

export default MenuList;

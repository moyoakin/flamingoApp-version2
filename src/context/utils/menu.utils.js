//const url = process.env.APIURL;
const url = "http://localhost:8030/api"
const allMenuItems = async () => {
  try {
    console.log(url);
    console.log(process.env);
    const allItem = await fetch(`${url}/menu/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });

    const menuResult = await allItem.json();
    console.log(menuResult);
    return menuResult;
  } catch (error) {
    console.log("Error");
  }
};

const deleteMenu = async (id) => {
  const apiResponse = await fetch(`${url}/menu/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (apiResponse.status === 200) {
    return "Selected Menu Deleted";
  } else {
    return "Menu not Found";
  }
};

const newMenu = async (itemName, itemDescription, itemPrice, imageUrl) => {
  const apiResponse = await fetch(`${url}/menu/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      itemName,
      itemDescription,
      itemPrice,
      imageUrl,
    }),
  });

  if (apiResponse.status === 201) {
    return apiResponse.json();
  } else {
    return null;
  }
};

const findById = async (id) => {
  const apiResponse = await fetch(`${url}/menu/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const searchResult = await apiResponse.json();
  console.log(searchResult);

  if (searchResult.status === 201) {
    return searchResult;
  } else {
    return "Menu not Found";
  }
};

export { allMenuItems, deleteMenu, newMenu, findById };

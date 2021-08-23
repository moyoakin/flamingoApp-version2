//const url = process.env.APIURL;
const url = "http://localhost:8030/api";
const getAllMenuItems = async () => {
  try {
    const fetchMenuItems = await fetch(`${url}/menu/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const apiResponse = await fetchMenuItems;
    return apiResponse;
  } catch (error) {
    return handleError(error);
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
    return handleError();
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
    console.log(Error);
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
    console.log(Error);
  }
};

function handleError(error) {
  return { status: error.name, message: error.message, caughtError: true };
}

export { getAllMenuItems, deleteMenu, newMenu, findById };

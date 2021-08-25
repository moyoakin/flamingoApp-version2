const url = "http://localhost:8030/api";
const userLogin = async (emailAddress, password) => {
  try {
    const rawResponse = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: emailAddress,
        password: password,
      }),
    });
    const returnedUser = await rawResponse.json();
    console.log(returnedUser);
    return returnedUser;
  } catch (error) {
    handleError(error);
  }
};

const newUser = async (firstName, lastName, email, password) => {
  const rawResponse = await fetch(`${url}/users/signUp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });

  if (rawResponse.json === 201) {
    return rawResponse.json();
  } else {
    return handleError();
  }
};

const deleteUser = async (id) => {
  const rawResponse = await fetch(`${url}/users/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (rawResponse.status === 201) {
    return "User Deleted";
  } else {
    return handleError();
  }
};

const getUserById = async (id) => {
  const rawResponse = await fetch(`$(url)/users/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const apiResult = await rawResponse.json();

  if (apiResult === 201) {
    return apiResult;
  } else {
    return handleError();
  }
};

function handleError(error) {
  return { status: error.name, message: error.message, caughtError: true };
}

export { userLogin, newUser, deleteUser, getUserById };

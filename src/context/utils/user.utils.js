const url = process.env.APIURL;
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
    console.log(error.message);
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
    return "User Cannot be created";
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
    return "Unable to delete User";
  }
};

const getUserById = async (id)=>{
  const rawResponse = await fetch(`$(url)/users/${id}`,{

    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  }
  
  );

  const apiResult =  await rawResponse.json();

  if(apiResult === 201){
    return apiResult;
  }else{
    return "User not found"
  }
}

export { userLogin, newUser, deleteUser,getUserById  };

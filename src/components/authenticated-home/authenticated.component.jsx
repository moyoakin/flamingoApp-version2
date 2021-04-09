import React from "react";

const AuthenticatedHome = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default AuthenticatedHome;

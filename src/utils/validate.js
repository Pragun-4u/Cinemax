import React from "react";

const validate = ({ name, email, password }) => {
  if (name !== undefined) {
    const nameError = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    if (!nameError) return "Name is not valid";
  }
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};

export default validate;

import { async } from "@firebase/util";
import { getStaticContextFromError } from "@remix-run/router";
import React from "react";
import { useState } from "react";
import { signAuthwithEmailandPassword } from "../utils/firebase/firebase.util";

const Signup = () => {
  const detailsForm = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [details, setDetails] = useState(detailsForm);
  const { displayName, email, password, confirmPassword } = details;
  const defaultValueForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("kindly write matchin password");
      return;
    }

    try {
      await signAuthwithEmailandPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const jsutcheckign = () => {
    console.log("anything works well");
  };
  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="display-name">Display Name</label>
        <input
          type="text"
          id="display-name"
          onChange={defaultValueForm}
          name="displayName"
          value={displayName}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={defaultValueForm}
          name="email"
          value={email}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          onChange={defaultValueForm}
          name="password"
          value={password}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={defaultValueForm}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;

import { async } from "@firebase/util";
import React from "react";
import Signup from "../../signup-form/signup-form.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { authUserSignIn } from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const googleauth = async () => {
    const { user } = await signInWithGooglePopup();
    authUserSignIn(user);
  };
  return (
    <div>
      SignIn page is created
      <button onClick={googleauth}>sign in with google</button>
      <Signup />
    </div>
  );
};

export default SignIn;

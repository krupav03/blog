import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      // storing value in local storage
      setIsAuth(true);
      navigate("/");
      // if the value in local storage is true it wil navigate to home page
      // when the value is false then it will navigate back to login page
    });
  };
  return (
    <div className="loginPage">
      <p>Sign In with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
